// Select the HTML elements
const contentDisplay = document.getElementById('page-content');
const paginationList = document.getElementById('pagination');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// total number of items in data 
const totalItems = 20;

// how many items should be displayed on a single page (e.g., 10 items per page)
const itemsPerPage = 5;

// Calculate the total number of pages by dividing total items by items per page.
const totalPages = Math.ceil(totalItems / itemsPerPage);

// a variable to keep track of the currently active page
let currentPage = 1;

// maximum number of page buttons 
const maxVisibleButtons = 5;

function updateContent() {
    // Calculate the index of the very first item that belongs on the current page
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    
    // Calculate the index of the last item on the page
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    // Updating the text of the main heading to show which items are active
    contentDisplay.innerText = `Displaying items ${startItem} to ${endItem}`;
    contentDisplay.style.animation = 'none';
    void contentDisplay.offsetWidth;
    contentDisplay.style.animation = 'fadeIn 0.5s ease forwards';
}

function renderPagination() {
    paginationList.innerHTML = '';
    
    // Determine the first page number to show
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    
    // Determine the last page number
    let endPage = startPage + maxVisibleButtons - 1;
    
    // Check if the calculated end page goes beyond the actual total number of pages
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }
    
    // Start a loop that goes from the calculated startPage all the way to the endPage
    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerText = i;
        if (i === currentPage) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            currentPage = i;
            updateDOM();
        });
        paginationList.appendChild(li);
    }
    
    // If we're on the very first page, disable the "Previous" arrow button
    prevBtn.disabled = currentPage === 1;
    
    // If we're on the very last page, disable the "Next" arrow button
    nextBtn.disabled = currentPage === totalPages;
}

function updateDOM() {
    updateContent();
    renderPagination();
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateDOM();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateDOM();
    }
});

updateDOM();

const style = document.createElement('style');

style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

document.head.appendChild(style);
