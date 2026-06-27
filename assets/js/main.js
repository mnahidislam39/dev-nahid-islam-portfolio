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

// Template Render Engines
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

  // Render dynamic views with window check to prevent ordering bugs
  renderPortfolio(window.myProjects || myProjects);
  renderServices(window.myServices || myServices);
  renderTutorials(window.myTutorials || myTutorials);

  // Initialize Magnific Popup after rendering elements
  $(".project_icon_link_galleryVew").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

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

  // Form Management & Custom Popup Countdown
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("maintenancePopup");
  const closeBtn = document.querySelector(".close-btn");
  const countdownElem = document.getElementById("countdown");
  let countdownInterval;

  if (form && popup && closeBtn && countdownElem) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
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
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
      if (countdownInterval) clearInterval(countdownInterval);
    });
  }

  // Typed JS Engine Initialization
  new Typed("#typedText", {
    strings: ["Creative Designer", " ", "Full-Stack Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
  });

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
