AOS.init();
// select id
const side_bar = getId("side_bar");
const open_nav = getId("open_nav");
const open = getId("open");
const close = getId("close");
const logo = getId("logo");
const go_top = getId("go_top");
const logo_img = getId("logo_img");
const light_mode = getId("light_mode");
const dark_mode = getId("dark_mode");
const contactForm = getId("contactForm");
const email = getId("email");
// selcet class
const about_link = getClass(".about_link");
const resume_link = getClass(".resume_link");
const services_link = getClass(".services_link");
const portfolio_link = getClass(".portfolio_link");
const contact_link = getClass(".contact_link");
const container = getClass(".container ");

// desktop_width
const desktop_width = 1200;
// laptop_width
const laptop_width = 1024;
// tablet_width
const tablet_width = 768;
// large_phone_width
const large_phone_width = 992;

// it will work when window will be scroll
window.addEventListener("scroll", () => {
  if (window.innerWidth <= 1024) {
    if (window.scrollY > 400) {
      removeClassById("side_bar", "active_left");
      removeClassById("close", "show_nav");
      addClassById("open", "show_nav");
      addClassById("go_top", "active_top");
    } else {
      removeClassById("go_top", "active_top");
    }
  }
  let scrollTimeout;
  clearTimeout(scrollTimeout);
  document.getElementById("open").classList.add("hidden");
  scrollTimeout = setTimeout(function () {
    document.getElementById("open").classList.remove("hidden");
  }, 300);
});

