
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");

    });

});

const words = [
    "Design Engineer",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 110);

}

typeEffect();


// =====================================
// 3. BACK TO TOP BUTTON
// =====================================

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


// =====================================
// 4. CONTACT FORM
// =====================================

// Replace with your actual email address

document.getElementById("contact-form")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const message = document.getElementById("message").value;

    // CHANGE: Enter your actual email address

    const myEmail = "yourmail@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

});
