AOS.init();

// Breakpoints
const desktop_width = 1200;
const laptop_width = 1024;
const tablet_width = 768;
const large_phone_width = 992;

// Global Scroll Event Handle (Fixed Timeout & Memory Leak)
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (window.innerWidth <= laptop_width) {
    if (window.scrollY > 400) {
      removeClassById("side_bar", "active_left");
      removeClassById("close", "show_nav");
      addClassById("open", "show_nav");
      addClassById("go_top", "active_top");
    } else {
      removeClassById("go_top", "active_top");
    }
  }

  const openBtn = document.getElementById("open");
  if (openBtn) {
    openBtn.classList.add("hidden");
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      openBtn.classList.remove("hidden");
    }, 300);
  }
});

// Render Home & Typing Animation Engine
function renderHomeSection(data) {
  if (!data) return;

  const bgElem = document.getElementById("home-bg");
  const profileElem = document.getElementById("home-profile");
  const nameElem = document.getElementById("home-name");
  const designationElem = document.getElementById("home-designation");
  const cvElem = document.getElementById("home-cv");
  const socialsContainer = document.getElementById("home-socials");

  if (bgElem) bgElem.src = data.bgImage;
  if (profileElem) profileElem.src = data.profileImage;
  if (nameElem)
    nameElem.innerHTML = `${data.firstName} <span>${data.lastName}</span>`;
  if (designationElem) designationElem.textContent = data.designation;
  if (cvElem) cvElem.href = data.cvLink;

  if (socialsContainer && data.socialLinks) {
    socialsContainer.innerHTML = data.socialLinks
      .map(
        (social) => `
      <li>
         <a href="${social.url}" target="_blank">
            <span><i class="${social.icon}"></i></span>
         </a>
      </li>
    `,
      )
      .join("");
  }

  // ==========================================
  // Vanilla JS Typing Animation Logic
  // ==========================================
  const typedTextSpan = document.getElementById("typedText");
  // যদি ডাটা ফাইলে typingRoles অ্যারে থাকে এবং HTML-এ typedText স্প্যান থাকে
  if (typedTextSpan && data.typingRoles && data.typingRoles.length > 0) {
    const words = data.typingRoles;
    const typingSpeed = 100; // টাইপিং স্পিড (ms)
    const erasingSpeed = 50; // মুছে ফেলার স্পিড (ms)
    const newWordDelay = 2000; // শব্দ শেষ হওয়ার পর হোল্ড টাইম (ms)

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, newWordDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(
          0,
          charIndex - 1,
        );
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingSpeed + 500);
      }
    }

    // অ্যানিমেশন শুরু করা
    setTimeout(type, 500);
  }
}

