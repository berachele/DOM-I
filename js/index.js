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

//Adding the anchor tags
document.querySelector('a:nth-of-type(1)').textContent = siteContent.nav['nav-item-1'];
document.querySelector('a:nth-of-type(2)').textContent = siteContent.nav['nav-item-2'];
document.querySelector('a:nth-of-type(3)').textContent = siteContent.nav['nav-item-3'];
document.querySelector('a:nth-of-type(4)').textContent = siteContent.nav['nav-item-4'];
document.querySelector('a:nth-of-type(5)').textContent = siteContent.nav['nav-item-5'];
document.querySelector('a:nth-of-type(6)').textContent = siteContent.nav['nav-item-6'];

//cta section
document.querySelector('.cta .cta-text h1').textContent = siteContent.cta['h1'];
document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button'];
// document.getElementById('cta-img').setAttribute('src', siteContent.cta['img-src']);
document.getElementById('cta-img').src = siteContent.cta['img-src'];


//main-content section
//top-content
document.querySelector('.text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.text-content:nth-of-type(1) p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];

//middle-image
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

//bottom-content
// document.querySelector('.text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['services-h4'];
// document.querySelector('.text-content:nth-of-type(3) p').textContent = siteContent['main-content']['services-content'];
// document.querySelector('.text-content:nth-of-type(4) h4').textContent = siteContent['main-content']['product-h4'];
// document.querySelector('.text-content:nth-of-type(4) p').textContent = siteContent['main-content']['product-content'];
// document.querySelector('.text-content:nth-of-type(5) h4').textContent = siteContent['main-content']['vision-h4'];
// document.querySelector('.text-content:nth-of-type(5) p').textContent = siteContent['main-content']['vision-content'];

const btmH4 = document.querySelectorAll('.bottom-content h4');
btmH4[0].textContent = siteContent['main-content']['services-h4'];
btmH4[1].textContent = siteContent['main-content']['product-h4'];
btmH4[2].textContent = siteContent['main-content']['vision-h4'];

const btmP = document.querySelectorAll('.bottom-content p');
btmP[0].textContent = siteContent['main-content']['services-content'];
btmP[1].textContent = siteContent['main-content']['product-content'];
btmP[2].textContent = siteContent['main-content']['vision-content'];

//contact section
//contact h4
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];

//contact p
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

//footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;