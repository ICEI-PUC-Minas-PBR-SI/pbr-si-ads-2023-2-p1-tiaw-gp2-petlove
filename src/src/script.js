const profileCards = document.querySelectorAll(".profile-card");
const prevButtons = document.querySelectorAll("#prev-button");
const nextButtons = document.querySelectorAll("#next-button");

let currentIndex = 0;

function showProfile(index) {
    profileCards.forEach((card, i) => {
        if (i === index) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function nextProfile() {
    currentIndex = (currentIndex + 1) % profileCards.length;
    showProfile(currentIndex);
}

function prevProfile() {
    currentIndex = (currentIndex - 1 + profileCards.length) % profileCards.length;
    showProfile(currentIndex);
}

showProfile(currentIndex);

prevButtons.forEach((button) => {
    button.addEventListener("click", prevProfile);
});

nextButtons.forEach((button) => {
    button.addEventListener("click", nextProfile);
});
