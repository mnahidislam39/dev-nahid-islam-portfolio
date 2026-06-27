// 1. Project Data Array
const myProjects = [
  {
    title: "Kushtia Polytechnic Institute",
    category: "education",
    mainImage: "assets/images/education/kpi.jpg",
    laptopView: "assets/images/education/kpi_laptop_vew.png",
    tabletView: "assets/images/education/kpi_tablet_vew.png",
    mobileView: "assets/images/education/kpi_mobile_vew.png",
    liveLink: "https://mnahidislam39.github.io/kushtia-polytechnic-institute/",
  },
  {
    title: "Grow Your Business",
    category: "e-commarce",
    mainImage: "assets/images/business/grow-your-business.png",
    laptopView: "assets/images/business/home.png",
    tabletView: "assets/images/business/about.png",
    mobileView: "assets/images/business/project.png",
    liveLink: "https://mnahidislam39.github.io/business",
  },
  {
    title: "Portfolio 2",
    category: "portfolio",
    mainImage: "assets/images/business/business2.png",
    laptopView: "assets/images/business/homeb.png",
    tabletView: "assets/images/business/portfoliob.png",
    mobileView: "assets/images/business/contactb.png",
    liveLink: "https://mnahidislam39.github.io/portfolio2",
  },
  {
    title: "Grow Axit Business",
    category: "portfolio",
    mainImage: "assets/images/portfolio/grow-axit-busiiness.jpg",
    laptopView: "assets/images/portfolio/grow-axit-busiiness.jpg",
    tabletView: "assets/images/portfolio/grow-axit-busiiness.jpg",
    mobileView: "assets/images/portfolio/grow-axit-busiiness.jpg",
    liveLink: "https://mnahidislam39.github.io/grow-axit-business",
    aos: "zoom-in",
  },
];

//  2. Services Data Array
const myServices = [
  {
    iconClass: "fa-solid fa-code",
    title: "web-design",
    description:
      "I will design educational websites, blogs, restaurants, e-commerce, etc Whatever you want. That will be looking good. I hope you will be satisfied to work with me. I will try my best to give my best.",
  },
  {
    iconClass: "fa-brands fa-dev",
    title: "web-development",
    description:
      "I will develop your website. You can hire me for your website. I hope you will be satisfied. I will try my best to give my best.",
  },
  {
    iconClass: "fas fa-business-time",
    title: "24/6 First Delivery",
    description:
      "24/6 hours as soon as possible I will try to deliver the project.",
  },
  {
    iconClass: "fab fa-staylinked",
    title: "support",
    description:
      "I always try to support my clients 24/6 hours as soon as possible. I will try to support you with any Problems On the web if you are my client.",
  },
];

// 3. Tutorials Data Array
const myTutorials = [
  {
    title: "Coming Soon",
    // videoSrc: "assets/file/video/nahid.mp4", // If using a local file
    isEmbed: false, // Put true if using YouTube iframe later
  },
];

// project-data.js ফাইলের একদম নিচে এই ৩টি লাইন যোগ করুন:
window.myProjects = myProjects;
window.myServices = myServices;
window.myTutorials = myTutorials;
