"use client";

import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Cpu,
  Download,
  GraduationCap,
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
      "from-blue-950 via-slate-900 to-blue-800",
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
      "from-slate-950 via-emerald-900 to-teal-700",
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
      "from-slate-900 via-amber-900 to-orange-700",
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
      "from-slate-950 via-violet-900 to-fuchsia-700",
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
      "from-slate-900 via-sky-900 to-cyan-700",
  },
];

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
    }, 35);

    return () => {
      window.clearInterval(typing);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text]);

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="ml-1 inline-block h-[0.9em] w-[2px] rounded-full bg-current align-middle"
      />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

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
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#0f172a,_#1d4ed8)] text-sm font-semibold tracking-[0.22em] text-white shadow-[0_10px_24px_rgba(29,78,216,0.28)]">
              RS
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-slate-950">
                Ranganathan Samraj
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Android + AI Enthusiast</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Chennai</span>
              </div>
            </div>
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
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950 md:hidden"
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
                  className="rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-200 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:ranganathan272@gmail.com"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
              >
                Email Me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
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
      className="relative scroll-mt-28 overflow-hidden px-6 pb-20 pt-14 md:pb-24 md:pt-20"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_30%),linear-gradient(180deg,_#ffffff,_#eff6ff_62%,_#ffffff)]" />
      <div className="absolute left-0 top-20 -z-10 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-48 w-48 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Senior Android Mobile Application Developer
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            <span className="bg-gradient-to-r from-slate-950 via-blue-900 to-blue-600 bg-clip-text text-transparent">
              <TypingText text="Hi, I'm Ranganathan." />
            </span>
          </h1>
          <div className="mb-6 min-h-[4rem] overflow-hidden text-lg leading-8 text-slate-600 md:text-xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="will-change-transform"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="mb-8 max-w-xl text-base leading-7 text-slate-600">
            Accomplished Android developer with 10+ years of experience creating high-performance
            mobile apps with Kotlin, Java, Jetpack Compose, and modern Android architecture.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
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

          <div className="mb-8 rounded-[1.75rem] border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              What I Bring
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-950">Architecture with clarity</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Modern Android systems shaped for maintainability, reliability, and scale.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Delivery with discipline</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A product-minded approach that balances speed, quality, and user trust.
                </p>
              </div>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[25rem]">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.4rem] bg-blue-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/80 p-3 shadow-[0_24px_90px_rgba(15,23,42,0.16)] backdrop-blur">
              <div className="rounded-[2rem] bg-[linear-gradient(160deg,_#020617_0%,_#0f172a_45%,_#0b3b73_100%)] p-5 text-white">
                <div>
                  <h2 className="text-[1.75rem] font-semibold leading-tight">Android Engineer</h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
                    Building reliable mobile products with modern Android architecture and practical AI-assisted workflows.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-[minmax(0,1.3fr)_minmax(120px,0.7fr)] gap-3">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Current Focus</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      Scalable mobile systems and delivery excellence
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 text-right backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">Experience</p>
                    <p className="mt-2 text-base font-semibold text-white">10+ years</p>
                  </div>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900/40">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Ranganathan"
                    width={640}
                    height={640}
                    className="h-[21rem] w-full object-cover object-top"
                    priority
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
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
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(248,251,255,0.88)_48%,_rgba(255,255,255,1)_100%)] px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[linear-gradient(135deg,_rgba(239,246,255,0.9)_0%,_rgba(255,255,255,1)_55%,_rgba(248,250,252,1)_100%)] p-7 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  About
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
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
                <div className="rounded-[1.4rem] border border-blue-100 bg-blue-50/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
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
              <div className="rounded-[1.6rem] border border-blue-100 bg-blue-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Core Strength
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Turning complex product requirements into calm, reliable mobile experiences.
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500/70" />
                    <span>Strong grounding in modern Android architecture and maintainable codebases.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500/70" />
                    <span>Comfortable owning delivery in quality-sensitive, business-critical domains.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500/70" />
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
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  <Code2 className="h-4 w-4" />
                  Tech Stack
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  A modern Android toolset shaped by product delivery, maintainability, and quality.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 px-3 py-2 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
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
                    index === 0
                      ? "border-blue-100 bg-blue-50/70"
                      : "border-slate-200 bg-slate-50"
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

          <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 shadow-xl">
            <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.22),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0))] p-6 text-white md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
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

                <div className="self-start rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Credential Focus
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">AI + Android</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:p-8">
              {aiHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.4rem] border px-4 py-5 text-white shadow-sm ${
                    index === 1
                      ? "border-blue-300/20 bg-blue-400/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Credential
                  </p>
                  <p className="mt-3 font-semibold leading-6 text-white">{item.title}</p>
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
  return (
    <section
      id="experience"
      className="scroll-mt-28 bg-[linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(239,246,255,0.45)_28%,_rgba(255,255,255,1)_100%)] px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
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
                      ? "bg-blue-600 text-white"
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
                    item.tone === "primary" ? "bg-blue-600" : "bg-slate-300"
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
                          item.tone === "primary"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-slate-100 text-slate-500"
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
                      item.tone === "primary"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-slate-100 text-slate-500"
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
                          item.tone === "primary" ? "bg-blue-500/80" : "bg-slate-300"
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
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-[linear-gradient(180deg,_rgba(239,246,255,0.35)_0%,_rgba(255,255,255,0.92)_24%,_rgba(248,250,252,1)_100%)] px-6 py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="grid gap-8 px-6 py-8 md:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Product work presented as modern, outcome-focused case studies.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
                These project highlights reflect real delivery experience across Android products in
                banking, learning, logistics, mobility, and realtime application workflows. Each
                card captures the kind of product thinking, engineering quality, and execution I
                bring into production teams.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Domains
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">5</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Banking, learning, logistics, mobility, and connected commerce.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Delivery Style
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">Native</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Production Android builds with API integration and feature ownership.
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
              <div className={`bg-gradient-to-br ${project.accent} p-6 text-white md:p-7`}>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.9rem]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(160px,0.8fr)] md:items-end">
                  <p className="max-w-xl text-sm leading-7 text-white/82 md:text-[15px]">
                    {project.description}
                  </p>
                  <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/90">{project.impact}</p>
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
                        <span className="mt-2.5 h-2 w-2 rounded-full bg-blue-500/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  Delivery highlight
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
    <section id="contact" className="scroll-mt-28 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
            If you&apos;re hiring, collaborating, or exploring a mobile product idea, I&apos;d be
            happy to connect and talk through it.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-center gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
                  <div className="rounded-full bg-white p-3 text-slate-700 shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-medium text-slate-950">{item.value}</p>
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

        <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
          <h3 className="text-2xl font-semibold tracking-tight">Quick message</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            This form opens the visitor&apos;s email app with your address, subject, and message
            prefilled so they can send it directly.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">First name</span>
                <input
                  type="text"
                  placeholder="Ranga"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Last name</span>
                <input
                  type="text"
                  placeholder="Samraj"
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email address</span>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Project brief</span>
              <textarea
                rows={5}
                placeholder="Tell me a bit about the role, product, or problem you're solving."
                value={formData.message}
                onChange={handleInputChange("message")}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-white !text-slate-950 hover:bg-slate-100"
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
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-10 text-slate-300">
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
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm text-blue-200 transition hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download CV
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
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_42%,_#f8fafc_100%)] font-sans text-slate-900 selection:bg-blue-100">
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
  );
}
