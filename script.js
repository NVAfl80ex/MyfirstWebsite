document.addEventListener("DOMContentLoaded", function() {
    alert("AI programación"); // Оповещение при загрузке страницы

    const modal = document.getElementById("contact-modal");
    const contactButton = document.getElementById("contact-button");
    const closeButton = document.querySelector(".close");

    // Открытие модального окна
    contactButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Закрытие модального окна через крестик
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});