// addEventListener condition will work when desktop_width and up
if (window.innerWidth >= desktop_width) {
  logo.addEventListener("click", () => {
    logo.setAttribute("href", "");
  });
  getClass(".about_link").addEventListener("click", () => {
    addClassById("about", "active", "fade_in", "animated");
    removeClassById("about", "fade_out", "hidden");
    // resume
    removeClassById("resume", "fade_in", "active", "animated");
    addClassById("resume", "fade_out", "hidden");
    // service
    removeClassById("service", "fade_in", "active", "animated");
    addClassById("service", "fade_out", "hidden");
    // portfolio
    removeClassById("portfolio", "fade_in", "active", "animated");
    addClassById("portfolio", "fade_out", "hidden");
    // contact
    removeClassById("contact", "fade_in", "active", "animated");
    addClassById("contact", "fade_out", "hidden");
  });
  getClass(".resume_link").addEventListener("click", () => {
    // resume
    removeClassById("resume", "fade_out", "hidden");
    addClassById("resume", "active", "fade_in", "animated");
    // about
    removeClassById("about", "active", "fade_in", "animated");
    addClassById("about", "fade_out", "hidden");
    // service
    removeClassById("service", "fade_in", "active", "animated");
    addClassById("service", "fade_out", "hidden");
    // portfolio
    removeClassById("portfolio", "fade_in", "active", "animated");
    addClassById("portfolio", "fade_out", "hidden");
    // contact
    removeClassById("contact", "fade_in", "active", "animated");
    addClassById("contact", "fade_out", "hidden");
  });
  getClass(".services_link").addEventListener("click", () => {
    // service
    addClassById("service", "active", "fade_in", "animated");
    removeClassById("service", "fade_out", "hidden");
    // about
    removeClassById("about", "active", "fade_in", "animated");
    addClassById("about", "fade_out", "hidden");
    // resume
    removeClassById("resume", "fade_in", "active", "animated");
    addClassById("resume", "fade_out", "hidden");
    // portfolio
    removeClassById("portfolio", "fade_in", "active", "animated");
    addClassById("portfolio", "fade_out", "hidden");
    // contact
    removeClassById("contact", "fade_in", "active", "animated");
    addClassById("contact", "fade_out", "hidden");
  });
  getClass(".portfolio_link").addEventListener("click", () => {
    // portfolio
    addClassById("portfolio", "fade_in", "active", "animated");
    removeClassById("portfolio", "fade_out", "hidden");
    // service
    removeClassById("service", "fade_in", "active", "animated");
    addClassById("service", "fade_out", "hidden");
    // resume
    removeClassById("resume", "fade_in", "active", "animated");
    addClassById("resume", "fade_out", "hidden");
    // about
    removeClassById("about", "active", "fade_in", "animated");
    addClassById("about", "fade_out", "hidden");
    // contact
    removeClassById("contact", "fade_in", "active", "animated");
    addClassById("contact", "fade_out", "hidden");
  });
  getClass(".contact_link").addEventListener("click", () => {
    // contact
    addClassById("contact", "fade_in", "active", "animated");
    removeClassById("contact", "fade_out", "hidden");
    // about
    removeClassById("about", "fade_in", "active", "animated");
    addClassById("about", "fade_out", "hidden");
    // service
    removeClassById("service", "fade_in", "active", "animated");
    addClassById("service", "fade_out", "hidden");
    // portfolio
    removeClassById("portfolio", "fade_in", "active", "animated");
    addClassById("portfolio", "fade_out", "hidden");
    // resume
    removeClassById("resume", "fade_in", "active", "animated");
    addClassById("resume", "fade_out", "hidden");
  });
}
if (window.innerWidth >= large_phone_width) {
  addClassById("side_bar", "active_left");
}
// condition will be 768px and down
if (window.innerWidth <= tablet_width) {
  open_nav.classList.add("open_nav_show");
  if (open_nav.classList.contains("open_nav_show")) {
    open.addEventListener("click", () => {
      open.classList.remove("show_nav");
      close.classList.add("show_nav");
      side_bar.classList.add("active_left");
    });
    close.addEventListener("click", () => {
      open.classList.add("show_nav");
      close.classList.remove("show_nav");
      side_bar.classList.remove("active_left");
    });
  }
} else {
  open_nav.classList.remove("open_nav_show");
}
//condition will work when width under laptop_width
if (window.innerWidth <= laptop_width) {
  removeClassById(
    "about",
    "active",
    "fade_in",
    "fade_out",
    "animated",
    "hidden"
  );
  removeClassById(
    "resume",
    "active",
    "fade_in",
    "fade_out",
    "animated",
    "hidden"
  );
  removeClassById(
    "service",
    "active",
    "fade_in",
    "fade_out",
    "animated",
    "hidden"
  );
  removeClassById(
    "portfolio",
    "active",
    "fade_in",
    "fade_out",
    "animated",
    "hidden"
  );
  removeClassById(
    "contact",
    "active",
    "fade_in",
    "fade_out",
    "animated",
    "hidden"
  );

  logo.addEventListener("click", () => {
    logo.setAttribute("href", "#home");
  });
}
light_mode.addEventListener("click", () => {
  light_mode.classList.remove("active");
  dark_mode.classList.add("active");
  container.classList.add("dark_is_on");
  // logo_img.setAttribute('src', 'assets/images/logo/nk.png');
});
dark_mode.addEventListener("click", () => {
  dark_mode.classList.remove("active");
  light_mode.classList.add("active");
  container.classList.remove("dark_is_on");
  // logo_img.setAttribute('src', 'assets/images/logo/nkb.png');
});
// nav_li
const nav_li = getAllClass(".nav .ul li");
nav_li.forEach((item) => {
  item.addEventListener("click", () => {
    nav_li.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
// catagory
let catagory_ul = getAllClass(".catagory_ul li");
catagory_ul.forEach((catagory_ul_li) => {
  catagory_ul_li.addEventListener("click", () => {
    catagory_ul.forEach((catagory_ul_li) => {
      catagory_ul_li.classList.remove("activeCaLi");
    });
    catagory_ul_li.classList.add("activeCaLi");
  });
});
let catagory_ul_li = getAllClass(".catagory_ul li span");
let portfolio_cnt = getAllClass(".portfolio_contents .single_portfolio");
let filterPortfolio = (e) => {
  getClass(".active").classList.remove("active");
  e.target.classList.add("active");

  portfolio_cnt.forEach((single_project) => {
    single_project.classList.add("hide");
    if (
      single_project.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      single_project.classList.remove("hide");
    }
  });
};
catagory_ul_li.forEach((span) =>
  span.addEventListener("click", filterPortfolio)
);

// Start Popup
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("maintenancePopup");
  const closeBtn = document.querySelector(".close-btn");
  const countdownElem = document.getElementById("countdown");
  let countdownInterval;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
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
});

// End Popup

// typeing
var typedText = new Typed("#typedText", {
  strings: ["Creative Designer", " ", "Full-Stack Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

let numberPercent = document.querySelectorAll(".countbar");
let getPercent = Array.from(numberPercent);

getPercent.map((items) => {
  let startCount = 0;
  let progressBar = () => {
    startCount++;
    items.innerHTML = `<h3>${startCount}%</h3>`;
    items.style.width = `${startCount}%`;
    if (startCount == items.dataset.percentnumber) {
      clearInterval(stop);
    }
  };
  let stop = setInterval(() => {
    progressBar();
  }, 25);
});

$(".project_icon_link_galleryVew").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});
