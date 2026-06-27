//  Home Complete Data
const myHomeData = {
  bgImage: "assets/images/bgimage.jpg",
  profileImage: "assets/images/nahidislam.jpg",
  firstName: "Nahid",
  lastName: "Islam",
  designation: "a Professional",
  cvLink: "assets/file/resumeOfnahid.pdf",

  // Typing Roles
  typingRoles: ["Shopify Developer", "Full-Stack Developer"],

  socialLinks: [
    {
      platform: "facebook",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/nahidislamfbp",
    },
    {
      platform: "linkedin",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/mnahidislam39/",
    },
    {
      platform: "github",
      icon: "fab fa-github",
      url: "https://github.com/mnahidislam39",
    },
    {
      platform: "behance",
      icon: "fab fa-behance",
      url: "https://www.behance.net/mnahidislam39",
    },
  ],
};

// Global Sync
window.myHomeData = myHomeData;

// About Me Complete Data
const myAboutData = {
  bio: `I am a Shopify-focused Full-Stack Web Developer and Team Leader, currently leading a team in delivering high-quality eCommerce solutions. My primary expertise lies in Shopify      store development, customization, and performance optimization, helping businesses build scalable and conversion-focused online stores.

   <span class="bio-second font-bold"> Alongside Shopify, I have strong expertise in HTML, CSS, Bootstrap, Tailwind CSS, SASS, JavaScript, jQuery, Vue.js, PHP, and Laravel, allowing me to handle both front-end and back-end development efficiently.</span>

   <span class="bio-third font-bold">I manage project planning, guide developers, maintain code quality, and ensure timely project delivery. I am passionate about writing clean, maintainable, and scalable code while following modern development standards. </span>

   <span class="bio-four font-bold"> With strong problem-solving skills, leadership experience, and a collaborative mindset, I am committed to helping businesses grow by creating user-friendly, responsive, and high-performing web solutions. </span>`,
  subtitle:
    "Full-Stack Developer & Creative Designer JS | Vue.js | PHP | Laravel | Shopify | WordPress",
  personalInfo: {
    age: 24,
    residence: "Bangladesh",
    // freelance: "Available",
    address: "Ishwardi, Pabna, Dhaka, BD",
  },
  frontEndSkills: [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 90 },
    { name: "Bootstrap", percent: 80 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "SCSS", percent: 80 },
    { name: "JavaScript", percent: 80 },
    { name: "Vue.js", percent: 80 },
    { name: "jQuery", percent: 80 },
  ],
  backEndSkills: [
    { name: "PHP", percent: 80 },
    { name: "Laravel", percent: 80 },
    { name: "mySQL", percent: 80 },
  ],
  cmsSkills: [
    { name: "Shopify", percent: 90 },
    { name: "WordPress", percent: 70 },
  ],
  otherTools: [
    { name: "Git & GitHub", percent: 80 },
    { name: "vscode", percent: 80 },
    { name: "Postman", percent: 80 },
    { name: "Adobe Photoshop", percent: 60 },
    { name: "Adobe Illustrator", percent: 60 },
  ],
};

// 2. Tutorials Data Array
const myTutorials = [
  {
    title: "Coming Soon",
    // videoSrc: "assets/file/video/nahid.mp4", // If using a local file
    isEmbed: false, // Put true if using YouTube iframe later
  },
];

//  Services Data Array
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

//  Project Data Array
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

//  Contact Data
const myContactData = {
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58256.84832685325!2d88.9842398893949!3d213477606834945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11!3m3!1m2!1s0x39fea06f9ba1dd67%3A0x8c9a9a127b3e1c7f!2sIshwardi!5e0!3m2!1sen!2sbd!4v1701869211072!5m2!1sen!2sbd",
  heading: "Have You Any Question?",
  subHeading: "I'm At Your Services.",
  phone: "+8801761-005639",
  email: "devnahidislam4@gmail.com",
  address: "ishwardi, pabna, dhaka, BD",
  placeholderText:
    "Note: Still in development so please contact me via the above information.",
};

// Global context synchronization
window.myAboutData = myAboutData;
window.myTutorials = myTutorials;
window.myServices = myServices;
window.myProjects = myProjects;
window.myContactData = myContactData;
