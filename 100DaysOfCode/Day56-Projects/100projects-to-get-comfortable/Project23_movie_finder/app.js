const BASE_URL = "https://www.omdbapi.com/";

// Select the elements (search input, search btn, container --> top 5 List, recommendations  container --> recommendations List)
const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const contentSection = document.getElementById("contentSection");
const topMatchContainer = document.getElementById("topMatchContainer");
const recContainer = document.getElementById("recContainer");
const recommendationsList = document.getElementById("recommendations");
const movieModal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");

// function to search movies which takes query
async function searchMovies(query) {
    // return nothing if there is no query even after removing whitespaces.
    if (!query.trim()) return

    // animation/loading part : When you search for a movie we add Top matches : Finding exact and similar movies...  so change the body of html to that loading/processing 
    recommendationsList.innerHTML = "";

    // add a class then hide its content 
    document.body.classList.add("search-active")
    contentSection.classList.remove("hidden")
    // get top matches 
    topMatchContainer.innerHTML = "<p style='grid-column: 1/-1;'> Finding exact and similar movies...</p>"
    // hide the recommendations 
    recContainer.classList.remove("hidden")

    try {
        // fetch the api 
        const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${OMDB_API_KEY}`)

        // parse the api 
        const data = await response.json()

        if (data.Response === "False" || !data.Search || data.Search.length === 0) {
            topMatchContainer.innerHTML = `<p style='grid-column: 1 / -1;'>No movies found for "${query}".</p>`;
            return;
        }

        // top 5 results
        const top5Results = data.Search.slice(0, 5)

        // OMDB endpoint does not return description about the movies so we fetch desc for each movie
        const detailedMoviesPromises = top5Results.map(movie =>
            fetch(`${BASE_URL}?i=${movie.imdbID}&plot=short&apikey=${OMDB_API_KEY}`).then(r => r.json())
        );
        const detailedMovies = await Promise.all(detailedMoviesPromises);

        // 1. Display Top Match
        const exactMatch = [detailedMovies[0]];
        displayMovies(exactMatch, topMatchContainer);

        // 2. Display Similar Titles (the rest of the search results)
        if (detailedMovies.length > 1) {
            recContainer.classList.remove("hidden");
            const similarTitles = detailedMovies.slice(1);
            displayMovies(similarTitles, recommendationsList);
        } else {
            recContainer.classList.add("hidden");
        }

    } catch (err) {
        console.error(err);
        topMatchContainer.innerHTML = "<p style='grid-column: 1 / -1; color: red;'>Error fetching data. Check your connection.</p>";
    }
}

// --- RENDER MOVIES ---
function displayMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {
        // filter Only show movies with valid posters
        const posterSrc = movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/500x750/2a2c33/ffffff?text=No+Poster";

        const year = movie.Year ? movie.Year : "N/A";

        // Using the plot for description
        const desc = movie.Plot && movie.Plot !== "N/A" ? movie.Plot : "No description available.";

        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${posterSrc}" alt="${movie.Title}" class="movie-poster" loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title" title="${movie.Title.replace(/"/g, '&quot;')}">${movie.Title}</h3>
                <span class="movie-year">${year}</span>
                <p class="movie-desc" title="${desc.replace(/"/g, '&quot;')}">${desc}</p>
            </div>
        `;

        // Click to view full details
        card.addEventListener("click", () => {
             showMovieDetails(movie);
        });

        container.appendChild(card);
    });
}

//  Fetch movie details
async function showMovieDetails(movie) {
    movieModal.classList.remove("hidden");
    modalBody.innerHTML = "<p>Loading full details...</p>";

    try {
        const res = await fetch(`${BASE_URL}?i=${movie.imdbID}&plot=full&apikey=${OMDB_API_KEY}`);
        const fullMovie = await res.json();
        
        const posterSrc = fullMovie.Poster && fullMovie.Poster !== "N/A" 
            ? fullMovie.Poster 
            : "https://via.placeholder.com/500x750/2a2c33/ffffff?text=No+Poster";

        modalBody.innerHTML = `
            <img src="${posterSrc}" alt="${fullMovie.Title}">
            <h2>${fullMovie.Title} (${fullMovie.Year})</h2>
            <p><strong>Genre:</strong> ${fullMovie.Genre}</p>
            <p><strong>Actors:</strong> ${fullMovie.Actors}</p>
            <p><strong>IMDB Rating:</strong> ${fullMovie.imdbRating}</p>
            <p><strong>Plot:</strong> ${fullMovie.Plot}</p>
        `;
    } catch (err) {
        modalBody.innerHTML = "<p style='color:red;'>Failed to load details.</p>";
    }
}

btn.addEventListener("click", () => {
    searchMovies(input.value);
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        searchMovies(input.value);
    }
});

closeModal.addEventListener("click", () => {
    movieModal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === movieModal) {
        movieModal.classList.add("hidden");
    }
});