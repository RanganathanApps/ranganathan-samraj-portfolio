"use client";

import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { Button } from "../../components/ui/button";

const roles = [
  "Senior Android developer building high-performance mobile applications.",
  "Kotlin and Jetpack Compose specialist with modern Android architecture expertise.",
  "Engineering lead focused on scalable delivery, mentoring, and practical AI adoption.",
];

const skills = [
  "Kotlin",
  "Java",
  "Jetpack Components",
  "Jetpack Compose",
  "MVVM",
  "Coroutines",
  "WorkManager",
  "Dependency Injection",
  "REST APIs",
  "GraphQL",
  "CI/CD",
  "Firebase",
  "GitHub",
  "Git",
  "Unit Testing",
  "Mockk",
  "Agile/Scrum",
];

const skillGroups = [
  {
    title: "Android Core",
    description: "Day-to-day foundations for scalable Android app delivery.",
    items: ["Kotlin", "Java", "Jetpack Components", "Jetpack Compose", "MVVM"],
  },
  {
    title: "Architecture & Delivery",
    description: "Patterns and workflow tools that keep projects maintainable.",
    items: ["Coroutines", "WorkManager", "Dependency Injection", "CI/CD", "Agile/Scrum"],
  },
  {
    title: "Platform & Quality",
    description: "Integration and testing capabilities used in production work.",
    items: ["REST APIs", "GraphQL", "Firebase", "Git", "GitHub", "Unit Testing", "Mockk"],
  },
];

const aiHighlights = [
  {
    title: "Android Development",
    description: "Certified grounding in Android development practices and implementation fundamentals.",
  },
  {
    title: "GenAI Academy: Yellow Belt Level 2 for Engineers",
    description: "Applied AI learning focused on practical engineering workflows.",
  },
  {
    title: "Prompt Engineering: Ethical Hacking & Generative AI Fusion",
    description: "Exploring prompt design with security-aware thinking and experimentation.",
  },
  {
    title: "Generative AI Foundations: Ethical & Responsible Use of AI in IT",
    description: "Grounding AI work in responsible usage, governance, and delivery discipline.",
  },
  {
    title: "Leveraging Generative AI for Business",
    description: "Connecting GenAI capabilities to real business and product outcomes.",
  },
];

const experience = [
  {
    role: "Digital Engineering Lead Engineer - Android",
    company: "NTT Data Information Processing Services, Chennai",
    period: "2023 - Present",
    tone: "primary",
    focus: "Banking and engineering enablement",
    badge: "Current",
    bullets: [
      "Designing and developing online mobile banking applications with 90 percent code coverage.",
      "Leveraging AI coding assistance to improve delivery speed while maintaining engineering quality.",
    ],
  },
  {
    role: "Android Developer",
    company: "Persistent Systems, Bangalore",
    period: "2020 - 2022",
    tone: "muted",
    focus: "Media and e-learning products",
    badge: "Product delivery",
    bullets: [
      "Developed e-learning applications for JioTV and mobile platforms with unit testing.",
      "Maintained reusable code for better accessibility and improved readability across the app.",
    ],
  },
  {
    role: "Android Developer",
    company: "Shamla Tech Solutions, Coimbatore",
    period: "Dec 2017 - 2019",
    tone: "muted",
    focus: "Logistics and cargo systems",
    badge: "Legacy modernization",
    bullets: [
      "Handled legacy source code while adding features and fixing bugs for cargo booking and tracking services.",
    ],
  },
  {
    role: "Android Developer",
    company: "NoteBookData, Coimbatore",
    period: "Feb 2017 - Nov 2017",
    tone: "muted",
    focus: "Taxi application delivery",
    badge: "Business apps",
    bullets: [
      "Developed taxi applications for a business use case with production-oriented Android delivery.",
    ],
  },
  {
    role: "Android Developer",
    company: "Global Software Developments, Coimbatore",
    period: "2015 - 2017",
    tone: "muted",
    focus: "Socket, commerce, and chat apps",
    badge: "Foundation years",
    bullets: [
      "Built socket-based, e-commerce, and chat applications with tracking capabilities.",
      "Integrated Firebase crash reporting and push notifications to improve reliability and engagement.",
    ],
  },
];

