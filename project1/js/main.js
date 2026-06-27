

"use strict";

/* ── UTILS ─────────────────────────────────────────────────── */
const qs  = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ── 1. MOBILE NAV ─────────────────────────────────────────── */
const navToggle = qs("#navToggle");
const navMenu   = qs("#navMenu");

const openNav = () => {
  navMenu.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close navigation");
};

const closeNav = () => {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
};

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () =>
    navMenu.classList.contains("is-open") ? closeNav() : openNav()
  );

  // Close on link click (mobile)
  qsa(".nav__link").forEach(link =>
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) closeNav();
    })
  );

  // Close on outside click
  document.addEventListener("click", e => {
    if (
      navMenu.classList.contains("is-open") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) closeNav();
  });

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });
}

/* ── 2. HEADER SCROLL STATE ─────────────────────────────────── */
const header = qs(".header");

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}, { passive: true });

/* ── 3. BACK TO TOP ─────────────────────────────────────────── */
const btt = qs("#backToTop");

if (btt) {
  window.addEventListener("scroll", () => {
    btt.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btt.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* ── 4. ACTIVE NAV LINKS ────────────────────────────────────── */
const sections = qsa("section[id], footer[id]");
const navLinks  = qsa(".nav__link");

const markActive = id => {
  navLinks.forEach(link => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

if (sections.length && navLinks.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) markActive(entry.target.id);
    });
  }, { rootMargin: "-60px 0px -45% 0px", threshold: 0 });

  sections.forEach(s => io.observe(s));
}

/* ── 5. SCROLL REVEAL ───────────────────────────────────────── */
// Inject reveal styles once
const revealCSS = document.createElement("style");
revealCSS.textContent = `
  .js-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .js-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .js-reveal { opacity: 1; transform: none; transition: none; }
  }
`;
document.head.appendChild(revealCSS);

// Elements to reveal — scoped selectors
const revealTargets = qsa([
  ".tool-card",
  ".pillar",
  ".roadmap__step",
  ".qual-item",
  ".meta-block",
  ".standards-item",
  ".vision__quote",
  ".swatch"
].join(","));

revealTargets.forEach((el, i) => {
  el.classList.add("js-reveal");
  el.style.transitionDelay = `${(i % 5) * 60}ms`;
});

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

revealTargets.forEach(el => revealIO.observe(el));

/* ── 6. RESIZE — close nav on widen ────────────────────────── */
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) closeNav();
}, { passive: true });

/* ── READY LOG ─────────────────────────────────────────────── */
console.log(
  "%c DecodeLabs · Project 01 loaded  ",
  "background:#A5856F;color:#fff;font-family:monospace;font-weight:bold;padding:4px 8px;border-radius:4px;"
);
