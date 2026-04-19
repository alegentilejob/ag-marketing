export const PATH_MAP: Record<string, { it: string, en: string }> = {
    'home': { it: '/', en: '/en/' },
    'chi-sono': { it: '/chi-sono', en: '/en/about-me' },
    'esperienze': { it: '/esperienze', en: '/en/experience' },
    'progetti': { it: '/progetti', en: '/en/projects' },
    'skills': { it: '/skills', en: '/en/skills' },
    'blog': { it: '/blog', en: '/en/blog' },
    'grazie': { it: '/grazie', en: '/en/thank-you' },
    'cv': { it: '/cv', en: '/en/cv' },
};

export const getLocalizedPath = (path: string, targetLang: 'it' | 'en'): string => {
    // Normalize path for comparison (remove trailing slash if not root)
    const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

    // 1. Check for exact match in PATH_MAP
    for (const key in PATH_MAP) {
        const entry = PATH_MAP[key];
        // Compare with both original and normalized versions of entry paths if necessary
        // but since our map entries don't have trailing slashes (mostly), normalizedPath handles it
        if (normalizedPath === entry.it || normalizedPath === entry.en) {
            return targetLang === 'it' ? entry.it : entry.en;
        }
    }

    // 2. Handle nested paths (e.g. /progetti/[cat])
    if (path.startsWith('/progetti/') || path.startsWith('/en/projects/')) {
        const itBase = '/progetti/';
        const enBase = '/en/projects/';
        const currentBase = path.startsWith(itBase) ? itBase : enBase;
        const subPath = path.slice(currentBase.length);
        
        return targetLang === 'it' ? `${itBase}${subPath}` : `${enBase}${subPath}`;
    }

    if (path.startsWith('/blog/') || path.startsWith('/en/blog/')) {
        const itBase = '/blog/';
        const enBase = '/en/blog/';
        const currentBase = path.startsWith(itBase) ? itBase : enBase;
        const subPath = path.slice(currentBase.length);
        
        return targetLang === 'it' ? `${itBase}${subPath}` : `${enBase}${subPath}`;
    }

    if (path.startsWith('/esperienze/') || path.startsWith('/en/experience/')) {
        const itBase = '/esperienze/';
        const enBase = '/en/experience/';
        const currentBase = path.startsWith(itBase) ? itBase : enBase;
        const subPath = path.slice(currentBase.length);
        
        return targetLang === 'it' ? `${itBase}${subPath}` : `${enBase}${subPath}`;
    }

    // Default fallback: just toggle prefix if not found in map
    if (targetLang === 'en' && !path.startsWith('/en/')) {
        return `/en${path === '/' ? '/' : path}`;
    }
    if (targetLang === 'it' && path.startsWith('/en/')) {
        return path.replace('/en', '') || '/';
    }

    return path;
};
