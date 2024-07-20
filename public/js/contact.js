const slbtn1 = document.getElementById("slbtn1")
const slbtn2 = document.getElementById("slbtn2")
const svgbtn = document.getElementById("svgdiv")
const navbtn1 = document.getElementById("home")
const navbtn2 = document.getElementById("menu")
const navbtn3 = document.getElementById("abus")
const navbtn4 = document.getElementById("cont")
const navbtn5 = document.getElementById("reserve")

slbtn1.addEventListener("click",() => {
    slbtn1.style.height = "30px"
    slbtn1.style.width = "80px"

    setTimeout(() => {
        slbtn1.style.height = "35px"
        slbtn1.style.width = "85px"
    }, 500);

    location.href = "signup"
});

slbtn2.addEventListener("click",() => {
    slbtn2.style.height = "30px"
    slbtn2.style.width = "80px"

    setTimeout(() => {
        slbtn2.style.height = "35px"
        slbtn2.style.width = "85px"
    }, 500);

    location.href = "signin"
});

svgbtn.addEventListener("click",() =>{
    location.href = "cart"
});

navbtn1.addEventListener("click", () => {
    location.href = "/"
});

navbtn2.addEventListener("click", () => {
    location.href = "menu"
});

navbtn3.addEventListener("click", () => {
    location.href = "aboutus"
});

navbtn4.addEventListener("click", () => {
    location.href = "contact"
});

navbtn5.addEventListener("click", () => {
    location.href = "reservation"
});