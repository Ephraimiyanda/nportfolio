"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function WelcomeLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const lettersRef = useRef<any>([]);

  useEffect(() => {
    const loader = loaderRef.current;
    const letters = lettersRef.current;

    // Hide letters initially
    gsap.set(letters, { opacity: 0, y: 80 });

    // Intro animation (fade in from bottom)
    const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    introTl.to(letters, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
    });

    // Pulsating effect (start after letters appear)
    introTl.to(
      letters,
      {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "sine.inOut",
      },
      "+=0.2"
    );

    // When the page fully loads
    const handleLoad = () => {
      const outroTl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setIsLoading(false),
      });

      // Stop the pulsing and animate out
      outroTl
        .to(letters, {
          scale: 1,
          y: -60,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
        })
        .to(loader, { opacity: 0, duration: 0.6 }, "-=0.3")
        .set(loader, { display: "none" });
    };

    // Wait until everything is loaded
    if (document.readyState === "complete") {
      // Delay the outro slightly so intro finishes first
      setTimeout(handleLoad, 1500);
    } else {
      window.addEventListener("load", () => setTimeout(handleLoad, 1500));
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <h1 className="text-5xl sm:text-6xl font-bold flex space-x-2 overflow-hidden">
        {"WELCOME".split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              lettersRef.current[i] = el;
            }}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
