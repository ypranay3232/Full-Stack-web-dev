// Select the elements 
const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const results = document.querySelector(".results");
const profile = document.querySelector(".profile");

const cache = {};

// loading animation when searching for a profile
function showLoader(container) {
    container.innerHTML = '<div class="spinner"></div>';
}

function showError(container, message) {
    container.innerHTML = `<div class="error-ui">${message}</div>`;
}

// Search for users if : there is no query then clear the webpage with empty content  
async function searchUsers(query) {
    if (!query.trim()) {
        results.innerHTML = "";
        return;
    }

    // display results
    showLoader(results);

    try {
        const res = await fetch(`https://api.github.com/search/users?q=${query}`);

        // if response is not okay throw error
        if (!res.ok) {
            showError(results, "Error fetching users. API limit might be exceeded.");
            return;
        }
        // parse the api
        const data = await res.json();

        if (data.items.length === 0) {
            showError(results, "No users found.");
            return;
        }

        displayUsers(data.items);

    } catch (err) {
        console.error(err);
        showError(results, "Something went wrong.");
    }
}

// Display users list : we slice them up to 5
function displayUsers(users) {
    results.innerHTML = "";

    users.slice(0, 5).forEach(user => {
        const div = document.createElement("div");
        div.classList.add("user");

        div.innerHTML = `
            <img src="${user.avatar_url}" width="50">
            <span>${user.login}</span>
        `;

        // click event which fetch the profiles
        div.addEventListener("click", () => {
            getUserProfile(user.login);
        });

        results.appendChild(div);
    });
}

// Fetching profile
async function getUserProfile(username) {
    // first Check the cache 
    if (cache[username]) {
        displayProfile(cache[username].user, cache[username].repos);
        return;
    }

    showLoader(profile);

    try {
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
        ]);

        if (!userRes.ok) {
            showError(profile, "User not found");
            return;
        }

        const userData = await userRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];

        // Save to cache
        cache[username] = { user: userData, repos: reposData };

        displayProfile(userData, reposData);

    } catch (err) {
        console.error(err);
        showError(profile, "Error loading profile");
    }
}


function displayProfile(user, repos) {
    let reposHtml = '<div class="repos-list"><h3>Latest Repositories</h3>';
    if (repos && repos.length > 0) {
        reposHtml += repos.map(repo => 
            `<a href="${repo.html_url}" target="_blank" class="repo-item">${repo.name}</a>`
        ).join("");
    } else {
        reposHtml += '<p>No public repositories found.</p>';
    }
    reposHtml += '</div>';

    profile.innerHTML = `
        <img src="${user.avatar_url}" width="100">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || "No bio available"}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Repos: ${user.public_repos}</p>
        <a class="github-link" href="${user.html_url}" target="_blank">View GitHub</a>
        ${reposHtml}
    `;
}


let debounceTimer;
input.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchUsers(e.target.value);
    }, 500); // 500ms debounce
});

btn.addEventListener("click", () => {
    clearTimeout(debounceTimer);
    searchUsers(input.value);
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        clearTimeout(debounceTimer);
        searchUsers(input.value);
    }
});