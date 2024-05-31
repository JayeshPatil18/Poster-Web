let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


// 
document.addEventListener('DOMContentLoaded', (event) => {
    // Login form validation
    document.getElementById('login-btn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission

        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        if (loginEmail === '' || loginPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(loginEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Submit the login form
        alert('Login form submitted successfully.');
        // Add your form submission logic here
    });

    // Signup form validation
    document.getElementById('signup-btn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission

        const signupName = document.getElementById('signup-name').value;
        const signupEmail = document.getElementById('signup-email').value;
        const signupPassword = document.getElementById('signup-password').value;
        const signupConfirmPassword = document.getElementById('signup-confirm-password').value;

        if (signupName === '' || signupEmail === '' || signupPassword === '' || signupConfirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(signupEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (signupPassword !== signupConfirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Submit the signup form
        alert('Signup form submitted successfully.');
        // Add your form submission logic here
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
