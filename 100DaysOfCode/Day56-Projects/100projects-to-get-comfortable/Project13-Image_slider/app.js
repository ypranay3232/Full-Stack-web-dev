const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');
const arcItems = document.querySelectorAll('.arc-item');
const progressBar = document.querySelector('.progress-bar');

function updateNarrativeUI() {
    const activeItem = document.querySelectorAll('.item')[1]; // The visible item
    const arcId = activeItem.getAttribute('data-arc');
    const itemId = parseInt(activeItem.getAttribute('data-id'));
    const totalItems = document.querySelectorAll('.item').length;

    // 1. Update Arc Highlights
    arcItems.forEach(item => {
        if (item.getAttribute('data-arc') === arcId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // 2. Update Progress Bar
    const progress = (itemId / totalItems) * 100;
    progressBar.style.width = `${progress}%`;

    // 3. Navigation Constraints (Senior UX: Don't loop a story)
    if (activeItem.classList.contains('finale')) {
        next.style.opacity = '0.2';
        next.style.pointerEvents = 'none';
    } else {
        next.style.opacity = '1';
        next.style.pointerEvents = 'auto';
    }

    // Disable prev on first slide
    if (itemId === 1) {
        prev.style.opacity = '0.2';
        prev.style.pointerEvents = 'none';
    } else {
        prev.style.opacity = '1';
        prev.style.pointerEvents = 'auto';
    }
}

next.addEventListener('click', function () {
    const items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
    updateNarrativeUI();
});

prev.addEventListener('click', function () {
    const items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
    updateNarrativeUI();
});

// Jump to Arc Logic
arcItems.forEach(arcBtn => {
    arcBtn.addEventListener('click', function () {
        const targetArc = this.getAttribute('data-arc');

        // Find how many steps we need to move
        let items = Array.from(document.querySelectorAll('.item'));
        let targetIndex = items.findIndex(item => item.getAttribute('data-arc') === targetArc);

        if (targetIndex === -1) return;

        const steps = targetIndex - 1;

        if (steps > 0) {
            for (let i = 0; i < steps; i++) {
                const currentItems = document.querySelectorAll('.item');
                slide.appendChild(currentItems[0]);
            }
        } else if (steps < 0) {
            for (let i = 0; i > steps; i--) {
                const currentItems = document.querySelectorAll('.item');
                slide.prepend(currentItems[currentItems.length - 1]);
            }
        }

        updateNarrativeUI();
    });
});

// Watch Again Logic
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('restart')) {
        // Move all items until slide 1 is at index 1
        let items = Array.from(document.querySelectorAll('.item'));
        let targetIndex = items.findIndex(item => item.getAttribute('data-id') === "1");

        // We want item with ID 1 to be at index 1.
        // Current index of ID 1 is targetIndex.
        // We need to moveappendChild until it's at index 1.

        const steps = targetIndex - 1;
        if (steps > 0) {
            for (let i = 0; i < steps; i++) {
                const currentItems = document.querySelectorAll('.item');
                slide.appendChild(currentItems[0]);
            }
        } else if (steps < 0) {
            for (let i = 0; i > steps; i--) {
                const currentItems = document.querySelectorAll('.item');
                slide.prepend(currentItems[currentItems.length - 1]);
            }
        }
        updateNarrativeUI();
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next.click();
    if (e.key === 'ArrowLeft') prev.click();
});

// Initialize
updateNarrativeUI();