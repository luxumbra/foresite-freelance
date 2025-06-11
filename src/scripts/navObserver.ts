document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("main-nav");
  const maxScroll = 1000;
  let rafId = null;

  function updateNav() {
    if (window.scrollY > 0) {
      nav?.classList.add("scrolling");

      const scrollProgress = Math.min(window.scrollY / maxScroll, 1);
      const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);

      const minWidth = 528;
      const maxWidth = window.innerWidth * 0.8;
      const currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress;

      if (window.innerWidth >= 768) {
        nav?.style.setProperty("width", `${currentWidth}px`);
      }
    } else {
      nav?.classList.remove("scrolling");
      nav?.style.setProperty("width", "80%");
    }
    rafId = null;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateNav);
      }
    },
    { passive: true }
  );

  // 🔐 Only run IntersectionObserver on homepage
  const isHomePage = window.location.pathname === "/";
  if (isHomePage) {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href*='#']");
    const observerOptions = {
      rootMargin: "0px 0px 25% 0px",
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`nav a[href*="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));
  }

  // Smooth scrolling logic (homepage only)
  const navLinks = document.querySelectorAll("nav a[href*='#']");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const hashMatch = href.match(/\/?#(.+)/);
    if (hashMatch) {
      link.addEventListener("click", (e) => {
        if (window.location.pathname !== "/") return;
        e.preventDefault();
        const targetId = hashMatch[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
});
