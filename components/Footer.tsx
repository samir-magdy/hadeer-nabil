import { SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-light">
          © 2025 Hadeer Nabil · Cairo, Egypt
        </p>
        {/* <div className="flex items-center gap-4">
          <a
            href={SOCIAL.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-text-light hover:text-text-mid transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <TikTokIcon />
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-text-light hover:text-text-mid transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-text-light hover:text-text-mid transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <YouTubeIcon />
          </a>
        </div> */}
      </div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
