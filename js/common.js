const searchEl = document.querySelector(".search");
const searchInput = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
    searchInput.focus();
});

// 인풋창 넓어지는 클래스 및 디폴트 글자 추가
searchInput.addEventListener("focus", () => {
    searchEl.classList.add("focused");
    searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", () => {
    searchEl.classList.remove("focused");
    searchInput.setAttribute("placeholder", "");
});

// 올해 날짜 출력
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();