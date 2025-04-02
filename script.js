document.addEventListener("DOMContentLoaded", function() {
    alert("AI programación");
});
document.getElementById("contact-button").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("contact-modal")) {
        document.getElementById("contact-modal").style.display = "none";
    }
});
document.getElementById("contact-button").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("contact-modal")) {
        document.getElementById("contact-modal").style.display = "none";
    }
});
