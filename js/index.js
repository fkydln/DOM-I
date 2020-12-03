const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//cta-img displayed.
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
//navbar text is displaying.
let navTxt = document.getElementsByTagName("a");
navTxt[0].innerHTML = siteContent["nav"]["nav-item-1"];
navTxt[1].innerHTML = siteContent["nav"]["nav-item-2"];
navTxt[2].innerHTML = siteContent["nav"]["nav-item-3"];
navTxt[3].innerHTML = siteContent["nav"]["nav-item-4"];
navTxt[4].innerHTML = siteContent["nav"]["nav-item-5"];
navTxt[5].innerHTML = siteContent["nav"]["nav-item-6"];
// adding h1
let ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.textContent = siteContent["cta"]["h1"];
// cta-text button text adding
let ctaBtt = document.querySelector(".cta-text button");
ctaBtt.textContent = siteContent["cta"]["button"];
// main content H4's
let contH4 = document.querySelectorAll("h4");
contH4[0].textContent = siteContent["main-content"]["features-h4"];
contH4[1].textContent = siteContent["main-content"]["about-h4"];
contH4[2].textContent = siteContent["main-content"]["services-h4"];
contH4[3].textContent = siteContent["main-content"]["product-h4"];
contH4[4].textContent = siteContent["main-content"]["vision-h4"];
// main contents
let content = document.querySelectorAll(".text-content p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];
// middle image in main contents
let contentImg = document.querySelector(".middle-img");
contentImg.src="img/mid-page-accent.jpg";
//contact h4
contH4[5].textContent = siteContent["contact"]["contact-h4"];
//contact content
let contContact = document.querySelectorAll(".contact p");
contContact[0].textContent = siteContent["contact"]["address"];
contContact[1].textContent = siteContent["contact"]["phone"];
contContact[2].textContent = siteContent["contact"]["email"];
//footer
let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];


