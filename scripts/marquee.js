$(document).ready(function () {
  const logos = [
    "assets/PartnersSection/logo-x5-retail-group.png",
    "assets/PartnersSection/logo-lenta.png",
    "assets/PartnersSection/logo-hoff.png",
    "assets/PartnersSection/logo-diksi.png",
  ];

  const $marqueeInner = $(".partners__marquee-inner");

  function createLogoSet() {
    const $fragment = $(document.createDocumentFragment());
    logos.forEach((src) => {
      $("<img>", { src: src, alt: "" }).appendTo($fragment);
    });
    return $fragment;
  }

  for (let i = 1; i <= 3; i++) {
    $marqueeInner.append(createLogoSet());
  }

  let scrollPos = 0;

  function animateMarquee() {
    scrollPos += 0.75;
    const resetPoint = $marqueeInner[0].scrollWidth / 2;
    if (scrollPos >= resetPoint) scrollPos = 0;

    $marqueeInner.css("transform", `translateX(-${scrollPos}px)`);

    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
});