const projects = [
  {
    eyebrow: "NTT Data",
    title: "Mobile Banking Platform",
    description:
      "Designed and developed online mobile banking experiences for quality-sensitive financial flows where reliability, clarity, and engineering discipline were essential.",
    impact: "Delivering high-trust banking environment.",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Unit Testing"],
    highlights: [
      "Focused on secure, dependable user journeys in a compliance-minded domain.",
      "Balanced delivery speed with strong testing and maintainable architecture.",
    ],
    accent:
      "from-slate-950 via-emerald-900 to-green-700",
  },
  {
    eyebrow: "Persistent Systems",
    title: "E-Learning Platform",
    description:
      "Built e-learning Android experiences for JioTV and related mobile apps, with an emphasis on usability, unit testing, and reusable implementation patterns.",
    impact: "Designed & built apps for media and education use cases.",
    stack: ["Android", "Unit Testing", "Accessibility", "Reusable UI"],
    highlights: [
      "Supported learning-focused interfaces where navigation and clarity really matter.",
      "Strengthened maintainability through reusable code and better UI consistency.",
    ],
    accent:
      "from-slate-950 via-emerald-900 to-emerald-700",
  },
  {
    eyebrow: "Shamla Tech",
    title: "Cargo Booking & Tracking",
    description:
      "Extended and stabilized legacy cargo service applications by improving feature support, fixing issues, and making older codebases easier to work with.",
    impact: "Improving maintainability in a legacy system.",
    stack: ["Android", "Legacy Code", "Bug Fixing", "Feature Delivery"],
    highlights: [
      "Worked directly in existing production code rather than starting from a clean slate.",
      "Added practical improvements to booking and tracking experiences used in real operations.",
    ],
    accent:
      "from-slate-900 via-emerald-900 to-green-700",
  },
  {
    eyebrow: "Business Apps",
    title: "Taxi Booking Application",
    description:
      "Delivered Android taxi app functionality for a business use case, focusing on practical product execution and dependable mobile behavior.",
    impact: "Designed & Deployed transport solution in a short delivery window.",
    stack: ["Android", "Business Apps", "UI Delivery", "Product Execution"],
    highlights: [
      "Built for operational use instead of a purely experimental demo scenario.",
      "Focused on real-world delivery needs and stable app behavior.",
    ],
    accent:
      "from-slate-950 via-green-900 to-emerald-700",
  },
  {
    eyebrow: "Foundation Work",
    title: "Commerce, Chat & Realtime Apps",
    description:
      "Built early-career Android applications spanning e-commerce, chat, tracking, and socket-based communication, while integrating Firebase reporting and notifications.",
    impact: "Created realtime and customer-facing app patterns.",
    stack: ["Sockets", "Firebase", "Push Notifications", "E-commerce"],
    highlights: [
      "Worked across multiple app patterns that demanded realtime behavior and user responsiveness.",
      "Added crash reporting and notifications to improve reliability and engagement loops.",
    ],
    accent:
      "from-slate-900 via-emerald-900 to-emerald-600",
  },
];

const socialLinks = {
  github: "https://github.com/RanganathanApps",
  linkedin: "https://www.linkedin.com/in/ranganathan-samraj-2b221773/",
};

type ThemeName = "monochrome" | "midnight" | "slightMidnightMono";

