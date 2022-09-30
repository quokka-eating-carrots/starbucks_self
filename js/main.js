// const searchEl = document.querySelector(".search");
// const inputEl = searchEl.querySelector("input");

// searchEl.addEventListener("click", function () {
//   inputEl.focus();
// });

// inputEl.addEventListener("focus", function () {
//   searchEl.classList.add("focused");
//   inputEl.setAttribute("placeholder", "통합검색");
// });

// inputEl.addEventListener("blur", function () {
//   searchEl.classList.remove("focused");
//   inputEl.setAttribute("placeholder", "");
// });

// FADE IN
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// 오른쪽 뱃지
const badgeEl = document.querySelector(".badges");

// to-top 버튼
const totopEl = document.querySelector(".to-top")
window.addEventListener("scroll", _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(totopEl, .3, {
      x: 0
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(totopEl, .3, {
      x: 100
   })
  };
}));

// SWIPER

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal',
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev'
  }
});

new Swiper('.awards .swiper', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev'
  },
});

// PROMOTION 숨기기
const promoEl = document.querySelector(".promotion");
const promoBtn = document.querySelector(".toggle-promotion");

let ishidePromo = false;

promoBtn.addEventListener("click", function () {
  ishidePromo = !ishidePromo
  if (ishidePromo) {
    promoEl.classList.add('hide');
  } else {
    promoEl.classList.remove('hide');
  }
});

//떠다니는 요소
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      delay: random(0, delay),
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    }
  )
};

floatingObject(".floating1", 1, 15)
floatingObject(".floating2", .5, 15)
floatingObject(".floating3", 1.5, 20)


// 상단 스크롤 클릭
totopEl.addEventListener("click", function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// 화면에 보여짐 여부에 따른 요소 관리
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller())
});

// 해당 연도 나타내기
// const thisYear = document.querySelectorAll(".this-year")
// thisYear.textContent = new Date().getFullYear();
