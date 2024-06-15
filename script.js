const toggle = document.querySelector('.input');
const body = document.body;
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

toggle.addEventListener('change', () => {
    body.classList.toggle('dark', toggle.checked);
});

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openModal();
    });
});

const openModal = () => {
    modal.style.display = 'block';
    modalImg.src = galleryImages[currentIndex].src;
    caption.innerHTML = galleryImages[currentIndex].alt;
};

const closeModal = () => {
    modal.style.display = 'none';
};

const showPrevImage = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
    openModal();
};

const showNextImage = () => {
    currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
    openModal();
};

prev.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevImage();
});

next.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextImage();
});

modal.addEventListener('click', (e) => {
    if (e.target !== modalImg && e.target !== prev && e.target !== next) {
        closeModal();
    }
});
