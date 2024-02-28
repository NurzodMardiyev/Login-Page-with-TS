var form = document.getElementById('form');
var userDB = [];
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);
    var username = document.getElementById('userName');
    var password = document.getElementById('passwordInput');
    var userObj = {
        username: username.value,
        password: password.value
    };
    console.log(userObj);
});
// Show or Hide password
var passwordInput = document.getElementById("passwordInput");
var icon = document.querySelector(".showPasswordIcon");
icon === null || icon === void 0 ? void 0 : icon.addEventListener('click', function togglePassword() {
    if (!icon)
        return;
    passwordInput.type === "password" ? (passwordInput.type = "text", (icon.textContent = "🚫")) : (passwordInput.type = "password", (icon.textContent = "👁️"));
});
