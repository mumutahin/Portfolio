// ===== NAVBAR SCROLL BEHAVIOR =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,5,15,0.95)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.borderBottom = "1px solid rgba(124,58,237,0.15)";
    navbar.style.paddingTop = "0.75rem";
    navbar.style.paddingBottom = "0.75rem";
  } else {
    navbar.style.background = "rgba(5,5,15,0.0)";
    navbar.style.backdropFilter = "none";
    navbar.style.borderBottom = "none";
    navbar.style.paddingTop = "1rem";
    navbar.style.paddingBottom = "1rem";
  }
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach((l) => {
    l.classList.remove("active");
    if (l.getAttribute("href") === "#" + current) l.classList.add("active");
  });
});

// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// ===== TYPEWRITER =====
const titles = [
  "CSE Student",
  "Beginner Ethical Hacker",
  "AI & ML Enthusiast",
  "Programmer / Developer",
];
let ti = 0,
  ci = 0,
  deleting = false;
const el = document.getElementById("typewriter-text");
function type() {
  const word = titles[ti];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ti = (ti + 1) % titles.length;
      setTimeout(type, 300);
      return;
    }
  }
  setTimeout(type, deleting ? 60 : 90);
}
setTimeout(type, 800);

// ===== TRAIT BADGES (About section) =====
const badgeContainer = document.querySelector(".flex.flex-wrap.gap-3.pt-4");
if (badgeContainer) {
  const traits = [
    "Problem Solver",
    "Self-Taught",
    "Cybersecurity",
    "AI Builder",
    "Open Source",
    "Night Coder",
  ];
  badgeContainer.innerHTML = traits
    .map(
      (t) =>
        `<span class="px-4 py-2 font-mono text-xs border border-purple-800 text-purple-300 rounded-sm hover:border-purple-400 hover:text-purple-200 transition-all cursor-default" style="background: rgba(124,58,237,0.08);">${t}</span>`,
    )
    .join("");
}

// ===== INTERSECTION OBSERVER for progress bars =====
const progressBars = document.querySelectorAll(".progress-bar");
const widths = [];
progressBars.forEach((bar) => {
  widths.push(bar.style.width);
  bar.style.width = "0%";
});
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = widths[i];
          }, i * 60);
        });
        obs.disconnect();
      }
    });
  },
  { threshold: 0.2 },
);
const skillSection = document.getElementById("skills");
if (skillSection) obs.observe(skillSection);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id === "#") return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});
