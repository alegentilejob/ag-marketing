import { Metadata } from 'next';
import { headers } from 'next/headers';
import { projectsIt, projectsEn } from '@/data/projects';

interface Props {
    params: Promise<{
        category: string;
        year: string;
        month: string;
        day: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, year, month, day, slug } = await params;
    const headerList = await headers();
    const lang = headerList.get('x-next-lang') || 'it';

    const baseUrl = 'https://ag-marketing.vercel.app';

    // Search only in the appropriate language list
    const projectsToSearch = lang === 'en'
        ? projectsEn.map(p => ({ ...p, _lang: 'en' as const }))
        : projectsIt.map(p => ({ ...p, _lang: 'it' as const }));

    const project = projectsToSearch.find(
        p =>
            p.category.toLowerCase() === category &&
            p.year === year &&
            p.month === month &&
            p.day === day &&
            p.slug === slug
    );

    if (!project) {
        return {
            title: 'Articolo non trovato | Alessandro Gentile',
            description: 'Questo articolo non è disponibile.',
        };
    }

    const coverUrl = project.coverImage.startsWith('http')
        ? project.coverImage
        : `${baseUrl}${project.coverImage}`;

    // Find alternates
    const itVersion = projectsIt.find(p => p.id === project.id);
    const enVersion = projectsEn.find(p => p.id === project.id);

    const languages: Record<string, string> = {};
    if (itVersion) {
        languages['it'] = `${baseUrl}/blog/${itVersion.category}/${itVersion.year}/${itVersion.month}/${itVersion.day}/${itVersion.slug}`;
    }
    if (enVersion) {
        languages['en'] = `${baseUrl}/en/blog/${enVersion.category}/${enVersion.year}/${enVersion.month}/${enVersion.day}/${enVersion.slug}`;
    }

    return {
        title: `${project.title} | AGM`,
        description: project.description,
        openGraph: {
            title: `${project.title} | AGM`,
            description: project.description,
            type: 'article',
            publishedTime: `${project.year}-${project.month}-${project.day}`,
            authors: ['Alessandro Gentile'],
            images: [{ url: coverUrl, width: 1200, height: 630, alt: project.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | AGM`,
            description: project.description,
            images: [coverUrl],
        },
        alternates: {
            canonical: project._lang === 'it'
                ? `${baseUrl}/blog/${category}/${year}/${month}/${day}/${slug}`
                : `${baseUrl}/en/blog/${category}/${year}/${month}/${day}/${slug}`,
            languages,
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
