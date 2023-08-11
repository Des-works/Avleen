'use strict';

// Make the navigation sticky
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// mailing not secure version
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("emailInput").value;
        alert(`Email sent to: ${emailInput}`);
    });
});