const toTopEl = document.querySelector("#to-top");
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(() => {
    if (window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: "none"
        });
        // 버튼 보이기
        gsap.to(toTopEl,.2, {
            x: "0",
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: "block"
        });
        // 버튼 숨기기
        gsap.to(toTopEl,.2, {
            x: "100px",
        });
    }
}, 300));
//_.throttle(함수, 시간); 시간을 간격으로 함수 실행 lodash
//gsap.to(el, 시간(초), 옵션); 에니메이션 효과
//new Swiper("선택자",옵션{})

toTopEl.addEventListener("click", () => {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl,index) => {
    gsap.to(fadeEl,1,{opacity: 1, delay: index+1 * .7})
});

new Swiper(".notice-line .swiper-container", {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper(".promotion .swiper-container", {
    slidesPerView: 3, // 한번에 3개 슬라이드
    spaceBetween: 10, // 한번에 10px 넘어가는 슬라이드
    centeredSlides: true, // 슬라이드를 중앙으로 정렬
    loop: true,
    autoplay: {
        delay: 5000, //5초 
    },
    pagination: {
        el: ".promotion .swiper-pagination", //페이지 번호요소
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    }
});

new Swiper(".awards .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    navigation: {
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next",
    }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add("hide");
    } else {
        promotionEl.classList.remove("hide");
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selecter, delay, size) {
    gsap.to(selecter, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", -5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach((spyEl, index) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소
            triggerHook: .8
        })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});