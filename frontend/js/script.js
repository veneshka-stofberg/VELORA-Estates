
"use strict";

// VELORA ESTATES — PHASE 1

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const yearElement = document.getElementById("year");

// HEADER SCROLL EFFECT

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();

// MOBILE NAVIGATION

function closeMenu() {
  navigation.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// CLOSE MENU AFTER NAVIGATION

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// CLOSE MENU WITH ESCAPE KEY

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// CLOSE MENU WHEN SWITCHING TO DESKTOP

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

// FOOTER YEAR

yearElement.textContent = new Date().getFullYear();

console.log("VELORA Estates — Phase 1 loaded successfully.");
