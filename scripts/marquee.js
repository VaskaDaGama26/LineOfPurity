const logos = [
  "assets/PartnersSection/logo-x5-retail-group.png",
  "assets/PartnersSection/logo-lenta.png",
  "assets/PartnersSection/logo-hoff.png",
  "assets/PartnersSection/logo-diksi.png",
];

const marqueeInner = document.querySelector(".partners__marquee-inner");

function createLogoSet() {
  const fragment = document.createDocumentFragment();
  logos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    fragment.appendChild(img);
  });
  return fragment;
}

for (let i = 1; i <= 3; i++) {
  marqueeInner.appendChild(createLogoSet());
}

let scrollPos = 0;
function animateMarquee() {
  scrollPos += 0.75;
  const resetPoint = marqueeInner.scrollWidth / 2;
  if (scrollPos >= resetPoint) scrollPos = 0;
  marqueeInner.style.transform = `translateX(-${scrollPos}px)`;
  requestAnimationFrame(animateMarquee);
}

animateMarquee();
