"use client";
import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Header from "@/components/layout/header";
import Subheader from "@/components/layout/subheader";
import {
  features,
  dictSkills,
  certifications,
  buttons,
  projects,
} from "@/lib/data";

import Button from "@/components/layout/Button";
import Pill from "@/components/shared/pill";
import Nav from "@/components/layout/Nav";
import LogosSlider from "@/components/home/LogosSlider";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative overflow-hidden">
        <section className="relative py-14 md:py-20">
          <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 animate-float-slow rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 animate-float-slower rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="container px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Full Stack Engineer
                </p>
                <Header>Steven Zimmer</Header>
                <p className="text-lg text-slate-200 md:text-xl">
                  Full stack engineer specializing in modern web platforms,
                  AI tooling and model integration, growth engineering,
                  technical SEO, and CMS architecture, with a track record of
                  delivering scalable, high-performance systems in fast-paced,
                  collaborative environments.
                </p>
                <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>Modern product stacks with Next.js, React, and TypeScript</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>Growth engineering and technical SEO execution</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>CMS platforms like Sanity, Contentful, and HubSpot</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    <span>AI toolchains and model integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                    <span>Reusable systems and scalable delivery pipelines</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {buttons.map(({ title, link, icon }, i) => (
                    <Button
                      key={i}
                      href={link}
                      icon={icon}
                      variant={
                        title === "Resume" || title.includes("@")
                          ? "primary"
                          : "secondary"
                      }
                    >
                      {title}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="section-surface rounded-3xl p-6 shadow-xl shadow-slate-950/50">
                  <div className="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
                    <Image
                      src={`https://github.com/stevenzimmer.png`}
                      alt="Steven Zimmer headshot"
                      className="h-full w-full object-cover"
                      width="640"
                      height="640"
                      priority
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Focus Areas
                      </p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {[
                          "Performance engineering",
                          "Growth systems",
                          "CMS architecture",
                          "AI product prototyping",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-slate-800/70 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">
                      Building fast, accessible, and AI-assisted product
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Trusted by" className="py-6">
          <div className="container px-6">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Trusted by teams and founders
            </p>
          </div>
          <LogosSlider />
        </section>

        <section id="work" className="container px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <Subheader>Recent Freelance Work</Subheader>
            <p className="text-center text-base text-slate-300">
              Select engagements focused on performance, growth, and highly
              maintainable platforms.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2">
            {features
              .filter((feature) => {
                return feature.description || feature.bullets;
              })
              .map((props, i: number) => (
                <Card key={i} {...props} />
              ))}
          </div>
        </section>

        <section id="projects" className="container px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <Subheader>Personal Projects</Subheader>
            <p className="text-center text-base text-slate-300">
              Experiments and side projects showcasing modern UI engineering.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(
              (
                { title, description, demo, href, large, bullets, logo, subtitle },
                i,
              ) => (
                <Card
                  key={i}
                  href={href}
                  title={title}
                  description={description || ""}
                  bullets={bullets}
                  logo={logo}
                  subtitle={subtitle}
                  sameTab={true}
                  demo={
                    title === "Beautiful, reusable components" ? (
                      <ComponentGrid />
                    ) : (
                      demo
                    )
                  }
                  large={large}
                />
              ),
            )}
          </div>
        </section>

        <section id="skills" className="container px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <Subheader>Engineering Toolbox</Subheader>
            <p className="text-center text-base text-slate-300">
              A flexible stack spanning AI tooling, engineering foundations,
              CMS architecture, and growth systems.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl divide-y divide-slate-800/70">
            {Object.keys(dictSkills).map((skill, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-wrap items-center gap-4 py-6 first:pt-0"
                >
                  <div className="w-full md:w-1/4">
                    <p className="font-display text-xl font-semibold text-slate-100">
                      {skill}
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap md:w-3/4">
                    {dictSkills[skill].map((item, j) => {
                      return <Pill key={j} item={item} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="certifications" className="container px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <Subheader>Certifications</Subheader>
            <p className="text-center text-base text-slate-300">
              Ongoing learning with a focus on modern frameworks and
              best-in-class tooling.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {certifications.map(({ title, src, link }, i) => (
              <div key={i} className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/40">
                <a
                  className="mb-4 block overflow-hidden rounded-xl border border-slate-800/70"
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                  title={title}
                >
                  <Image
                    className="aspect-video w-full object-cover transition duration-300 hover:scale-[1.02]"
                    alt={title}
                    src={src}
                    width="1500"
                    height="1000"
                  />
                </a>
                <p className="text-center text-sm font-semibold text-slate-100">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container px-6 pb-20 pt-6">
          <div className="section-surface mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl px-6 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Let&apos;s build together
            </p>
            <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
              Ready to ship a fast, polished product experience?
            </h2>
            <p className="max-w-2xl text-base text-slate-300">
              I partner with teams to design and engineer high-performing
              systems that improve conversion, SEO, AI-enabled workflows, and
              long-term maintainability.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {buttons.map(({ title, link, icon }, i) => (
                <Button
                  key={i}
                  href={link}
                  icon={icon}
                  variant={
                    title === "Resume" || title.includes("@")
                      ? "primary"
                      : "secondary"
                  }
                >
                  {title}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
