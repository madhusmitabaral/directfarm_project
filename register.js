document.addEventListener("DOMContentLoaded", () => {
    const store = window.DirectFarm || window.authService;
    if (!store) {
        console.error("DirectFarm store not loaded");
        return;
    }

    const form = document.getElementById("registerForm");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const userTypeInput = document.getElementById("userType");
    const farmNameGroup = document.getElementById("farmNameGroup");
    const farmNameInput = document.getElementById("farmName");
    const addressInput = document.getElementById("address");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (userTypeInput && farmNameGroup) {
        userTypeInput.addEventListener("change", () => {
            if (userTypeInput.value === "farmer") {
                farmNameGroup.style.display = "flex";
                farmNameInput.setAttribute("required", "required");
            } else {
                farmNameGroup.style.display = "none";
                farmNameInput.removeAttribute("required");
            }
        });
    }

    function clearAllErrors() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach(el => el.textContent = "");
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function validateForm() {
        let isValid = true;
        clearAllErrors();

        if (nameInput.value.trim() === "") {
            showError("nameError", "Name is required");
            isValid = false;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showError("phoneError", "Please enter a valid 10-digit mobile number");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError("emailError", "Please enter a valid email address");
            isValid = false;
        }

        if (userTypeInput.value === "") {
            showError("userTypeError", "Please select whether you are a Farmer or Consumer");
            isValid = false;
        }

        if (userTypeInput.value === "farmer" && farmNameInput.value.trim() === "") {
            showError("farmNameError", "Farm name is required for farmers");
            isValid = false;
        }

        if (addressInput.value.trim() === "") {
            showError("addressError", "Address / Location is required");
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            showError("passwordError", "Password must be at least 6 characters long");
            isValid = false;
        }

        if (confirmPasswordInput.value !== passwordInput.value) {
            showError("confirmPasswordError", "Passwords do not match");
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const userData = {
                    name: nameInput.value.trim(),
                    phone: phoneInput.value.trim(),
                    email: emailInput.value.trim(),
                    address: addressInput.value.trim(),
                    userType: userTypeInput.value,
                    farmName: userTypeInput.value === "farmer" ? farmNameInput.value.trim() : "",
                    password: passwordInput.value
                };

                const newUser = store.register(userData);
                showAlert("Account created successfully! Connecting you directly...", "success");

                setTimeout(() => {
                    if (newUser.userType === "farmer") {
                        window.location.href = "farmer.html";
                    } else {
                        window.location.href = "marketplace.html";
                    }
                }, 1200);

            } catch (error) {
                showAlert(error.message, "error");
            }
        }
    });

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.textContent = message;
        alertBox.style.position = "fixed";
        alertBox.style.top = "20px";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translateX(-50%)";
        alertBox.style.padding = "14px 24px";
        alertBox.style.borderRadius = "8px";
        alertBox.style.zIndex = "2000";
        alertBox.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
        alertBox.style.fontWeight = "600";
        alertBox.style.fontSize = "14px";

        if (type === "success") {
            alertBox.style.backgroundColor = "#dcfce7";
            alertBox.style.color = "#15803d";
            alertBox.style.border = "1px solid #86efac";
        } else {
            alertBox.style.backgroundColor = "#fee2e2";
            alertBox.style.color = "#b91c1c";
            alertBox.style.border = "1px solid #fca5a5";
        }

        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3500);
    }
});
