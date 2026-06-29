/* ==========================================================
   SKILLS MODULE (skills.js) - TABBED & SYNCED VERSION
   ========================================================== */
const initSkills = () => {
  const skillsSection = document.querySelector("#skills");
  const container = document.querySelector(".tech-tags");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (!skillsSection) return;

  // --- 1. Animation Logic (Synchronized Width & Number) ---
  const animateTabSkills = (activePane) => {
    const progressBars = activePane.querySelectorAll(".progress");
    const skillNumbers = activePane.querySelectorAll(".skill-number");

    skillNumbers.forEach((num, index) => {
      const target = +num.getAttribute("data-target");
      const bar = progressBars[index];

      // Reset state for re-animation
      num.innerText = "0%";
      if (bar) bar.style.width = "0%";

      const duration = 1500; // 1.5 Seconds
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progressRatio = Math.min(elapsedTime / duration, 1);

        const currentCount = Math.floor(progressRatio * target);

        // Simultaneous UI Update
        num.innerText = currentCount + "%";
        if (bar) bar.style.width = currentCount + "%";

        if (progressRatio < 1) {
          requestAnimationFrame(update);
        } else {
          num.innerText = target + "%";
          if (bar) bar.style.width = target + "%";
        }
      };
      requestAnimationFrame(update);
    });
  };

  // --- 2. Tab Switching Logic ---
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      // Remove active classes
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      // Add active classes to selected
      btn.classList.add("active");
      const activePane = document.getElementById(targetTab);
      activePane.classList.add("active");

      // Trigger animation for the new tab
      animateTabSkills(activePane);
    });
  });

  // --- 3. Intersection Observer (Initial Load) ---
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const initialPane = document.querySelector(".tab-pane.active");
        if (initialPane) animateTabSkills(initialPane);
        observer.unobserve(skillsSection);
      }
    },
    { threshold: 0.2 },
  );

  observer.observe(skillsSection);
};

document.addEventListener("DOMContentLoaded", initSkills);
