import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowUpRight,
  Github,
  Mail,
  MessageCircle,
  ExternalLink,
  Layout,
  Rocket,
  UserRound,
  RefreshCcw,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteHeader, navItems as nav } from "@/components/SiteHeader";
import storynest from "@/assets/storynest.PNG";
import footballPack from "@/assets/football-pack.PNG";
import musicalCrochet from "@/assets/musical-crochet.PNG";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrew Ayman — Web Developer & Freelancer" },
      {
        name: "description",
        content:
          "Andrew Ayman is a web developer building modern, fast, and responsive websites for businesses and startups. View projects, services and skills.",
      },
      { property: "og:title", content: "Andrew Ayman — Web Developer" },
      {
        property: "og:description",
        content:
          "Modern, fast, and responsive websites for businesses and startups. Freelance web developer portfolio.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "StoryNest",
    image: storynest,
    description:
      "A cozy reading platform where writers publish stories and readers build their own shelves.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://storynest-amber.vercel.app/",
    repo: "https://github.com/Andy200493",
    challenge:
      "Readers had no simple way to keep track of stories across long reading sessions.",
    solution:
      "Built a shelf-based library with persistent progress and a distraction-free reader view.",
    result: "Session length up and a reading flow that feels effortless on any device.",
  },
  {
    title: "Football Mystery Pack",
    image: footballPack,
    description:
      "An interactive storefront for collectible football mystery packs with animated reveals.",
    tech: ["JavaScript", "React", "Vercel"],
    demo: "https://football-mystery-pack.vercel.app/",
    repo: "https://github.com/Andy200493",
    challenge: "A plain product list made collectible packs feel ordinary and low value.",
    solution:
      "Designed an animated pack-opening reveal with staged motion and clear pack tiers.",
    result: "A playful storefront that turns browsing into part of the product itself.",
  },
  {
    title: "Musical Crochet",
    image: musicalCrochet,
    description:
      "A boutique catalogue for handmade crochet pieces with a clean, tactile product experience.",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    demo: "https://musicalcrochet.vercel.app/",
    repo: "https://github.com/Andy200493",
    challenge: "Handmade pieces were being sold through scattered social media posts.",
    solution:
      "Created a lightweight catalogue with large imagery and instant enquiry links.",
    result: "One polished home for the brand that loads in under a second.",
  },
];


const services = [
  {
    icon: Layout,
    title: "Business Websites",
    text: "Polished multi-page sites that make small businesses look established and trustworthy.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "High-converting single pages built for launches, campaigns and product waitlists.",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    text: "Personal sites for creatives and freelancers that put the work first.",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    text: "Modernising dated sites with faster loads, better structure and a fresh visual identity.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Vercel",
];

const WHATSAPP = "https://wa.me/201156777255";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 115 677 7255",
    href: WHATSAPP,
  },
  {
    icon: Mail,
    label: "Email",
    value: "andrew.ayman@ejust.edu.eg",
    href: "mailto:andrew.ayman@ejust.edu.eg",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Andy200493",
    href: "https://github.com/Andy200493",
  },
];


const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "20+", label: "Projects shipped" },
  { value: "100%", label: "Responsive by default" },
  { value: "<1s", label: "Average load time" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[130px] animate-float" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[130px] animate-float [animation-delay:-3s]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 grid-lines opacity-[0.35]" />
      </div>

      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <Reveal className="glass-panel mx-auto max-w-4xl px-6 py-16 text-center sm:px-14 sm:py-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_currentColor]" />
              Available for freelance work
            </span>
            <h1 className="mt-8 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Andrew Ayman
            </h1>
            <p className="mt-5 font-display text-base font-semibold uppercase tracking-[0.34em] text-gradient sm:text-lg">
              Web Developer
            </p>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build modern, fast, and responsive websites for businesses and startups.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#projects"
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold sm:w-auto"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="btn-ghost inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          {/* STATS */}
          <Reveal delay={140} className="mt-8">
            <div className="glass-panel grid grid-cols-2 divide-glass-border overflow-hidden sm:grid-cols-4 sm:divide-x">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-8 text-center">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>


        {/* ABOUT */}
        <Section id="about" label="About" title="A developer obsessed with the details">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="glass-panel p-7 sm:p-10">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm Andrew, a web developer passionate about turning ideas into clean,
                modern websites. I care about the small things — how fast a page loads,
                how smooth a transition feels, how a layout holds up on a small phone.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I work mostly with React, TypeScript and Tailwind CSS, and I partner with
                businesses, startups and creators who want a site that actually reflects
                the quality of what they do.
              </p>
            </Reveal>
            <Reveal delay={120} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { k: "Responsive", v: "Every screen, every time" },
                { k: "Performance", v: "Built to load instantly" },
                { k: "Clean code", v: "Maintainable and typed" },
              ].map((s) => (
                <div key={s.k} className="glass-panel card-hover p-6">
                  <p className="font-display text-lg font-bold">{s.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" label="Projects" title="Featured work">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="h-full">
                <article className="group glass-panel card-hover relative flex h-full flex-col overflow-hidden">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} live demo`}
                    className="absolute inset-0 z-0"
                  />
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} project preview`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-56 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:h-72"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <h3 className="min-w-0 font-display text-2xl font-bold tracking-tight">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-6 flex-1 space-y-3 border-t border-glass-border pt-6">
                      {[
                        { k: "Challenge", v: p.challenge },
                        { k: "Solution", v: p.solution },
                        { k: "Result", v: p.result },
                      ].map((row) => (
                        <div key={row.k} className="grid gap-1 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4">
                          <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                            {row.k}
                          </dt>
                          <dd className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="relative z-10 mt-7 flex gap-2">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </Section>

        {/* SERVICES */}
        <Section id="services" label="Services" title="What I can build for you">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="glass-panel card-hover flex h-full gap-4 p-6 sm:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-glass-border bg-glass text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" label="Skills" title="Tools I work with daily">
          <Reveal className="glass-panel p-7 sm:p-10">
            <ul className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-glass-border bg-glass px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* CONTACT */}
        <Section id="contact" label="Contact" title="Let's build something together">
          <Reveal className="glass-panel p-7 sm:p-10">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Have a project in mind, or just want a second opinion on your current site?
              I usually reply within a day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-panel card-hover flex items-center gap-4 p-5 transition-all duration-300 hover:border-primary/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-glass-border bg-glass text-accent transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-semibold">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-4">
          <Reveal className="glass-panel relative overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Next step
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Let's build something amazing together.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-9 py-4 text-sm font-bold sm:w-auto"
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>


      <footer className="mt-10 border-t border-glass-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-display text-xl font-bold">
                Andrew Ayman<span className="text-gradient">.</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Web Developer</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground sm:justify-end">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-10 border-t border-glass-border pt-6 text-xs text-muted-foreground">
            <p>© 2026 All Rights Reserved</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:py-28">
      <Reveal className="mb-12">
        <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
          <span className="h-px w-8 bg-accent/60" />
          {label}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

