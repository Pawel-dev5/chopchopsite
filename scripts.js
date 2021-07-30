// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowLeft') {
        showSlides(slideIndex += -1);
    } else if (keyName === 'ArrowRight') {
        showSlides(slideIndex += +1)
    }
    if (keyName === "Escape") {
        document.getElementById("myModal").style.display = "none";
    }
});

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Checking clicked keyboard button
// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;

//     if (keyName === 'Control') {
//         // do not alert when only Control key is pressed.
//         return;
//     }

//     if (event.ctrlKey) {
//         // Even though event.key is not 'Control' (e.g., 'a' is pressed),
//         // event.ctrlKey may be true if Ctrl key is pressed at the same time.
//         alert(`Combination of ctrlKey + ${keyName}`);
//     } else {
//         alert(`Key pressed ${keyName}`);
//     }
// }, false);