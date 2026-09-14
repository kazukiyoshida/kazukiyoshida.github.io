import { atom } from "nanostores";

export type Lang = "ja" | "en" | "zh";

const STORAGE_KEY = "lang";

function detectLangFromBrowser(): Lang {
  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    const code = lang.toLowerCase();
    if (code.startsWith("ja")) return "ja";
    if (code.startsWith("zh")) return "zh";
  }
  return "en";
}

function getInitialLang(): Lang {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ja" || stored === "en" || stored === "zh") return stored;
    return detectLangFromBrowser();
  }
  return "ja";
}

export const $lang = atom<Lang>(getInitialLang());

export function setLang(lang: Lang) {
  $lang.set(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

const translations = {
  // Sidebar / MobileSidebar
  bio: {
    ja: "CrestAI 代表\nSoftware Engineer @Tokyo",
    en: "CEO at CrestAI\nSoftware Engineer @Tokyo",
    zh: "CrestAI 代表\nSoftware Engineer @Tokyo",
  },
  heroRole: {
    ja: "CrestAI 代表 / Software Engineer @Tokyo",
    en: "CEO at CrestAI / Software Engineer @Tokyo",
    zh: "CrestAI 代表 / Software Engineer @Tokyo",
  },
  navAbout: {
    ja: "about",
    en: "about",
    zh: "about",
  },
  navBlog: {
    ja: "blog",
    en: "blog",
    zh: "blog",
  },

  // Blog list
  blogPath: {
    ja: "~/blog",
    en: "~/blog",
    zh: "~/blog",
  },
  posts: {
    ja: "posts",
    en: "posts",
    zh: "posts",
  },
  search: {
    ja: "search...",
    en: "search...",
    zh: "search...",
  },
  all: {
    ja: "all",
    en: "all",
    zh: "all",
  },
  noPostsFound: {
    ja: "投稿が見つかりません",
    en: "no posts found",
    zh: "未找到文章",
  },
  postedAt: {
    ja: "posted at",
    en: "posted at",
    zh: "posted at",
  },
  copyright: {
    ja: "© 2024 kazuki yoshida",
    en: "© 2024 kazuki yoshida",
    zh: "© 2024 kazuki yoshida",
  },
  footerRole: {
    ja: "CrestAI 代表 / Software Engineer @Tokyo",
    en: "CEO at CrestAI / Software Engineer @Tokyo",
    zh: "CrestAI 代表 / Software Engineer @Tokyo",
  },

  // About page
  aboutMe: {
    ja: "// about me",
    en: "// about me",
    zh: "// about me",
  },
  aboutRole: {
    ja: "CrestAI 代表 / Software Engineer @Tokyo",
    en: "CEO at CrestAI / Software Engineer @Tokyo",
    zh: "CrestAI 代表 / Software Engineer @Tokyo",
  },
  aboutBio: {
    ja: "CrestAI 代表。東京を拠点に活動する Software Engineer です。最近は Agent システム開発や AI 駆動開発に関連する仕事が多いです。",
    en: "CEO at CrestAI. I'm a Software Engineer based in Tokyo. Lately most of my work involves building agent systems and AI-driven development.",
    zh: "CrestAI 代表。我是一名驻东京的 Software Engineer。最近的工作主要围绕 Agent 系统开发和 AI 驱动开发。",
  },
  skills: {
    ja: "// skills",
    en: "// skills",
    zh: "// skills",
  },
  timeline: {
    ja: "// timeline",
    en: "// timeline",
    zh: "// timeline",
  },
  timelineEvents: {
    ja: [
      { year: "2025", event: "CrestAI を創業、AI システムの開発や開発プロセス改善に取り組む" },
      {
        year: "2025",
        event:
          "Tech-Verse 2025 に登壇、LINEヤフーで開発した Ray クラスタ管理基盤「Rayleigh」について発表",
        links: [
          { label: "session", href: "https://tech-verse.lycorp.co.jp/2025/ja/session/1022/" },
          { label: "video", href: "https://www.youtube.com/watch?v=koKPPi8Pto8" },
        ],
      },
      {
        year: "2021",
        event:
          "LINE (Machine Learning Infrastructure Team) に入社、機械学習システムの基盤や分散処理基盤を構築",
      },
      { year: "2018", event: "チームラボに入社、サーバーサイド・フロントエンドの開発に従事" },
      {
        year: "2017",
        event:
          "IGPIビジネスアナリティクス&インテリジェンスに入社、企業の戦略立案やデータ分析に基づく施策提案を行う",
      },
      {
        year: "2017",
        event:
          "京都大学大学院 理学研究科 物理学第一教室 修士課程修了（篠本研究室・神経細胞と画像処理機械学習に関する研究）",
        links: [{ label: "lab", href: "https://sites.google.com/view/shigerushinomoto/" }],
      },
    ],
    en: [
      {
        year: "2025",
        event:
          "Founded CrestAI, working on AI system development and improving development processes",
      },
      {
        year: "2025",
        event:
          "Spoke at Tech-Verse 2025 about Rayleigh, a management platform for Ray clusters built at LY Corporation",
        links: [
          { label: "session", href: "https://tech-verse.lycorp.co.jp/2025/ja/session/1022/" },
          { label: "video", href: "https://www.youtube.com/watch?v=koKPPi8Pto8" },
        ],
      },
      {
        year: "2021",
        event:
          "Joined LINE (Machine Learning Infrastructure Team), building ML system infrastructure and distributed processing platforms",
      },
      { year: "2018", event: "Joined teamLab, working on server-side and frontend development" },
      {
        year: "2017",
        event:
          "Joined IGPI Business Analytics & Intelligence, providing strategic planning and data-driven recommendations for enterprises",
      },
      {
        year: "2017",
        event:
          "M.Sc. in Physics, Graduate School of Science, Kyoto University (Shinomoto Lab; research on neural cells and image processing with machine learning)",
        links: [{ label: "lab", href: "https://sites.google.com/view/shigerushinomoto/" }],
      },
    ],
    zh: [
      { year: "2025", event: "创立 CrestAI，从事 AI 系统开发和开发流程改善" },
      {
        year: "2025",
        event:
          "在 Tech-Verse 2025 上发表演讲，介绍在 LY Corporation 开发的 Ray 集群管理平台「Rayleigh」",
        links: [
          { label: "session", href: "https://tech-verse.lycorp.co.jp/2025/ja/session/1022/" },
          { label: "video", href: "https://www.youtube.com/watch?v=koKPPi8Pto8" },
        ],
      },
      {
        year: "2021",
        event:
          "加入 LINE (Machine Learning Infrastructure Team)，构建机器学习系统基础设施和分布式处理平台",
      },
      { year: "2018", event: "加入 teamLab，从事服务端和前端开发" },
      {
        year: "2017",
        event:
          "加入 IGPI Business Analytics & Intelligence，为企业提供战略规划和基于数据分析的方案建议",
      },
      {
        year: "2017",
        event:
          "京都大学大学院 理学研究科 物理学第一教室 硕士毕业（篠本研究室・神经细胞与图像处理机器学习相关研究）",
        links: [{ label: "lab", href: "https://sites.google.com/view/shigerushinomoto/" }],
      },
    ],
  },
  contact: {
    ja: "// contact",
    en: "// contact",
    zh: "// contact",
  },
  contactText: {
    ja: "X や GitHub、LinkedIn からお気軽にご連絡ください。",
    en: "Feel free to reach out via X, GitHub, or LinkedIn.",
    zh: "欢迎通过X、GitHub或LinkedIn与我联系。",
  },

  // 404 page
  pageNotFound: {
    ja: "// page not found",
    en: "// page not found",
    zh: "// page not found",
  },
  goHome: {
    ja: "> go home",
    en: "> go home",
    zh: "> go home",
  },
} as const;

type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  const entry = translations[key];
  if (typeof entry[lang] === "string") return entry[lang] as string;
  return entry[lang] as unknown as string;
}

export interface TimelineEvent {
  year: string;
  event: string;
  links?: readonly { label: string; href: string }[];
}

export function getTimelineEvents(lang: Lang): readonly TimelineEvent[] {
  return translations.timelineEvents[lang];
}