const themes = {
  monochrome: {
    logoGradient: "bg-[linear-gradient(135deg,_#0f172a,_#475569)]",
    logoShadow: "shadow-[0_10px_24px_rgba(100,116,139,0.28)]",
    sectionAccentText: "text-slate-700",
    headerActionText: "text-slate-700",
    heroBackdrop:
      "bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.24),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(203,213,225,0.2),_transparent_32%),linear-gradient(180deg,_#ffffff,_#f8fafc_62%,_#ffffff)]",
    heroOrbStrong: "bg-slate-200/70",
    heroOrbSoft: "bg-slate-200/60",
    heroTitleGradient: "bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600",
    heroDrivingPanel:
      "border-slate-200 bg-[linear-gradient(135deg,_rgba(226,232,240,0.62),_rgba(241,245,249,0.78),_rgba(255,255,255,0.96))]",
    heroProfileGradient: "bg-[linear-gradient(160deg,_#020617_0%,_#0f172a_45%,_#475569_100%)]",
    certificationsPanelBg: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950",
    certificationsGlow:
      "bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.2),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0))]",
    certificationsAccentText: "text-slate-200",
    certificationsHighlightCard: "border-slate-300/20 bg-slate-400/10",
    contactFormPanelBg: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950",
    aboutSectionBg:
      "bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(248,250,252,0.82)_48%,_rgba(255,255,255,1)_100%)]",
    aboutHeaderBg:
      "bg-[linear-gradient(135deg,_rgba(226,232,240,0.62)_0%,_rgba(255,255,255,1)_55%,_rgba(248,250,252,0.82)_100%)]",
    experienceSectionBg:
      "bg-[linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(226,232,240,0.36)_28%,_rgba(255,255,255,1)_100%)]",
    projectsSectionBg:
      "bg-[linear-gradient(180deg,_rgba(241,245,249,0.3)_0%,_rgba(255,255,255,0.92)_24%,_rgba(248,250,252,1)_100%)]",
    appBg: "bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_42%,_#f8fafc_100%)]",
    selection: "selection:bg-slate-200",
    focusRing: "focus:ring-slate-400",
    primaryTone: "bg-slate-600 text-white",
    primaryBadge: "bg-slate-100 text-slate-700",
    primaryDot: "bg-slate-500/80",
    mutedPanel: "border-slate-200 bg-slate-100/80",
    mutedPanelLabel: "text-slate-600",
    footerResumeBtn:
      "border-slate-400/30 bg-slate-500/10 text-slate-200 hover:border-slate-300/40 hover:bg-slate-500/20",
    projectAccents: [
      "from-slate-950 via-slate-800 to-zinc-600",
      "from-slate-950 via-zinc-800 to-slate-700",
      "from-slate-900 via-slate-800 to-gray-600",
      "from-slate-950 via-zinc-900 to-slate-700",
      "from-slate-900 via-zinc-800 to-slate-600",
    ],
  },
  midnight: {
    logoGradient: "bg-[linear-gradient(135deg,_#0f172a,_#312e81)]",
    logoShadow: "shadow-[0_10px_24px_rgba(79,70,229,0.28)]",
    sectionAccentText: "text-indigo-700",
    headerActionText: "text-indigo-700",
    heroBackdrop:
      "bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.24),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_32%),linear-gradient(180deg,_#ffffff,_#eef2ff_62%,_#ffffff)]",
    heroOrbStrong: "bg-indigo-200/70",
    heroOrbSoft: "bg-indigo-200/60",
    heroTitleGradient: "bg-gradient-to-r from-slate-950 via-indigo-900 to-blue-700",
    heroDrivingPanel:
      "border-indigo-100 bg-[linear-gradient(135deg,_rgba(224,231,255,0.62),_rgba(219,234,254,0.78),_rgba(255,255,255,0.96))]",
    heroProfileGradient: "bg-[linear-gradient(160deg,_#020617_0%,_#0f172a_45%,_#312e81_100%)]",
    certificationsPanelBg: "bg-gradient-to-br from-slate-900 via-indigo-950/85 to-slate-800",
    certificationsGlow:
      "bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.22),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0))]",
    certificationsAccentText: "text-indigo-200",
    certificationsHighlightCard: "border-indigo-300/20 bg-indigo-400/10",
    contactFormPanelBg: "bg-gradient-to-br from-slate-900 via-indigo-950/85 to-slate-800",
    aboutSectionBg:
      "bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(238,242,255,0.82)_48%,_rgba(255,255,255,1)_100%)]",
    aboutHeaderBg:
      "bg-[linear-gradient(135deg,_rgba(224,231,255,0.62)_0%,_rgba(255,255,255,1)_55%,_rgba(238,242,255,0.82)_100%)]",
    experienceSectionBg:
      "bg-[linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(224,231,255,0.34)_28%,_rgba(255,255,255,1)_100%)]",
    projectsSectionBg:
      "bg-[linear-gradient(180deg,_rgba(219,234,254,0.3)_0%,_rgba(255,255,255,0.92)_24%,_rgba(248,250,252,1)_100%)]",
    appBg: "bg-[linear-gradient(180deg,_#eef2ff_0%,_#ffffff_42%,_#f8fafc_100%)]",
    selection: "selection:bg-indigo-100",
    focusRing: "focus:ring-indigo-400",
    primaryTone: "bg-indigo-600 text-white",
    primaryBadge: "bg-slate-100 text-indigo-700",
    primaryDot: "bg-indigo-500/80",
    mutedPanel: "border-indigo-100 bg-indigo-50/80",
    mutedPanelLabel: "text-indigo-600",
    footerResumeBtn:
      "border-indigo-400/30 bg-indigo-500/10 text-indigo-200 hover:border-indigo-300/40 hover:bg-indigo-500/20",
    projectAccents: [
      "from-slate-950 via-indigo-900 to-blue-700",
      "from-slate-950 via-blue-900 to-indigo-700",
      "from-slate-900 via-indigo-900 to-blue-700",
      "from-slate-950 via-violet-900 to-indigo-700",
      "from-slate-900 via-blue-900 to-indigo-600",
    ],
  },
  slightMidnightMono: {
    logoGradient: "bg-[linear-gradient(135deg,_#0f172a,_#3f4f67)]",
    logoShadow: "shadow-[0_10px_24px_rgba(90,93,132,0.28)]",
    sectionAccentText: "text-slate-700",
    headerActionText: "text-slate-700",
    heroBackdrop:
      "bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.16),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.2),_transparent_32%),linear-gradient(180deg,_#ffffff,_#f1f5f9_62%,_#ffffff)]",
    heroOrbStrong: "bg-slate-200/70",
    heroOrbSoft: "bg-slate-200/55",
    heroTitleGradient: "bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600",
    heroDrivingPanel:
      "border-slate-200 bg-[linear-gradient(135deg,_rgba(226,232,240,0.72),_rgba(241,245,249,0.82),_rgba(255,255,255,0.96))]",
    heroProfileGradient: "bg-[linear-gradient(160deg,_#020617_0%,_#0f172a_45%,_#3f4f67_100%)]",
    certificationsPanelBg: "bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/85",
    certificationsGlow:
      "bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.16),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0))]",
    certificationsAccentText: "text-slate-200",
    certificationsHighlightCard: "border-slate-300/20 bg-slate-400/10",
    contactFormPanelBg: "bg-gradient-to-br from-slate-900 via-indigo-950/85 to-slate-800",
    aboutSectionBg:
      "bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(241,245,249,0.84)_48%,_rgba(255,255,255,1)_100%)]",
    aboutHeaderBg:
      "bg-[linear-gradient(135deg,_rgba(226,232,240,0.62)_0%,_rgba(255,255,255,1)_55%,_rgba(224,231,255,0.56)_100%)]",
    experienceSectionBg:
      "bg-[linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(226,232,240,0.36)_28%,_rgba(255,255,255,1)_100%)]",
    projectsSectionBg:
      "bg-[linear-gradient(180deg,_rgba(241,245,249,0.35)_0%,_rgba(255,255,255,0.92)_24%,_rgba(238,242,255,1)_100%)]",
    appBg: "bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_42%,_#eef2ff_100%)]",
    selection: "selection:bg-slate-200",
    focusRing: "focus:ring-slate-400",
    primaryTone: "bg-slate-700 text-white",
    primaryBadge: "bg-slate-100 text-slate-700",
    primaryDot: "bg-slate-500/80",
    mutedPanel: "border-slate-200 bg-slate-100/80",
    mutedPanelLabel: "text-slate-600",
    footerResumeBtn:
      "border-slate-400/30 bg-slate-500/10 text-slate-200 hover:border-slate-300/40 hover:bg-slate-500/20",
    projectAccents: [
      "from-slate-950 via-indigo-900 to-blue-700",
      "from-slate-950 via-blue-900 to-indigo-700",
      "from-slate-900 via-indigo-900 to-blue-700",
      "from-slate-950 via-violet-900 to-indigo-700",
      "from-slate-900 via-blue-900 to-indigo-600",
    ],
  },
} as const;

