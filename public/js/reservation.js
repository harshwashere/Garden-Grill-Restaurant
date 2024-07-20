const slbtn1 = document.getElementById("slbtn1")
const slbtn2 = document.getElementById("slbtn2")
const svgbtn = document.getElementById("svgdiv")
const navbtn1 = document.getElementById("home")
const navbtn2 = document.getElementById("menu")
const navbtn3 = document.getElementById("abus")
const navbtn4 = document.getElementById("cont")

slbtn1.addEventListener("click", () => {
    location.href = "/signup"
});

slbtn2.addEventListener("click", () => {
    location.href = "/signin"
});

svgbtn.addEventListener("click", () => {
    location.href = "/cart"
});

navbtn1.addEventListener("click", () => {
    location.href = "/"
});

navbtn2.addEventListener("click", () => {
    location.href = "/menu"
});

navbtn3.addEventListener("click", () => {
    location.href = "/aboutus"
});

navbtn4.addEventListener("click", () => {
    location.href = "/contact"
});

const nat = document.querySelectorAll(".NAT")
const at = document.querySelectorAll(".AT")
const fst = document.querySelectorAll(".FST")
const plt = document.querySelectorAll(".PLT")
const form = document.getElementById("reserve-form")
const table = document.getElementById("tables")
const cancel = document.querySelector(".cancel")
const price = document.querySelector(".txtprice")

cancel.addEventListener('click', () => {
    form.style.display = "none"
    table.style.position = "none"
    table.style.filter = "none"
    price.textContent = ""
});

nat.forEach((nat) => {
    nat.addEventListener('click', () => {
        form.style.display = "block"
        table.style.position = ""
        table.style.filter = "blur(10px)"
        price.textContent = "₹200"
    });
});

at.forEach((at) => {
    at.addEventListener('click', () => {
        form.style.display = "block"
        table.style.display = "fixed"
        table.style.filter = "blur(10px)"
        price.textContent = "₹500"
    });
});

fst.forEach((fst) => {
    fst.addEventListener('click', () => {
        form.style.display = "block"
        table.style.display = "fixed"
        table.style.filter = "blur(10px)"
        price.textContent = "₹900"
    });
});

plt.forEach((plt) => {
    plt.addEventListener('click', () => {
        form.style.display = "block"
        // table.style.display = "fixed"
        table.style.filter = "blur(10px)"
        price.textContent = "₹1200"
    });
});