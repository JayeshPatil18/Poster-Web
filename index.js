import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyDyYgpE8_Da6SxDuLrhX9cy0hiBm0E-k70",
    authDomain: "posterapp-14ad7.firebaseapp.com",
    databaseURL: "https://posterapp-14ad7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "posterapp-14ad7",
    storageBucket: "posterapp-14ad7.appspot.com",
    messagingSenderId: "968333834166",
    appId: "1:968333834166:web:d60a3c1d10818e98217317",
    measurementId: "G-9W62D1T9E0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };

// ****************


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

        goToHomePage();
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

        goToHomePage();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});

function goToHomePage() {
    window.location.href = "/home/";
}