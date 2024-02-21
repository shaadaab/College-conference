document.addEventListener("DOMContentLoaded", function () {
    var arrowUp = document.getElementById("arrow-up");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 4) {
            arrowUp.style.display = "block";
        } else {
            arrowUp.style.display = "none";
        }
    });

    arrowUp.addEventListener("click", function () {
        window.scrollTo({
            top: 1,
            behavior: "smooth",
        });
    });
});

const targetDate = new Date("2024-02-29").getTime();
const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Expired!";
    }
}

function copyToClipboard(elementId) {
    var textToCopy = document.getElementById(elementId).innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard: " + textToCopy);
}


document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.right-links').classList.toggle('open');
    });
});