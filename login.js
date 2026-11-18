document.addEventListener("DOMContentLoaded", () => {
    const store = window.DirectFarm || window.authService;
    if (!store) {
        console.error("DirectFarm store not loaded");
        return;
    }

    const currentUser = store.getCurrentUser();
    if (currentUser) {
        redirectBasedOnUserType(currentUser);
        return;
    }

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("login-error-msg");

    const demoFarmerBtn = document.getElementById("demo-farmer-btn");
    const demoConsumerBtn = document.getElementById("demo-consumer-btn");

    if (demoFarmerBtn) {
        demoFarmerBtn.addEventListener("click", () => {
            emailInput.value = "farmer@directfarm.com";
            passwordInput.value = "farmer123";
            submitLogin("farmer@directfarm.com", "farmer123");
        });
    }

    if (demoConsumerBtn) {
        demoConsumerBtn.addEventListener("click", () => {
            emailInput.value = "consumer@directfarm.com";
            passwordInput.value = "consumer123";
            submitLogin("consumer@directfarm.com", "consumer123");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            submitLogin(email, password);
        });
    }

    function submitLogin(email, password) {
        if (errorMsg) errorMsg.style.display = "none";

        if (!email || !password) {
            showError("Please enter both email and password.");
            return;
        }

        const user = store.login(email, password);

        if (user) {
            showSuccessAlert(`Welcome back, ${user.name}! Redirecting...`);
            setTimeout(() => {
                redirectBasedOnUserType(user);
            }, 1000);
        } else {
            showError("Invalid email or password. Please try again or use the demo buttons.");
        }
    }

    function redirectBasedOnUserType(user) {
        if (user.userType === "farmer") {
            window.location.href = "farmer.html";
        } else {
            window.location.href = "marketplace.html";
        }
    }

    function showError(msg) {
        if (errorMsg) {
            errorMsg.textContent = msg;
            errorMsg.style.display = "block";
        } else {
            alert(msg);
        }
    }

    function showSuccessAlert(message) {
        const alertBox = document.createElement("div");
        alertBox.textContent = message;
        alertBox.style.position = "fixed";
        alertBox.style.top = "20px";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translateX(-50%)";
        alertBox.style.padding = "14px 24px";
        alertBox.style.borderRadius = "8px";
        alertBox.style.zIndex = "2000";
        alertBox.style.backgroundColor = "#dcfce7";
        alertBox.style.color = "#15803d";
        alertBox.style.border = "1px solid #86efac";
        alertBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        alertBox.style.fontWeight = "600";
        alertBox.style.fontSize = "14px";
        document.body.appendChild(alertBox);
    }
});
