const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('modal-overlay');

const toggleModal = () => {
    const isActive = overlay.classList.toggle('active');
    overlay.setAttribute('aria-hidden', !isActive);
};

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

// Close modal if user clicks the background overlay
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) toggleModal();
});

//  Close on "Escape" key feature
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        toggleModal();
    }
});