const THEME_STORAGE_KEY = "portfolio-theme";
const themeOrder: ThemeName[] = [
  "monochrome",
  "midnight",
  "slightMidnightMono",
];
const themeLabels: Record<ThemeName, string> = {
  monochrome: "Monochrome",
  midnight: "Midnight",
  slightMidnightMono: "Slight Midnight Mono",
};

const isThemeName = (value: string): value is ThemeName =>
  themeOrder.includes(value as ThemeName);

const getNextTheme = (current: ThemeName): ThemeName => {
  const currentIndex = themeOrder.indexOf(current);
  return themeOrder[(currentIndex + 1) % themeOrder.length];
};

type ThemeConfig = (typeof themes)[ThemeName];

type PortfolioThemeContextValue = {
  activeTheme: ThemeName;
  setActiveTheme: (theme: ThemeName) => void;
  theme: ThemeConfig;
};

const PortfolioThemeContext = createContext<PortfolioThemeContextValue | null>(null);

function usePortfolioTheme() {
  const context = useContext(PortfolioThemeContext);
  if (!context) {
    throw new Error("usePortfolioTheme must be used within PortfolioThemeContext.Provider");
  }
  return context;
}

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const typing = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(typing);
        timeoutId = setTimeout(() => {
          setDisplayed(text);
        }, 600);
      }
    }, 50);

    return () => {
      window.clearInterval(typing);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text]);

  return (
    <span className="inline leading-tight">
      <span>{displayed}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="ml-1 inline-block h-[0.9em] w-[2px] rounded-full bg-current align-[-0.08em]"
      />
    </span>
  );
}

