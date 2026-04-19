import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function uploadProfileImage(imagePath: string) {
  const filePath = path.join(process.cwd(), 'public', imagePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Profile image not found at ${filePath}`);
    return null;
  }

  const file = fs.readFileSync(filePath);
  const fileName = path.basename(imagePath);
  const bucketName = 'media';

  // 1. Ensure bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  if (buckets && !buckets.find(b => b.name === bucketName)) {
    console.log(`Creating bucket: ${bucketName}...`);
    const { error: bucketError } = await supabase.storage.createBucket(bucketName, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });
    if (bucketError) {
      console.warn(`Note: Could not create bucket (this is normal if not using service_role): ${bucketError.message}`);
    }
  }

  // 2. Upload (upsert)
  const destPath = `profile/${fileName}`;
  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(destPath, file, {
      contentType: 'image/png', // Adjust if needed
      upsert: true
    });

  if (uploadError) {
    console.error(`Error uploading profile image: ${uploadError.message}`);
    return null;
  }

  // 3. Get Public URL
  const { data } = supabase.storage.from(bucketName).getPublicUrl(destPath);
  console.log(`Profile image uploaded. Public URL: ${data.publicUrl}`);
  return data.publicUrl;
}

async function syncLanguage(lang: 'it' | 'en') {
  console.log(`\n--- Synchronizing ${lang.toUpperCase()} ---`);
  
  // Dynamic import of content
  const contentPath = path.resolve(process.cwd(), `src/data/content-${lang}.ts`);
  const content = await import(`file://${contentPath}`);
  const { siteConfig, sections } = content;

  // 0. Handle Profile Image Upload
  let profileUrl = siteConfig.meta.profileImage;
  if (profileUrl.startsWith('/media/')) {
    const uploadedUrl = await uploadProfileImage(profileUrl);
    if (uploadedUrl) {
      profileUrl = uploadedUrl;
    }
  }

  // 1. Sync Global Settings
  console.log('Syncing global settings...');
  const { error: globalErr } = await supabase
    .from('global_settings')
    .upsert({
      lang,
      meta: {
        ...siteConfig.meta,
        profileImage: profileUrl // Use Supabase URL
      },
      contact: siteConfig.contact,
      theme_config: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e40af",
        fontFamily: "Arial, sans-serif",
        darkModeEnabled: true
      }
    }, { onConflict: 'lang' });

  if (globalErr) console.error('Global Settings error:', globalErr.message);

  // 2. Sync Experiences
  console.log('Syncing experiences...');
  const items = sections.experience.items.map((item: any, idx: number) => ({
      lang,
      role: item.role,
      company: item.company,
      period: item.period,
      location: item.location,
      type: item.type,
      introduction_text: item.introduction.text,
      introduction_image: item.introduction.image,
      development_text: item.development.text,
      development_image: item.development.image,
      conclusion_text: item.conclusion.text,
      conclusion_image: item.conclusion.image,
      tags: item.tags,
      sort_order: idx
  }));

  await supabase.from('experiences').delete().eq('lang', lang);
  const { error: expErr } = await supabase.from('experiences').insert(items);
  if (expErr) console.error('Experiences error:', expErr.message);

  // 3. Sync Skills
  console.log('Syncing skills...');
  const skillItems: any[] = [];
  
  sections.skills.hard.forEach((name: string, idx: number) => {
    skillItems.push({ lang, name, type: 'hard', sort_order: idx });
  });
  sections.skills.soft.forEach((name: string, idx: number) => {
    skillItems.push({ lang, name, type: 'soft', sort_order: idx });
  });
  sections.skills.software.forEach((sw: any, idx: number) => {
    skillItems.push({ 
        lang, 
        name: sw.name, 
        type: 'software', 
        category: sw.category, 
        icon: sw.icon, 
        sort_order: idx 
    });
  });

  await supabase.from('skills').delete().eq('lang', lang);
  const { error: skillErr } = await supabase.from('skills').insert(skillItems);
  if (skillErr) console.error('Skills error:', skillErr.message);

  // 4. Sync Education
  console.log('Syncing education...');
  const eduItems = sections.about.education.map((edu: any, idx: number) => ({
    lang,
    institution: edu.institution,
    period: edu.period,
    location: edu.location,
    sort_order: idx
  }));

  await supabase.from('education').delete().eq('lang', lang);
  const { error: eduErr } = await supabase.from('education').insert(eduItems);
  if (eduErr) console.error('Education error:', eduErr.message);

  console.log(`\n✅ ${lang.toUpperCase()} synchronization complete.`);
}

async function run() {
  try {
    await syncLanguage('it');
    await syncLanguage('en');
    console.log('\n--- Sync complete! ---');
  } catch (err) {
    console.error('An unexpected error occurred during sync:', err);
  }
}

run();
