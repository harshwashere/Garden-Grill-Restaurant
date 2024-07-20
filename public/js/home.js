const slbtn1 = document.getElementById("slbtn1");
const slbtn2 = document.getElementById("slbtn2");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const abus = document.getElementById("abus");
const cont = document.getElementById("cont");
const reserve = document.getElementById("reserve");
const svgdiv = document.getElementById("svgdiv i");

slbtn1.addEventListener("click", () => {
  location.href = "signup";
});

slbtn2.addEventListener("click", () => {
  location.href = "signin";
});

home.addEventListener("click", () => {
  location.href = "/";
});

menu.addEventListener("click", () => {
  location.href = "menu";
});

abus.addEventListener("click", () => {
  location.href = "aboutus";
});

cont.addEventListener("click", () => {
  location.href = "contact";
});

reserve.addEventListener("click", () => {
  location.href = "reservation";
});

svgdiv.addEventListener("click", () => {
  location.href = "cart";
});

const vmbtn = document.getElementById("vmbtn");
const tabbtn = document.getElementById("tabbtn");
const learnbtn = document.getElementById("learnbtn");

vmbtn.addEventListener("click", () => {
  location.href = "menu";
});

tabbtn.addEventListener("click", () => {
  location.href = "reservation";
});

learnbtn.addEventListener("click", () => {
  location.href = "aboutus";
});
