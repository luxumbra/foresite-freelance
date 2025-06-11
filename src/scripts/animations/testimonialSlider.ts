import gsap from "gsap";

export default function initTestimonialSlider() {
  const container = document.getElementById("testimonial-container");
  if (!container) return;

  const testimonials = Array.from(container.querySelectorAll(".testimonial"));
  let current = 0;

  function showSlide(index: number) {
    if (index === current) return;

    const currentEl = testimonials[current] as HTMLElement;
    const nextEl = testimonials[index] as HTMLElement;

    gsap.to(currentEl, {
      autoAlpha: 0,
      y: 20,
      duration: 0.4,
      onComplete: () => {
        currentEl.classList.remove("opacity-100");
        currentEl.classList.add("opacity-0", "pointer-events-none");
      },
    });

    nextEl.classList.remove("pointer-events-none");

    gsap.fromTo(
      nextEl,
      { autoAlpha: 0, y: -20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        onStart: () => {
          nextEl.classList.remove("opacity-0");
          nextEl.classList.add("opacity-100");
        },
      }
    );

    current = index;
  }

  document.getElementById("next")?.addEventListener("click", () => {
    showSlide((current + 1) % testimonials.length);
  });

  document.getElementById("prev")?.addEventListener("click", () => {
    showSlide((current - 1 + testimonials.length) % testimonials.length);
  });
}
