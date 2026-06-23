"use client";
import Card from "@/components/home/card";
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
        <section className="relative py-6">
          <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 animate-float-slow rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 animate-float-slower rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="container px-6">
            <div className="grid items-center md:grid-cols-2 lg:gap-12">
              <div className="space-y-6 lg:px-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Full Stack Engineer
                </p>
                <Header>Steven Zimmer</Header>
                <p className="mb-6 text-lg text-slate-200 md:text-xl">
                  I build fast web products, AI-enabled workflows, and content
                  platforms that help teams launch cleaner experiences and grow
                  organic demand.
                </p>

                <div className="flex flex-wrap gap-3 py-6">
                  {buttons.map(({ title, link, icon }) => (
                    <Button
                      key={link}
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
              <div className="relative md:px-12">
                <div className="section-surface rounded-3xl p-6 shadow-xl shadow-slate-950/50">
                  <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
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
                          "AI-enabled workflows",
                          "CMS and content platforms",
                          "Technical SEO",
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
                      Full-stack engineering for product, marketing, and
                      go-to-market teams.
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
              Selected engagements across web performance, content systems,
              technical SEO, and launch support.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6">
            {features
              .filter((feature) => {
                return feature.description || feature.bullets;
              })
              .map((props) => (
                <Card key={props.title} {...props} />
              ))}
          </div>
        </section>

        <section id="projects" className="container px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <Subheader>Personal Projects</Subheader>
            <p className="text-center text-base text-slate-300">
              Small product builds that show modern React, API integration, and
              interface engineering.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(
              ({
                title,
                description,
                demo,
                href,
                large,
                bullets,
                logo,
                subtitle,
              }) => (
                <Card
                  key={title}
                  href={href}
                  title={title}
                  description={description || ""}
                  bullets={bullets}
                  logo={logo}
                  subtitle={subtitle}
                  sameTab={true}
                  demo={demo}
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
              Tools I use to build reliable frontends, APIs, content workflows,
              AI features, and growth infrastructure.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl divide-y divide-slate-800/70">
            {Object.keys(dictSkills).map((skill) => {
              return (
                <div
                  key={skill}
                  className="flex flex-wrap items-center gap-4 py-6 first:pt-0"
                >
                  <div className="w-full md:w-1/4">
                    <p className="font-display text-xl font-semibold text-slate-100">
                      {skill}
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap md:w-3/4">
                    {dictSkills[skill].map((item) => {
                      return <Pill key={item} item={item} />;
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
              Platform training focused on CMS development, technical SEO, and
              maintainable web systems.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {certifications.map(({ title, link }) => (
              <article
                key={link}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/40"
              >
                <a
                  className="group block overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/80"
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                  title={title}
                >
                  <div className="flex aspect-video flex-col justify-between p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                        HubSpot Academy
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-slate-950"
                      >
                        HS
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-slate-100 transition group-hover:text-sky-200">
                        {title}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Verified credential
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container px-6 pb-20 pt-6">
          <div className="section-surface mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl px-6 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Let&apos;s build together
            </p>
            <h2 className="text-balance text-3xl font-semibold text-slate-100 md:text-4xl">
              Need a faster, clearer web platform?
            </h2>
            <p className="max-w-2xl text-base text-slate-300">
              I help teams turn complex product, CMS, and growth requirements
              into maintainable systems that are easy to ship and easy to find.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {buttons.map(({ title, link, icon }) => (
                <Button
                  key={link}
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