function Header() {
  const { activeTheme, setActiveTheme, theme } = usePortfolioTheme();
  const [open, setOpen] = useState(false);
  const nextTheme = getNextTheme(activeTheme);

  const closeMenu = () => setOpen(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/80 bg-white/80 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="#home" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${theme.logoGradient} text-sm font-semibold tracking-[0.22em] text-white ${theme.logoShadow}`}
            >
              RS
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Android + AI Enthusiast</p>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-50/90 p-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setActiveTheme(nextTheme)}
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900 md:inline-flex"
            >
              Theme: {themeLabels[activeTheme]}
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 ${theme.headerActionText} transition hover:border-slate-300 hover:bg-white hover:text-slate-950 md:hidden`}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-sm font-medium ${theme.headerActionText} transition hover:border-slate-200 hover:bg-white`}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setActiveTheme(nextTheme);
                  closeMenu();
                }}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700"
              >
                Theme: {themeLabels[activeTheme]}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const { theme } = usePortfolioTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative scroll-mt-28 overflow-hidden px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20"
    >
      <div className={`absolute inset-x-0 top-0 -z-10 h-[36rem] ${theme.heroBackdrop}`} />
      <div className={`absolute left-0 top-20 -z-10 h-40 w-40 rounded-full ${theme.heroOrbStrong} blur-3xl`} />
      <div className={`absolute right-0 top-24 -z-10 h-48 w-48 rounded-full ${theme.heroOrbSoft} blur-3xl`} />

      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${theme.sectionAccentText} shadow-sm backdrop-blur`}>
            Senior Android Engineer
          </div>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
            <span className={`${theme.heroTitleGradient} bg-clip-text text-transparent`}>
              <TypingText text="Hi, I'm Ranganathan." />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            I design and deliver reliable Android products with clean architecture, strong quality
            standards, and practical AI-assisted workflows that speed up delivery.
          </p>

          <div className={`mt-6 overflow-hidden rounded-[1.4rem] border ${theme.heroDrivingPanel} p-4 shadow-sm`}>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.sectionAccentText}`}>
              What I&apos;m Driving Right Now
            </p>
            <div className="mt-2 min-h-[3.2rem] overflow-hidden text-[15px] leading-7 text-slate-700 sm:text-base">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="will-change-transform"
                >
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-300 bg-white/80 px-6 text-slate-900 hover:bg-white"
            >
              <a
                href="/ranganathan-android-resume-2026.pdf"
                download="Ranganathan Android Resume 2026.pdf"
              >
                Download CV
              </a>
            </Button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[23.5rem]">
            <div className={`absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.4rem] ${theme.heroOrbSoft} blur-3xl`} />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/80 p-3 shadow-[0_24px_90px_rgba(15,23,42,0.16)] backdrop-blur">
              <div className={`rounded-[2rem] ${theme.heroProfileGradient} p-5 text-white`}>
                <div>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
                    Building reliable mobile products with modern Android architecture and practical AI-assisted workflows.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Focus</p>
                    <p className="mt-2 text-sm font-medium text-white">System Designs</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Experience</p>
                    <p className="mt-2 text-sm font-medium text-white">10+ years</p>
                  </div>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900/40">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Ranganathan"
                    width={640}
                    height={640}
                    className="h-[19.5rem] w-full object-cover object-top"
                    priority
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Specialty</p>
                    <p className="mt-2 text-sm font-medium text-white">Android + AI</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Strength</p>
                    <p className="mt-2 text-sm font-medium text-white">Quality delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { theme } = usePortfolioTheme();
  return (
    <section id="about" className={`scroll-mt-28 ${theme.aboutSectionBg} px-4 py-16 sm:px-6 md:py-20`}>
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className={`border-b border-slate-200 ${theme.aboutHeaderBg} p-7 md:p-8`}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${theme.sectionAccentText}`}>
                  About
                </p>
                <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                  A product-minded Android engineer with a delivery-first approach.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  I build scalable, user-centric Android experiences, lead cross-functional delivery,
                  and help teams ship with confidence. My work spans architecture, code quality,
                  mentoring, and practical AI-assisted engineering where it adds real value.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:w-[17rem] lg:grid-cols-1">
                <div className="rounded-[1.4rem] border border-white/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Based In
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">Chennai, Tamil Nadu</p>
                </div>
                <div className={`rounded-[1.4rem] border ${theme.mutedPanel} p-4 shadow-sm`}>
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.sectionAccentText}`}>
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    Reliable mobile delivery with quality, clarity, and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className={`rounded-[1.6rem] border ${theme.mutedPanel} p-5`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${theme.sectionAccentText}`}>
                  Core Strength
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Turning complex product requirements into calm, reliable mobile experiences.
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${theme.primaryDot}`} />
                    <span>Strong grounding in modern Android architecture and maintainable codebases.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${theme.primaryDot}`} />
                    <span>Comfortable owning delivery in quality-sensitive, business-critical domains.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${theme.primaryDot}`} />
                    <span>Interested in AI tooling where it meaningfully improves engineering throughput.</span>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Working Style
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-950">
                    Delivery-focused, quality-minded, and collaborative with cross-functional teams.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Education
                  </p>
                  <div className="mt-3">
                    <p className="text-lg font-semibold text-slate-950">MCA</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Anna University - Regional Office, Coimbatore
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      2012 - 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] ${theme.sectionAccentText}`}>
                  <Code2 className="h-4 w-4" />
                  Tech Stack
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  A modern Android toolset shaped by product delivery, maintainability, and quality.
                </p>
              </div>
              <div className={`rounded-2xl border ${theme.mutedPanel} px-3 py-2 text-right`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${theme.sectionAccentText}`}>
                  Toolkit
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{skills.length}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={`rounded-[1.4rem] border p-4 ${
                    index === 0 ? theme.mutedPanel : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{group.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{group.description}</p>
                    </div>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                      {group.items.length}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/70 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className={`relative overflow-hidden rounded-[2rem] border border-white/10 ${theme.certificationsPanelBg} shadow-xl`}
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.projectAccents[0]} opacity-[0.1]`}
            />
            <div className="border-b border-white/10 p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.22em] ${theme.certificationsAccentText}`}
                  >
                    Continuous Learning
                  </p>
                  <h2 className="mt-3 flex items-center gap-2 text-2xl font-semibold tracking-tight text-white">
                    <Cpu className="h-4 w-4" />
                    Certifications
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Recent credentials that strengthen Android delivery, engineering quality, and practical AI adoption.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:p-8">
              {aiHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.4rem] border px-4 py-5 text-white shadow-sm ${
                    index === 1 ? theme.certificationsHighlightCard : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="font-semibold leading-6 text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { theme } = usePortfolioTheme();
  return (
    <section id="experience" className={`scroll-mt-28 ${theme.experienceSectionBg} px-4 py-16 sm:px-6 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${theme.sectionAccentText}`}>
              Experience
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Professional path shaped by mobile product delivery.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              My work has moved from hands-on Android delivery into architecture, quality-focused
              engineering, and practical team enablement across multiple product domains.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-slate-950">10+</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Years across Android product teams.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-slate-950">5</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Distinct roles across finance, media, logistics, and business apps.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-slate-950">Leadership</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Delivery mindset with engineering quality, mentoring, and ownership.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative grid gap-4 pb-8 last:pb-0 lg:grid-cols-[7.5rem_2.3rem_minmax(0,1fr)] lg:gap-6"
            >
              <div className="lg:pt-5">
                <div
                  className={`inline-flex rounded-2xl px-4 py-3 text-sm font-semibold leading-6 shadow-sm ${
                    item.tone === "primary"
                      ? theme.primaryTone
                      : "border border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {item.period}
                </div>
              </div>

              <div className="hidden lg:flex lg:min-h-full lg:flex-col lg:items-center">
                <div
                  className={`w-px flex-1 ${
                    index === 0 ? "bg-transparent" : "bg-slate-200"
                  }`}
                />
                <div
                  className={`z-10 h-4 w-4 rounded-full border-4 border-white ${
                    item.tone === "primary" ? "bg-slate-600" : "bg-slate-300"
                  }`}
                />
                <div
                  className={`w-px flex-1 ${
                    index === experience.length - 1 ? "bg-transparent" : "bg-slate-200"
                  }`}
                />
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                          item.tone === "primary" ? theme.primaryBadge : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.focus}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.role}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">{item.company}</p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold lg:hidden ${
                      item.tone === "primary" ? theme.primaryBadge : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className={`mt-2 h-2 w-2 rounded-full ${
                          item.tone === "primary" ? theme.primaryDot : "bg-slate-300"
                        }`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { theme } = usePortfolioTheme();
  return (
    <section id="projects" className={`scroll-mt-28 ${theme.projectsSectionBg} px-4 py-16 sm:px-6 md:py-20`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="grid gap-8 px-6 py-8 md:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${theme.sectionAccentText}`}>
                Projects
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Product work presented as modern, outcome-focused case studies.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
                These project highlights reflect real delivery experience across Android products in
                banking, learning, logistics, mobility, and realtime application workflows. Each
                card captures the kind of product thinking, engineering quality, and execution I
                bring into production teams.
              </p>
            </div>

            <div className="grid gap-3">
              <div className={`rounded-[1.5rem] border ${theme.mutedPanel} p-4 lg:ml-auto lg:w-[18.5rem]`}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${theme.mutedPanelLabel}`}>
                  Domains
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">5</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Banking, learning, logistics, mobility, and connected commerce.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] ${
                index < 4 ? "xl:col-span-3" : "xl:col-span-6"
              }`}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 text-slate-900 md:p-7">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.projectAccents[index]} opacity-[0.08]`}
                />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.9rem]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-sm">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(160px,0.8fr)] md:items-end">
                  <p className="max-w-xl text-sm leading-7 text-slate-700 md:text-[15px]">
                    {project.description}
                  </p>
                  <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-slate-200/70 bg-slate-50/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Why It Matters
                    </p>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className={`mt-2.5 h-2 w-2 rounded-full ${theme.primaryDot}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { theme } = usePortfolioTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = `Portfolio enquiry from ${name || "Website visitor"}`;
    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      "",
      "Message:",
      formData.message || "No message provided.",
    ].join("\n");

    const mailtoUrl = `mailto:ranganathan272@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "ranganathan272@gmail.com",
      href: "mailto:ranganathan272@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99428 60622",
      href: "tel:+919942860622",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:p-10">
        <div>
          <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${theme.sectionAccentText}`}>
            Contact
          </p>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
            If you&apos;re hiring, collaborating, or exploring a mobile product idea, I&apos;d be
            happy to connect and talk through it.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const content = (
                <div className="flex flex-col items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white sm:flex-row sm:items-center sm:gap-4">
                  <div className={`shrink-0 rounded-full bg-white p-3 ${theme.sectionAccentText} shadow-sm`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="break-all text-sm font-medium text-slate-950 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (!item.href) {
                return <div key={item.label}>{content}</div>;
              }

              return (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              );
            })}
          </div>
        </div>

        <div
          className={`relative rounded-2xl border border-white/10 ${theme.contactFormPanelBg} p-6 text-white sm:rounded-[1.5rem] sm:p-8`}
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.projectAccents[1]} opacity-[0.1] sm:rounded-[1.5rem]`}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Quick message</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            This form opens the visitor&apos;s email app with your address, subject, and message
            prefilled so they can send it directly.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className={`mb-2 block text-sm font-medium ${theme.certificationsAccentText}`}>
                  First name
                </span>
                <input
                  type="text"
                  placeholder="Ranga"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  className={`w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ${theme.focusRing}`}
                />
              </label>
              <label className="block">
                <span className={`mb-2 block text-sm font-medium ${theme.certificationsAccentText}`}>
                  Last name
                </span>
                <input
                  type="text"
                  placeholder="Samraj"
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  className={`w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ${theme.focusRing}`}
                />
              </label>
            </div>

            <label className="block">
              <span className={`mb-2 block text-sm font-medium ${theme.certificationsAccentText}`}>
                Email address
              </span>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
                className={`w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ${theme.focusRing}`}
              />
            </label>

            <label className="block">
              <span className={`mb-2 block text-sm font-medium ${theme.certificationsAccentText}`}>
                Project brief
              </span>
              <textarea
                rows={5}
                placeholder="Tell me a bit about the role, product, or problem you're solving."
                value={formData.message}
                onChange={handleInputChange("message")}
                required
                className={`w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ${theme.focusRing}`}
              />
            </label>

            <Button
              type="submit"
              size="lg"
              className={`w-full border ${theme.mutedPanel} !bg-white !text-slate-950 hover:!bg-slate-50 hover:!text-slate-950 focus-visible:!bg-slate-50 focus-visible:!text-slate-950`}
            >
              Send Message
            </Button>

            <p className="text-xs leading-6 text-slate-400">
              Best for quick outreach. A backend mail service can be added later for direct website submissions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { theme } = usePortfolioTheme();
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-10 text-slate-300 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Ranganathan Samraj</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Senior Android Mobile Application Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/ranganathan-android-resume-2026.pdf"
              download="Ranganathan Android Resume 2026.pdf"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition hover:text-white ${theme.footerResumeBtn}`}
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/35 hover:bg-white/[0.09] hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/35 hover:bg-white/[0.09] hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 flex justify-center text-center text-sm text-slate-500">
          <p>Copyright &copy; 2026 Ranganathan Samraj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "midnight";
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme && isThemeName(storedTheme)) {
      return storedTheme;
    }

    return "midnight";
  });
  const theme = themes[activeTheme];

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  return (
    <PortfolioThemeContext.Provider value={{ activeTheme, setActiveTheme, theme }}>
      <div className={`min-h-screen ${theme.appBg} font-sans text-slate-900 ${theme.selection}`}>
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PortfolioThemeContext.Provider>
  );
}





