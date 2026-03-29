// Select DOM elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchType = document.getElementById("searchType");
const recipeGrid = document.getElementById("recipeGrid");
const loader = document.getElementById("loader");
const messageBox = document.getElementById("messageBox");

// TheMealDB API search endpoint
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Fetch recipes from the API
async function fetchRecipes(query) {
    // Show loader, clear previous results & messages
    recipeGrid.innerHTML = "";
    messageBox.classList.add("hidden");
    loader.classList.remove("hidden");

    // Choose the API endpoint based on the search type
    let url = "";
    if (searchType.value === "name") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
    } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Hide loader once data arrives
        loader.classList.add("hidden");

        // Validate API response
        if (data.meals === null) {
            showMessage(`No recipes found for "${query}". Try another term!`);
            return;
        }

        let sortedMeals = data.meals;

        // Smart sorting algorithm to fix the API's lack of relevance filtering so we push meals that naturally have the ingredient in their title (e.g., "Eggs Benedict") 
        // to the top over meals that just happen to use it secretly (e.g., "Pancakes").
        if (searchType.value === "ingredient") {
            sortedMeals.sort((a, b) => {
                const aHasQuery = a.strMeal.toLowerCase().includes(query.toLowerCase());
                const bHasQuery = b.strMeal.toLowerCase().includes(query.toLowerCase());
                
                // Return -1 to push to the top, 1 to drop down, 0 if equal
                if (aHasQuery && !bHasQuery) return -1;
                if (!aHasQuery && bHasQuery) return 1;
                return 0;
            });
        }

        // Render recipe cards
        displayRecipes(sortedMeals);
    } catch (error) {
        loader.classList.add("hidden");
        showMessage("An error occurred while fetching recipes. Please check your connection.");
        console.error("Fetch Error:", error);
    }
}

// Render dynamic recipe cards into the grid
function displayRecipes(meals) {
    meals.forEach(meal => {
        // Create a new card div
        const card = document.createElement("div");
        card.className = "recipe-card";

        // Handle missing data (ingredient search only returns basic info)
        const areaCategory = meal.strArea && meal.strCategory 
            ? `<p>📍 ${meal.strArea} &nbsp;|&nbsp; 🥘 ${meal.strCategory}</p>` 
            : `<p>🥘 Delicious Meal</p>`;

        // If no source/youtube link is available (like in ingredient search), link directly to the recipe on TheMealDB
        let recipeUrl = meal.strSource || meal.strYoutube;
        if (!recipeUrl && meal.idMeal) {
            recipeUrl = `https://www.themealdb.com/meal.php?c=${meal.idMeal}`;
        } else if (!recipeUrl) {
            recipeUrl = `https://www.google.com/search?q=${encodeURIComponent(meal.strMeal + " recipe")}`;
        }

        // Insert inner HTML for the meal
        card.innerHTML = `
            <img class="recipe-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="recipe-info">
                <h3>${meal.strMeal}</h3>
                ${areaCategory}
                <a href="${recipeUrl}" target="_blank" class="view-btn">View Recipe</a>
            </div>
        `;
        
        // add card to grid
        recipeGrid.appendChild(card);
    });
}

// Display error or empty state messages
function showMessage(text) {
    messageBox.innerText = text;
    messageBox.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
        fetchRecipes(query);
    } else {
        showMessage("Please enter a meal to search!");
    }
});

// Allow hitting "Enter" in the input field
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

// Load default recipes on startup
window.addEventListener("DOMContentLoaded", () => {
    fetchRecipes("chicken"); // Fetches some default recipes
});
