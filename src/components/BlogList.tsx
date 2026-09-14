import { useState } from "react";
import { useStore } from "@nanostores/react";
import { $lang, t, type Lang } from "../lib/i18n";
import { withBase } from "../lib/path";
import type { Post } from "../lib/blog-data";
import { posts } from "../lib/blog-data";

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { icon: <XIcon />, href: "https://x.com/_kazukiyoshida_", label: "X" },
  { icon: <GitHubIcon />, href: "https://github.com/kazukiyoshida", label: "GitHub" },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/kazukiyoshida0602/",
    label: "LinkedIn",
  },
];

function PostItem({
  post,
  index,
  postedAtLabel,
  lang,
}: {
  post: Post;
  index: number;
  postedAtLabel: string;
  lang: Lang;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="py-7 border-b animate-fade-in-up"
      style={{
        borderColor: "var(--content-border)",
        animationDelay: `${index * 0.06}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={withBase(`/blog/${post.id}`)} className="block">
        <time
          className="text-xs mb-2 block"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--content-text-muted)",
            letterSpacing: "0.04em",
            fontSize: "0.7rem",
          }}
        >
          {postedAtLabel} {post.date}
        </time>

        <div className="flex items-start gap-1.5 md:gap-2 mb-3">
          <span
            className="text-xs mt-1 shrink-0 transition-opacity duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--amber)",
              opacity: hovered ? 1 : 0,
            }}
          >
            &gt;
          </span>
          <h2
            className="text-base md:text-[1.15rem] font-semibold transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: hovered ? "var(--amber)" : "var(--content-heading-sub)",
              lineHeight: 1.45,
              letterSpacing: "-0.01em",
            }}
          >
            {post.title[lang]}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="tag-badge pointer-events-none">
              {tag}
            </span>
          ))}
        </div>
      </a>
    </article>
  );
}

export default function BlogList() {
  const lang = useStore($lang);

  return (
    <>
      {/* Top bar - Desktop only */}
      <div
        className="sticky top-0 z-20 px-4 md:px-32 py-4 items-center hidden md:flex"
        style={{
          background: "var(--content-bg-overlay)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--content-border)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--amber)",
              fontSize: "0.8rem",
            }}
          >
            {t("blogPath", lang)}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--content-text-faint)",
              fontSize: "0.75rem",
            }}
          >
            {posts.length} {t("posts", lang)}
          </span>
        </div>
      </div>

      <div className="px-4 md:px-32 py-8 md:py-10">
        {/* Profile intro */}
        <div
          className="py-7 md:py-10 animate-fade-in-up"
          style={{
            borderTop: "2px solid var(--content-hero-border)",
            borderBottom: "2px solid var(--content-hero-border)",
          }}
        >
          <div className="min-w-0">
            <h2
              className="text-lg md:text-2xl font-bold mb-2 md:mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--content-heading)",
              }}
            >
              Hi, I'm Kazuki — I love building things with code.
            </h2>
            <p
              className="text-sm md:text-base mb-4 leading-relaxed"
              style={{
                fontFamily: "'IBM Plex Sans JP', sans-serif",
                color: "var(--content-text)",
              }}
            >
              {t("heroRole", lang)}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--content-social)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Post list */}
        <div className="mt-8">
          {posts.map((post, i) => (
            <PostItem
              key={post.id}
              post={post}
              index={i}
              postedAtLabel={t("postedAt", lang)}
              lang={lang}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-12 pb-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="mb-6" style={{ borderTop: "1px solid var(--content-border-subtle)" }} />
          <div className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--content-text-xfaint)",
                fontSize: "0.7rem",
              }}
            >
              {t("copyright", lang)}
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--content-text-xfaint)",
                fontSize: "0.65rem",
              }}
            >
              {t("footerRole", lang)}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
