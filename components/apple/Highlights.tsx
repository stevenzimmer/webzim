"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#highlights-title", {
      opacity: 1,
      y: 0,
      delay: 2,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="common-padding bg-zinc h-full w-screen overflow-hidden"
    >
      <div className="container">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="highlights-title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                src={`/apple/assets/images/watch.svg`}
                alt="Watch icon"
                width={20}
                height={20}
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the event
              <Image
                src={`/apple/assets/images/right.svg`}
                alt="Watch icon"
                width={10}
                height={10}
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
