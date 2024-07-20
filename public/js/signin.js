const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("change", () => {
  txtpwd = document.getElementById("txtpwd");
  if (togglePassword.checked) {
    txtpwd.type = "text";
  } else {
    txtpwd.type = "password";
  }
});
