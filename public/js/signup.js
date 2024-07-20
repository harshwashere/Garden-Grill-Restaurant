var pw1 = document.getElementById("txtpwd");
var pw2 = document.getElementById("txtcpwd");

function matchPassword() {
  if (pw1.value === pw2.value) {
    document.getElementById("msg2").innerHTML = "Account created succesfully";
    document.getElementById("msg2").display = "block"
    document.getElementById("msg1").display = "none"
    location.href = "/Home Page/home.html";
    return true;
  } else {
    document.getElementById("msg1").innerHTML = "**Password did not match";
    document.getElementById("msg2").display = "none"
    document.getElementById("msg1").display = "block"
    return false
  }
}
