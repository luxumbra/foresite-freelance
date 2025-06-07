import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimateTitles(): void {
  useGSAP(() => {
    // console.clear();
    const tl = gsap.timeline();
    const titles = document.querySelectorAll("h2");
    if (titles.length === 0) {
      console.warn("No titles found to animate");
      return;
    }
    console.log("Animating titles with GSAP");
    titles.forEach((title, index) => {
      tl.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });
    });
  }, {});

  return null; // No content rendered — just enhancement
}

function AnimateTestimonial(): void {
  useGSAP(() => {
    const testimonials = document.querySelectorAll(".testimonial");
    const projectHeader = document.querySelector(".project-header");
    if (testimonials.length === 0) {
      console.warn("No testimonials found to animate");
      return;
    }
    if (!projectHeader) {
      console.warn("Project header not found to trigger animations");
      return;
    }

    testimonials.forEach((testimonial, index) => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
        },
      });
      tl.fromTo(
        testimonial,
        {
          scale: 0.8,
          x: 0,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        {
          scale: 1,
          opacity: 1,
          x: -50,
          ease: "power3.out",
        }
      );
    });
    ScrollTrigger.create({
      trigger: projectHeader,
      start: "top 0%",
      end: "bottom 100%",
      scrub: true,
      onEnter: () =>
        testimonials.forEach((testimonial) =>
          gsap.to(testimonial, { scale: 1, x: -50, autoAlpha: 1 })
        ),
      onLeaveBack: () =>
        testimonials.forEach((testimonial) =>
          gsap.to(testimonial, { autoAlpha: 0 })
        ),
    });
  }, {});

  return null; // No content rendered — just enhancement
}

/**
 * AnimateTitleSection
 * Animates the title (h1) and the list items within the section when they come into view. the list items are staggered.
 * @returns {JSX.Element|null} - Returns null as it does not render any content, only applies animations.
 */
function AnimateTitleSection(): void {
  useGSAP(() => {
    // console.clear();
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
      },
    });
    const header = document.querySelector(".project-header");
    const sectionTitle = document.querySelector("h1");
    const listItems = document.querySelectorAll(".project-meta li");

    if (!header || !sectionTitle || listItems.length === 0) {
      console.warn("Section title or list items not found to animate");
      return;
    }

    tl.from(header, {
      ease: "linear",
      autoAlpha: 0,
    });
    tl.from(sectionTitle, {
      scale: 0.8,
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power3.out",
    });
    tl.to(sectionTitle, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    ScrollTrigger.create({
      trigger: sectionTitle,
      start: "top 80%",
      end: "top 20%",
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
    });
    tl.from(
      listItems,
      {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=0.7"
    );
  }, {});
  return null; // No content rendered — just enhancement
}

export { AnimateTestimonial, AnimateTitles, AnimateTitleSection };
