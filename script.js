const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const hint = document.getElementById("hint");
const heartsContainer = document.querySelector(".hearts");

let opened = false;

openBtn.addEventListener("click", function () {

    if (opened) {
        return;
    }

    opened = true;

    envelope.classList.add("open");

    hint.textContent = "A little message just for you ❤️";

    createHeartBurst();
});


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    heart.textContent =
        heartTypes[
            Math.floor(Math.random() * heartTypes.length)
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 22 + "px";

    const duration =
        4 + Math.random() * 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}


setInterval(function () {
    createHeart();
}, 700);


function createHeartBurst() {

    for (let i = 0; i < 20; i++) {

        setTimeout(function () {

            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.textContent = "❤️";

            heart.style.left =
                (35 + Math.random() * 30) + "%";

            heart.style.bottom =
                "35%";

            heart.style.fontSize =
                15 + Math.random() * 20 + "px";

            heart.style.animationDuration =
                2 + Math.random() * 2 + "s";

            heartsContainer.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 4000);

        }, i * 80);
    }
}