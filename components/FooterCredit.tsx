import { pageContent, Language } from "@/lib/content";

export default function FooterCredit({ language }: { language: Language }) {
  const content = pageContent[language].footer;

  return (
    <footer className="text-text-mid/80 py-4">
      <div className="mx-auto px-6 text-center text-sm md:text-base">
        <p className="inline-flex flex-wrap items-center justify-center gap-1">
          <span dir={language === "ar" ? "rtl" : "ltr"}>
            {content.creditPrefix}{" "}
          </span>
          <a
            href={
              language === "ar"
                ? "https://smweb.studio/ar"
                : "https://smweb.studio"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-text-mid/90 hover:text-text-dark/90 underline underline-offset-2"
            dir="ltr"
          >
            SM Web Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
