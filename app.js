document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input");
    const searchButton = document.querySelector(".form_btn");
    const cards = document.querySelectorAll(".card");

    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector(".card_h2").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
