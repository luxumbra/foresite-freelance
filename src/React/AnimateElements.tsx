import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimateTitles(): null {
  useGSAP(() => {
    // console.clear();
    const tl = gsap.timeline();
    const titles = document.querySelectorAll("h2");
    if (titles.length === 0) {
      console.warn("No titles found to animate");
      return;
    }

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

function AnimateTestimonial(): null {
  useGSAP(() => {
    const testimonials = document.querySelectorAll(".testimonial");
    const projectHeader = document.querySelector(".project-header");
    const foucElement = document.querySelector(".testimonial.fouc");
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
      tl.from(foucElement, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      tl.from(testimonial, {
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          markers: true,
        },
        scale: 0.8,
        x: 0,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out",
      });
    });
  }, {});

  return null; // No content rendered — just enhancement
}

/**
 * AnimateTitleSection
 * Animates the title (h1) and the list items within the section when they come into view. the list items are staggered.
 * @returns {JSX.Element|null} - Returns null as it does not render any content, only applies animations.
 */
function AnimateTitleSection(): null {
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
      end: "top 5%",
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

/**
 * AnimateNavItems
 * Animates the navigation items on page load
 * @returns {JSX.Element|null} - Returns null as it does not render any content, only applies animations.
 */
function AnimateNavItems(): null {
  useGSAP(() => {
    const navItems = document.querySelectorAll("#main-nav li");
    const foucElement = document.querySelector("#main-nav .fouc");
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
      },
    });

    if (navItems.length === 0) {
      console.warn("No navigation items found to animate");
      return;
    }

    tl.from(foucElement, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    tl.from(navItems, {
      opacity: 0,
      y: -20,
      rotateZ: -20,
      duration: 0.5,
      stagger: 0.2,
      autoAlpha: 0,
      ease: "power3.out",
    });
  }, {});

  return null; // No content rendered — just enhancement
}

function AnimateSwipeIcon(): null {
  useGSAP(() => {
    // console.clear();
    const tl = gsap.timeline();
    const icon = document.querySelector(".swipe-icon");
    const swiper = document.querySelector(".swiper");
    if (!icon || !swiper) {
      console.warn("Elements not found to animate");
      return;
    }

    tl.from(icon, {
      scrollTrigger: {
        trigger: icon,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
      x: 0,
      translateX: "100%",
      y: 50,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
      delay: 0,
    });
    // swiper.addEventListener("mouseover", () => {
    //   gsap.fromTo(
    //     icon,
    //     {
    //       rotate: 10,
    //       duration: 0.5,
    //       ease: "power3.out",
    //     },
    //     {
    //       rotate: -10,
    //       duration: 0.5,
    //       ease: "power3.out",
    //     }
    //   );
    // });
  }, {});
  return null; // No content rendered — just enhancement
}

export {
  AnimateNavItems,
  AnimateSwipeIcon,
  AnimateTestimonial,
  AnimateTitles,
  AnimateTitleSection,
};
