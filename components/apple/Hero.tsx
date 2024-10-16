"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hydrated, setHydrated] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 760) {
      setVideoSrc("/apple/assets/videos/hero.mp4");
    } else {
      setVideoSrc("/apple/assets/videos/smallHero.mp4");
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      handleVideoSrcSet();
    }
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, [hydrated]);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: 0,
      delay: 2,
    });
  }, []);

  // if (!hydrated) return null;

  return (
    <section className="nav-height relative w-full bg-black py-20">
      <div className="h-5/6">
        <p id="hero-title" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="mx-auto w-9/12 md:w-10/12">
          <video loop autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex translate-y-20 flex-col items-center opacity-0"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="text-xl font-normal">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
}
