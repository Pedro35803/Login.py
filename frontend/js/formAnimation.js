const sectionRegis = document.querySelector("#section-registration");
const sectionLogin = document.querySelector("#section-login");

const linkRegis = document.querySelector("#link-registration");
const linkLogin = document.querySelector("#link-login");

const animateCss = "changeSection 0.65s ease"

linkLogin.addEventListener("click", () => {
    sectionRegis.classList.remove("hidden");
    sectionLogin.classList.add("hidden");

    sectionRegis.style.animation = animateCss
})

linkRegis.addEventListener("click", () => {
    sectionLogin.classList.remove("hidden");
    sectionRegis.classList.add("hidden");

    sectionLogin.style.animation = animateCss
})