import React from 'react';
import Image from 'next/image';

interface SoftwareLogoProps {
  name: string;
  logoUrl?: string;
  customIcon?: React.ReactNode;
  bg?: string;
  maskBg?: string;
  zoom?: string;
  className?: string;
  noBg?: boolean;
}

const normalizeName = (name: string) => {
  const n = name.toLowerCase().trim();
  if (n.includes('analytics') || n.includes('ga4')) return 'ga4';
  if (n.includes('semrush')) return 'semrush';
  if (n.includes('mailchimp')) return 'mailchimp';
  if (n.includes('meta')) return 'meta';
  if (n.includes('wordpress')) return 'wordpress';
  if (n.includes('search console') || n.includes('gsc')) return 'gsc';
  if (n.includes('powerpoint') || n.includes('ppt')) return 'ppt';
  if (n.includes('datastudio') || n.includes('looker')) return 'datastudio';
  if (n.includes('seozoom')) return 'seozoom';
  if (n.includes('excel')) return 'excel';
  if (n.includes('helper')) return 'linkedhelper';
  if (n.includes('sales navigator') || n.includes('linkedin')) return 'linkedin';
  if (n.includes('canva')) return 'canva';
  if (n.includes('figma')) return 'figma';
  return 'default';
};

const registry: Record<string, {
  logoUrl?: string;
  customIcon?: React.ReactNode;
  bg: string;
  maskBg?: string;
  zoom: string;
}> = {
  ga4: {
    logoUrl: "/media/skills/Logo_GA4.png",
    bg: "/media/Personal branding/Backgrounds_orange.jpg",
    zoom: "w-[70%] h-[70%] object-contain"
  },
  semrush: {
    logoUrl: "/media/skills/Logo_semrush.png",
    bg: "/media/Personal branding/Backgrounds_purple.jpg",
    maskBg: "#182016",
    zoom: "w-[70%] h-[70%] object-contain"
  },
  mailchimp: {
    logoUrl: "/media/skills/Logo_MailChimp.webp",
    bg: "/media/Personal branding/Backgrounds_yellow.jpg",
    zoom: "w-[115%] h-[115%] object-cover"
  },
  meta: {
    logoUrl: "/media/skills/Logo_Meta.avif",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[115%] h-[115%] object-cover"
  },
  wordpress: {
    logoUrl: "/media/skills/Logo_Wordpress.webp",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[115%] h-[115%] object-cover"
  },
  gsc: {
    logoUrl: "/media/skills/Logo_GSC.png",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[115%] h-[115%] object-cover"
  },
  ppt: {
    logoUrl: "/media/skills/Logo_PPT.jpg",
    bg: "/media/Personal branding/Backgrounds_red.jpg",
    zoom: "w-[115%] h-[115%] object-cover"
  },
  datastudio: {
    logoUrl: "/media/skills/Logo_Datastudio.png",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[70%] h-[70%] object-contain"
  },
  seozoom: {
    logoUrl: "/media/skills/Logo_SeoZoom.png",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[75%] h-[75%] object-contain"
  },
  excel: {
    logoUrl: "/media/skills/Logo_excel.jpg",
    bg: "/media/Personal branding/Backgrounds_green.jpg",
    zoom: "w-[105%] h-[105%] object-contain"
  },
  linkedhelper: {
    logoUrl: "/media/skills/Logo_Linkedhealper.png",
    bg: "/media/Personal branding/Backgrounds_purple.jpg",
    maskBg: "#007fbc",
    zoom: "w-[65%] h-[65%] object-contain"
  },
  linkedin: {
    logoUrl: "/media/skills/Logo_Linkedin.png",
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    maskBg: "#007fbc",
    zoom: "w-[65%] h-[65%] object-contain"
  },
  canva: {
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[70%] h-[70%] object-contain",
    customIcon: (
      <svg viewBox="0 0 100 100" className="w-full h-full select-none pointer-events-none">
        <circle cx="50" cy="50" r="50" fill="url(#canvaGradient)" />
        <defs>
          <linearGradient id="canvaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c4cc" />
            <stop offset="100%" stopColor="#7d2ae8" />
          </linearGradient>
        </defs>
        <text x="50" y="62" fontFamily="sans-serif" fontSize="36" fontWeight="bold" fill="white" textAnchor="middle">C</text>
      </svg>
    )
  },
  figma: {
    bg: "/media/Personal branding/Backgrounds_purple.jpg",
    zoom: "w-[50%] h-[50%] object-contain",
    customIcon: (
      <svg viewBox="0 0 136 204" className="w-full h-full select-none pointer-events-none">
        <path d="M34 204C15.2223 204 0 188.778 0 170C0 151.222 15.2223 136 34 136C52.7777 136 68 151.222 68 170C68 188.778 52.7777 204 34 204Z" fill="#18A0FB"/>
        <path d="M0 102C0 83.2223 15.2223 68 34 68H68V136H34C15.2223 136 0 120.778 0 102Z" fill="#1ABC9C"/>
        <path d="M0 34C0 15.2223 15.2223 0 34 0H68V68H34C15.2223 68 0 52.7777 0 34Z" fill="#F24E1E"/>
        <path d="M68 0H102C120.778 0 136 15.2223 136 34C136 52.7777 120.778 68 102 68H68V0Z" fill="#FF7262"/>
        <path d="M68 68H102C120.778 68 136 83.2223 136 102C136 120.778 120.778 136 102 136H68V68Z" fill="#A259FF"/>
      </svg>
    )
  },
  default: {
    bg: "/media/Personal branding/Backgrounds_blue.jpg",
    zoom: "w-[75%] h-[75%] object-contain"
  }
};

export default function SoftwareLogo({
  name,
  logoUrl,
  customIcon,
  bg,
  maskBg,
  zoom,
  className = "w-16 h-16 md:w-20 md:h-20",
  noBg = false
}: SoftwareLogoProps) {
  const normKey = normalizeName(name);
  const entry = registry[normKey] || registry.default;

  // Resolve active props with fallbacks from registry
  const finalLogoUrl = logoUrl || entry.logoUrl;
  const finalCustomIcon = customIcon || entry.customIcon;
  const finalBg = bg || entry.bg;
  const finalMaskBg = maskBg || entry.maskBg || "#ffffff";
  const finalZoom = zoom || entry.zoom;

  return (
    <div 
      className={noBg ? `rounded-none shrink-0 relative overflow-hidden flex items-center justify-center ${className}` : `rounded-none shrink-0 border border-white/10 relative overflow-hidden flex items-center justify-center bg-cover bg-center ${className}`}
      style={noBg ? {} : { backgroundImage: `url("${finalBg}")` }}
    >
      {/* White circle, slightly larger than mask, leaving more space for the square background */}
      <div className="w-[78%] h-[78%] bg-white rounded-full flex items-center justify-center shadow-md">
        {/* Mask circle with dynamic background color */}
        <div 
          className="w-[84%] h-[84%] rounded-full overflow-hidden flex items-center justify-center relative"
          style={{ backgroundColor: finalMaskBg }}
        >
          {finalLogoUrl ? (
            <Image
              src={finalLogoUrl}
              alt={name}
              width={48}
              height={48}
              className={finalZoom}
            />
          ) : (
            <div className="w-[84%] h-[84%] flex items-center justify-center">
              {finalCustomIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
