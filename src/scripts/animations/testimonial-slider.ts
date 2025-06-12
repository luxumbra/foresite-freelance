import gsap from "gsap";

import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

function testimonialSliderScript(): void {
  if (typeof window === "undefined") return;
  const wrapper = document.getElementById("testimonial-wrapper");
  const track = document.getElementById("testimonial-track");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  var slideDelay = 1.5;
  var slideDuration = 0.3;
  var wrap = true;

  var slides: NodeListOf<HTMLElement> = document.querySelectorAll(".slide");
  var progressWrap = gsap.utils.wrap(0, 1);

  var numSlides = slides.length;

  gsap.set(slides, {
    backgroundColor:
      "random([red, blue, green, purple, orange, yellow, lime, pink])",
    xPercent: (i) => i * 100,
  });

  var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
  var timer = gsap.delayedCall(slideDelay, autoPlay);

  var animation = gsap.to(slides, {
    xPercent: "+=" + numSlides * 100,
    duration: 1,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: wrapX,
    },
  });

  var proxy = document.createElement("div");
  var slideAnimation = gsap.to({}, {});
  var slideWidth = 0;
  var wrapWidth = 0;

  var draggable = new Draggable(proxy, {
    trigger: track,
    inertia: true,
    onPress: updateDraggable,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: {
      x: snapX,
    },
  });

  resize();

  window.addEventListener("resize", resize);

  prevButton.addEventListener("click", function () {
    animateSlides(1);
  });

  nextButton.addEventListener("click", function () {
    animateSlides(-1);
  });

  function updateDraggable() {
    timer.restart(true);
    slideAnimation.kill();
    this.update();
  }

  function animateSlides(direction) {
    timer.restart(true);
    slideAnimation.kill();
    var x = snapX(
      (gsap.getProperty(proxy, "x") as number) + direction * slideWidth
    );

    slideAnimation = gsap.to(proxy, {
      x: x,
      duration: slideDuration,
      onUpdate: updateProgress,
    });
  }

  function autoPlay() {
    if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
      timer.restart(true);
    } else {
      animateSlides(-1);
    }
  }

  function updateProgress() {
    animation.progress(
      progressWrap((gsap.getProperty(proxy, "x") as number) / wrapWidth)
    );
  }

  function snapX(value) {
    let snapped = gsap.utils.snap(slideWidth, value);
    return wrap
      ? snapped
      : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
  }

  function resize() {
    var norm = (gsap.getProperty(proxy, "x") as number) / wrapWidth || 0;

    slideWidth = slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;

    wrap ||
      draggable.applyBounds({ minX: -slideWidth * (numSlides - 1), maxX: 0 });

    gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }
}

/**
 * WIP Function to handle swipe icon animation, rotating from left to right and bouncing using gsap
 * @returns {void}
 */
function swipeIconAnimation(): void {
  const swipeIcon = document.querySelector(".swipe-icon");
  if (!swipeIcon) return;

  // WIP
}

export { swipeIconAnimation, testimonialSliderScript };
