const slbtn1 = document.getElementById("slbtn1");
const slbtn2 = document.getElementById("slbtn2");
const svgbtn = document.getElementById("svgdiv");
const navbtn1 = document.getElementById("home");
const navbtn2 = document.getElementById("menu");
const navbtn3 = document.getElementById("abus");
const navbtn4 = document.getElementById("cont");
const reserve = document.getElementById("reserve");

slbtn1.addEventListener("click", () => {
  location.href = "signup";
});

slbtn2.addEventListener("click", () => {
  location.href = "signin";
});

svgbtn.addEventListener("click", () => {
  location.href = "cart";
});

navbtn1.addEventListener("click", () => {
  location.href = "/";
});

navbtn2.addEventListener("click", () => {
  location.href = "menu";
});

navbtn3.addEventListener("click", () => {
  location.href = "aboutus";
});

navbtn4.addEventListener("click", () => {
  location.href = "contact";
});

reserve.addEventListener("click", () => {
  location.href = "reservation";
});

const menucon = document.querySelector(".menucon");

const menubtn1 = document.querySelector("menubtn1");
const btn2 = document.querySelector("menubtn2");
const btn3 = document.querySelector("menubtn3");
const btn4 = document.querySelector("menubtn4");
const btn5 = document.querySelector("menubtn5");
const btn6 = document.querySelector("menubtn6");
const btn7 = document.querySelector("menubtn7");
const btn8 = document.querySelector("menubtn8");
const btn9 = document.querySelector("menubtn9");
const btn10 = document.querySelector("menubtn10");
const btn11 = document.querySelector("menubtn11");
const btn12 = document.querySelector("menubtn12");
const btn13 = document.querySelector("menubtn13");

menubtn1.addEventListener("click", () => {
  menucon.style.top = "-0.5cm";
});

btn2.addEventListener("click", () => {
  menucon.style.top = "-15.8cm";
});

btn3.addEventListener("click", () => {
  menucon.style.top = "-29cm";
});

btn4.addEventListener("click", () => {
  menucon.style.top = "-31cm";
});

btn5.addEventListener("click", () => {
  menucon.style.top = "-44cm";
});

btn6.addEventListener("click", () => {
  menucon.style.top = "-55cm";
});

btn7.addEventListener("click", () => {
  menucon.style.top = "-67.8cm";
});

btn8.addEventListener("click", () => {
  menucon.style.top = "-98cm";
});

btn9.addEventListener("click", () => {
  menucon.style.top = "-111cm";
});

btn10.addEventListener("click", () => {
  menucon.style.top = "-113cm";
});

btn11.addEventListener("click", () => {
  menucon.style.top = "-134cm";
});

btn12.addEventListener("click", () => {
  menucon.style.top = "-154.8cm";
});

btn13.addEventListener("click", () => {
  menucon.style.top = "-166.7cm";
});

const mosambi = document.querySelector(".mosambi");

mosambi.addEventListener("click", () => {
  addToCart("Mosambi Juice", 100);
});
