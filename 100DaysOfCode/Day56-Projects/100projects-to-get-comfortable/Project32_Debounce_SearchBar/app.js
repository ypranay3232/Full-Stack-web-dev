// select the elements 
const searchbox = document.getElementById("searchbox")
const results = document.getElementById("results")

// we keep a timer to keep track of each search 
let timer

// logic : 
async function debouncesearch(event) {
    const query = event.target.value.trim() //trim out the whitespaces and clear output screen

    // we clear previous search if user types another character
    clearTimeout(timer)

    // handle the input case 
    if (query == "") {
        results.innerHTML = ""
        return
    }

    // handling the case : we only trigger the timer if and only if user stops typing for atleast 500ms
    timer = setTimeout(async () => {
        results.innerHTML = "<li class='message-item'>Searching...</li>"

        // fetch the query
        try {
            const resp = await fetch(`https://api.github.com/search/users?q=${query}`)
            const data = await resp.json()

            results.innerHTML = ""//clearing the searching...  message

            // if no users found return message not found 
            if (!data.items || data.items.length === 0) {
                results.innerHTML = "<li class='message-item'>No users Found</li>"
                return
            }

            // we slice only top 5 results
            data.items.slice(0, 5).forEach(user => {
                const li = document.createElement("li")
                // Added user avatar and wrapped login name in span for richer UI
                li.innerHTML = `<img src="${user.avatar_url}" class="user-avatar" alt="avatar"> <span>${user.login}</span>`
                //  Open GitHub profile in a new tab when clicking the result
                li.onclick = () => window.open(user.html_url, '_blank')
                results.appendChild(li)
            });
        } catch (error) {
            results.innerHTML = "<li class='message-item'>Error Fetching data</li>"
            console.error(error)
        }
    }, 500);
}
searchbox.addEventListener("input", debouncesearch)