// Render About
function renderAboutSection(data) {
  if (!data) return;

  const bioElem = document.getElementById("about-bio");
  const subtitleElem = document.getElementById("about-subtitle");

  // textContent এর বদলে innerHTML ব্যবহার করা হয়েছে যেন HTML ট্যাগ ও বোল্ড কাজ করে
  if (bioElem) bioElem.innerHTML = data.bio;
  if (subtitleElem) subtitleElem.innerHTML = `<b>${data.subtitle}</b>`;

  const infoListElem = document.getElementById("about-info-list");
  if (infoListElem && data.personalInfo) {
    infoListElem.innerHTML = Object.entries(data.personalInfo)
      .map(
        ([key, value]) => `
      <li>
         <strong style="text-transform: capitalize;">${key}</strong>${value}
      </li>
    `,
      )
      .join("");
  }

  const generateSkillsHtml = (skills) =>
    skills
      .map(
        (skill) => `
    <div class="progress">
       <div class="title">
          <h3>${skill.name}</h3>
       </div>
       <div class="barline">
          <div class="countbar" data-percentNumber="${skill.percent}"></div>
       </div>
    </div>
  `,
      )
      .join("");

  const frontContainer = document.getElementById("frontend-skills-container");
  const backContainer = document.getElementById("backend-skills-container");
  const cmsContainer = document.getElementById("cmsSkills-container");
  const otherContainer = document.getElementById("otherTools-container");

  if (frontContainer && data.frontEndSkills) {
    frontContainer.innerHTML = generateSkillsHtml(data.frontEndSkills);
  }
  if (backContainer && data.backEndSkills) {
    backContainer.innerHTML = generateSkillsHtml(data.backEndSkills);
  }
  if (cmsContainer && data.cmsSkills) {
    cmsContainer.innerHTML = generateSkillsHtml(data.cmsSkills);
  }
  if (otherContainer && data.otherTools) {
    otherContainer.innerHTML = generateSkillsHtml(data.otherTools);
  }
}
// Dynamic Progress Skillbar Animation Engine
function initSkillBars() {
  let numberPercent = document.querySelectorAll(".countbar");
  numberPercent.forEach((items) => {
    let startCount = 0;
    let targetPercent = parseInt(items.dataset.percentnumber) || 0;

    let stop = setInterval(() => {
      if (startCount >= targetPercent) {
        clearInterval(stop);
      } else {
        startCount++;
        items.innerHTML = `<h3>${startCount}%</h3>`;
        items.style.width = `${startCount}%`;
      }
    }, 25);
  });
}
// Render Tutorials
function renderTutorials(tutorials) {
  const containerElem = document.getElementById("tutorials-video-container");
  if (!containerElem) return;

  // Filter out tutorials that don't have a videoSrc defined
  const validTutorials = tutorials.filter((tutorial) => tutorial.videoSrc);

  // If there are no valid tutorials with videos, display "coming soon"
  if (validTutorials.length === 0) {
    containerElem.innerHTML = `<div class="single_video"><h1>coming soon</h1></div>`;
    return;
  }

  containerElem.innerHTML = "";

  validTutorials.forEach((tutorial) => {
    let mediaHtml = tutorial.isEmbed
      ? `<iframe src="${tutorial.videoSrc}" title="${tutorial.title}" frameborder="0" allowfullscreen></iframe>`
      : `<video src="${tutorial.videoSrc}" controls preload="none" controlsList="nodownload"></video>`;

    const tutorialHtml = `
      <div class="single_video">
         ${mediaHtml}
         <h5 style="margin-top: 15px; text-transform: capitalize;">${tutorial.title}</h5>
      </div>
    `;
    containerElem.insertAdjacentHTML("beforeend", tutorialHtml);
  });
}
// Render Services
function renderServices(services) {
  const containerElem = document.getElementById("services-container");
  if (!containerElem) return;
  containerElem.innerHTML = "";
  services.forEach((service) => {
    const serviceHtml = `
      <div class="single_service">
         <span><i class="${service.iconClass}"></i></span>
         <h5>${service.title}</h5>
         <p>${service.description}</p>
         <a href="#contact" class="btn btn_border">Get a Quote</a>
      </div>
    `;
    containerElem.insertAdjacentHTML("beforeend", serviceHtml);
  });
}
// Render Portfolio
function renderPortfolio(projects) {
  const gallery = document.getElementById("portfolio-gallery");
  if (!gallery) return;
  gallery.innerHTML = "";
  projects.forEach((project) => {
    const aosAttr = project.aos ? `data-aos="${project.aos}"` : "";
    const projectHtml = `
      <div class="single_portfolio" data-name="${project.category}" ${aosAttr}>
         <img src="${project.mainImage}" alt="${project.title}" loading="lazy">
         <div class="project_icon">
            <a href="${project.laptopView}" class="project_icon_link_galleryVew" title="desktop view">
               <i class="fas fa-eye project_icon_gallery_i"></i>
            </a>
            <a href="${project.tabletView}" class="project_icon_link_galleryVew" title="tablet view"></a>
            <a href="${project.mobileView}" class="project_icon_link_galleryVew" title="mobile view"></a>
            <a href="${project.liveLink}" class="project_icon_link_singleVew" target="_blank" title="view website">
               <i class="fas fa-link i"></i>
            </a>
         </div>
      </div>
    `;
    gallery.insertAdjacentHTML("beforeend", projectHtml);
  });
}
// Render Contact
function renderContactSection(data) {
  if (!data) return;

  const mapElem = document.getElementById("contact-map");
  const headingElem = document.getElementById("contact-heading");
  const subHeadingElem = document.getElementById("contact-subheading");
  const phoneElem = document.getElementById("info-phone");
  const emailElem = document.getElementById("info-email");
  const addressElem = document.getElementById("info-address");

  const nameInput = document.getElementById("contact-name-input");
  const emailInput = document.getElementById("contact-email-input");
  const msgInput = document.getElementById("contact-msg-input");

  // ডেটা পুশ করা
  if (mapElem) mapElem.src = data.mapSrc;
  if (headingElem) headingElem.textContent = data.heading;
  if (subHeadingElem) subHeadingElem.textContent = data.subHeading;
  if (phoneElem) phoneElem.textContent = data.phone;
  if (emailElem) emailElem.textContent = data.email;
  if (addressElem) addressElem.textContent = data.address;

  // প্লেসহোল্ডার টেক্সট ডাইনামিক করা
  if (nameInput) nameInput.placeholder = data.placeholderText;
  if (emailInput) emailInput.placeholder = data.placeholderText;
  if (msgInput) msgInput.placeholder = data.placeholderText;
}
// Single Centralized Initialization (DOM Ready Event)
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements Selection
  const side_bar = getId("side_bar");
  const open_nav = getId("open_nav");
  const open = getId("open");
  const close = getId("close");
  const logo = getId("logo");
  const light_mode = getId("light_mode");
  const dark_mode = getId("dark_mode");
  const container = getClass(".container");

  // ==========================================
  // Safe Dynamic Views Rendering (Bulletproof)
  // ==========================================

  // 1. Home Section
  if (typeof myHomeData !== "undefined" || window.myHomeData) {
    renderHomeSection(window.myHomeData || myHomeData);
  }

  // 2. About Section
  if (typeof myAboutData !== "undefined" || window.myAboutData) {
    renderAboutSection(window.myAboutData || myAboutData);
  }

  // 3. Tutorials Section
  if (typeof myTutorials !== "undefined" || window.myTutorials) {
    renderTutorials(window.myTutorials || myTutorials);
  }

  // 4. Services Section
  if (typeof myServices !== "undefined" || window.myServices) {
    renderServices(window.myServices || myServices);
  }

  // 5. Portfolio Section
  if (typeof myProjects !== "undefined" || window.myProjects) {
    renderPortfolio(window.myProjects || myProjects);
  }

  // 6. Contact Section
  if (typeof myContactData !== "undefined" || window.myContactData) {
    renderContactSection(window.myContactData || myContactData);
  }

  // Dynamic Navigation Link Router
  if (window.innerWidth >= desktop_width) {
    if (logo) {
      logo.addEventListener("click", () => {
        logo.setAttribute("href", "");
      });
    }

    const navigationMap = {
      about_link: "about",
      resume_link: "tutorials",
      services_link: "service",
      portfolio_link: "portfolio",
      contact_link: "contact",
    };

    Object.keys(navigationMap).forEach((linkClass) => {
      const linkElement = getClass(`.${linkClass}`);
      if (linkElement) {
        linkElement.addEventListener("click", () => {
          // Auto-pause local HTML5 videos
          const allVideos = document.querySelectorAll(
            "#tutorials-video-container video",
          );
          allVideos.forEach((video) => {
            if (!video.paused) video.pause();
          });

          // Auto-pause embedded iframes (e.g., YouTube/Vimeo)
          const allIframes = document.querySelectorAll(
            "#tutorials-video-container iframe",
          );
          allIframes.forEach((iframe) => {
            const iframeSrc = iframe.src;
            iframe.src = iframeSrc;
          });

          Object.values(navigationMap).forEach((secId) => {
            if (secId === navigationMap[linkClass]) {
              addClassById(secId, "active", "fade_in", "animated");
              removeClassById(secId, "fade_out", "hidden");
            } else {
              removeClassById(secId, "fade_in", "active", "animated");
              addClassById(secId, "fade_out", "hidden");
            }
          });
        });
      }
    });
  }

  // Mobile/Tablet Sidebar Click View Handlers
  const mobileNavLinks = getAllClass(".nav .ul li");
  mobileNavLinks.forEach((item) => {
    item.addEventListener("click", () => {
      const allVideos = document.querySelectorAll(
        "#tutorials-video-container video",
      );
      allVideos.forEach((video) => {
        if (!video.paused) video.pause();
      });

      const allIframes = document.querySelectorAll(
        "#tutorials-video-container iframe",
      );
      allIframes.forEach((iframe) => {
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      });
    });
  });

  // Responsive View Handlers
  if (window.innerWidth >= large_phone_width) {
    addClassById("side_bar", "active_left");
  }

  if (window.innerWidth <= tablet_width) {
    if (open_nav) {
      open_nav.classList.add("open_nav_show");
      if (open && close && side_bar) {
        open.addEventListener("click", () => {
          open.classList.remove("show_nav");
          close.classList.add("show_nav");
          side_bar.classList.add("active_left");
        });
        close.addEventListener("click", () => {
          open.classList.add("show_nav");
          close.classList.remove("show_nav");
          side_bar.classList.remove("remove_left");
          side_bar.classList.remove("active_left");
        });
      }
    }
  } else if (open_nav) {
    open_nav.classList.remove("open_nav_show");
  }

  if (window.innerWidth <= laptop_width) {
    const allSections = [
      "about",
      "tutorials",
      "service",
      "portfolio",
      "contact",
    ];
    allSections.forEach((sec) => {
      removeClassById(
        sec,
        "active",
        "fade_in",
        "fade_out",
        "animated",
        "hidden",
      );
    });

    if (logo) {
      logo.addEventListener("click", () => {
        logo.setAttribute("href", "#home");
      });
    }
  }

  // Light/Dark Mode Controls
  if (light_mode && dark_mode && container) {
    light_mode.addEventListener("click", () => {
      light_mode.classList.remove("active");
      dark_mode.classList.add("active");
      container.classList.add("dark_is_on");
    });
    dark_mode.addEventListener("click", () => {
      dark_mode.classList.remove("active");
      light_mode.classList.add("active");
      container.classList.remove("dark_is_on");
    });
  }

  // Nav active indicator
  const nav_li = getAllClass(".nav .ul li");
  nav_li.forEach((item) => {
    item.addEventListener("click", () => {
      nav_li.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Portfolio Filters
  const categoryLis = document.querySelectorAll(".catagory_ul li");
  const categorySpans = document.querySelectorAll(".catagory_ul li span");

  const filterPortfolio = (e) => {
    const activeSpan = document.querySelector(".catagory_ul li span.active");
    if (activeSpan) activeSpan.classList.remove("active");
    e.target.classList.add("active");

    categoryLis.forEach((li) => li.classList.remove("activeCaLi"));
    e.target.parentElement.classList.add("activeCaLi");

    const targetCategory = e.target.dataset.name;
    const portfolioItems = document.querySelectorAll(
      ".portfolio_contents .single_portfolio",
    );

    portfolioItems.forEach((item) => {
      item.classList.add("hide");
      if (item.dataset.name === targetCategory || targetCategory === "all") {
        item.classList.remove("hide");
      }
    });
  };

  categorySpans.forEach((span) =>
    span.addEventListener("click", filterPortfolio),
  );

  // ==========================================
  // Form Management & Custom Popup Countdown (Restored & Enhanced)
  // ==========================================
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("maintenancePopup");
  const closeBtn = document.querySelector(".close-btn");
  const countdownElem = document.getElementById("countdown");
  let countdownInterval;

  if (form && popup && closeBtn && countdownElem) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // ডাইনামিক আইডি দিয়ে ভ্যালুগুলো চেক করা
      const name = document.getElementById("contact-name-input").value.trim();
      const email = document.getElementById("contact-email-input").value.trim();
      const message = document.getElementById("contact-msg-input").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // পপআপ শো করা
      popup.style.display = "flex";

      let countdown = 10;
      countdownElem.textContent = countdown;

      if (countdownInterval) clearInterval(countdownInterval);

      countdownInterval = setInterval(() => {
        countdown--;
        countdownElem.textContent = countdown;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          popup.style.display = "none";
        }
      }, 1000);
      form.reset();
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
      if (countdownInterval) clearInterval(countdownInterval);
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
        if (countdownInterval) clearInterval(countdownInterval);
      }
    });
  }

  // ==========================================
  // Custom Vanilla JS Typing Animation
  // ==========================================
  const homeDataObj =
    window.myHomeData ||
    (typeof myHomeData !== "undefined" ? myHomeData : null);
  const rolesToType =
    homeDataObj && homeDataObj.typingRoles
      ? homeDataObj.typingRoles
      : ["Full-Stack Developer", "Shopify Expert"];

  const targetElement = document.querySelector(".typing-text"); // আপনার HTML এ ক্লাস typing-text না হলে সেটা এখানে দিন
  if (targetElement) {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function typeEffect() {
      const currentWord = rolesToType[wordIdx];
      if (deleting) {
        targetElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
      } else {
        targetElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = deleting ? 40 : 80;

      if (!deleting && charIdx === currentWord.length) {
        speed = 2000; // শব্দ শেষ হলে ২ সেকেন্ড থামবে
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % rolesToType.length;
        speed = 500;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }
  // Dynamic Skills Skillbar Progress
  let numberPercent = document.querySelectorAll(".countbar");
  numberPercent.forEach((items) => {
    let startCount = 0;
    let targetPercent = parseInt(items.dataset.percentnumber) || 0;

    let stop = setInterval(() => {
      if (startCount >= targetPercent) {
        clearInterval(stop);
      } else {
        startCount++;
        items.innerHTML = `<h3>${startCount}%</h3>`;
        items.style.width = `${startCount}%`;
      }
    }, 25);
  });
});
// ==========================================
// Vanilla JS Lightbox / Popup Engine (Bulletproof Version)
// ==========================================
document.addEventListener("click", (e) => {
  // আইকন, ফন্ট-অসাম বা লিঙ্কের যেকোনো জায়গায় ক্লিক করলে তার প্যারেন্ট অ্যাঙ্কর ট্র্যাক করবে
  const clickedLink =
    e.target.closest("a[title='desktop view']") ||
    e.target.closest(".project_icon_link_galleryVew");

  if (clickedLink) {
    e.preventDefault();

    // ডাইনামিকালি প্রতি ক্লিকে এলিমেন্ট চেক করা (null এরর এড়াতে)
    const lightbox = document.getElementById("custom-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
      const imgSrc = clickedLink.getAttribute("href");
      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.style.display = "flex";
        // ছোট একটা ট্রিক যেন CSS Transition বা অ্যানিমেশনটা কাজ করে
        setTimeout(() => lightbox.classList.add("show"), 50);
      }
    }
  }
});

// পপআপ ক্লোজ করার গ্লোবাল ফাংশন
function closeCustomLightbox() {
  const lightbox = document.getElementById("custom-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox) {
    lightbox.classList.remove("show");
    setTimeout(() => {
      lightbox.style.display = "none";
      if (lightboxImg) lightboxImg.src = "";
    }, 300);
  }
}

// ক্লোজ বাটনে এবং বাইরে ক্লিক করলে বন্ধ হওয়ার লজিক
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("lightbox-close") ||
    e.target.id === "custom-lightbox"
  ) {
    closeCustomLightbox();
  }
});
