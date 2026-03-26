// get the elements
const newsList = document.querySelector(".newsList")

// logic : 
function getnews() {
  // default feed is set to india's latest news updated if not searched something
    const query = document.getElementById("search").value || "India"
    newsList.innerHTML = "Loading..."//clearing the feed

    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-IN&gl=IN&ceid=IN:en`

    // using rss2json proxy 
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

    // fetching the response
    fetch(proxyUrl)
    .then(res => res.json())
    .then(data =>{
        const items = data.items;

        if(!items || !items.length){
            newsList.innerHTML = "<p class='error'>no news found</p> "
            return
        }
         newsList.innerHTML = "";
      items.forEach((item, index) => {
        if (index >= 5) return;
        const title = item.title;
        const link = item.link;
        newsList.innerHTML += `
          <div class="news-card">
            <h4>${title}</h4>
            <a href="${link}" target="_blank">Read more</a>
          </div>
        `;
      });
    })
    .catch(() => {
      newsList.innerHTML = "<p class='error'>Error loading news</p>";
    });
}

getnews()