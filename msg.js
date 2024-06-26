let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

// Swipe functionality
let startX, endX;
gallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

gallery.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        showImage(currentIndex + 1);
    } else if (startX - endX < -50) {
        showImage(currentIndex - 1);
    }
});

// Navigation arrows
document.querySelector('.arrow-left').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    showImage(currentIndex + 1);
});
