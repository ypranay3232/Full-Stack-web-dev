// Select DOM elements
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const imageGrid = document.getElementById("imageGrid");
const loader = document.getElementById("loader");
const messageBox = document.getElementById("messageBox");
const showMoreBtn = document.getElementById("showMoreBtn");

// Application State
let currentQuery = "";
let currentPage = 1;
let isFetching = false; // Lock to prevent rapid fire scroll fetches

// Fetch images from API
async function fetchImages(query, page) {
    if (isFetching) return;
    isFetching = true;
    
    messageBox.classList.add("hidden");

    try {
        loader.classList.remove("hidden");
        
        // Disable buttons temporarily to prevent rapid-fire clicking and rate limits
        showMoreBtn.classList.add("hidden");

        const offset = (page - 1) * 15;
        const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=15&gsroffset=${offset}&prop=pageimages|info&inprop=url&pithumbsize=600&format=json&origin=*`;
        
        const response = await fetch(url);
        
        // Handling API errors
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        loader.classList.add("hidden");

        // Validate API response (Wikipedia nests the results inside query.pages)
        if (!data.query || !data.query.pages) {
            if (page === 1) {
                showMessage(`No images found for "${query}". Try another search!`);
            } else {
                showMessage("You've reached the end of the results.");
            }
            return;
        }

        // Wikipedia returns an object of pages, so we must extract the array and filter out pages without photos
        const results = Object.values(data.query.pages).filter(p => p.thumbnail);

        if (results.length === 0) {
            if (page === 1) showMessage(`No images found for "${query}".`);
            return;
        }

        // Render images
        displayImages(results);

        // Standardize "Show More" functionality: If there is a 'continue' property from Wikipedia, we have more pages!
        if (data.continue) {
            showMoreBtn.classList.remove("hidden");
        }
    } catch (error) {
        loader.classList.add("hidden");
        showMessage(error.message.includes("Rate limit") ? error.message : "Connection failed. Check your Network!");
        console.error("Fetch Error:", error);
    } finally {
        isFetching = false;
    }
}

// Render dynamic image cards into the grid
function displayImages(images) {
    images.forEach(image => {
        // Create a new card wrapper
        const card = document.createElement("div");
        card.className = "image-card";

        // Extract required data safely from Wikipedia response
        const imgUrl = image.thumbnail.source;
        const imgAlt = image.title || "Wikipedia Photo";
        const photographer = image.title;
        const link = image.fullurl || `https://en.wikipedia.org/?curid=${image.pageid}`;

        // Insert inner HTML with slick hover overlay
        card.innerHTML = `
            <img src="${imgUrl}" alt="${imgAlt}">
            <div class="image-overlay">
                <p> ${photographer}</p>
                <a href="${link}" target="_blank">View</a>
            </div>
        `;

        // Append card to grid
        imageGrid.appendChild(card);
    });
}

// Display error 
function showMessage(text) {
    messageBox.innerText = text;
    messageBox.classList.remove("hidden");
}

// Search form submit listener
searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh

    const query = searchInput.value.trim();
    if (query !== "") {
        // Reset state for a fresh search
        currentQuery = query;
        currentPage = 1;
        imageGrid.innerHTML = "";

        fetchImages(currentQuery, currentPage);
    }
});

// Infinite Scrolling with Intersection Observer API
const scrollObserver = new IntersectionObserver((entries) => {
    // If the trigger div is about to enter the viewport, fire off the next fetch!
    if (entries[0].isIntersecting && currentQuery !== "" && !isFetching) {
        currentPage++;
        fetchImages(currentQuery, currentPage);
    }
}, { rootMargin: "400px" }); // Pre-fetch exactly 400px before the user even reaches the bottom

scrollObserver.observe(showMoreBtn);
