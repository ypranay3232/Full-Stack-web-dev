// select the elements 
const searchInput = document.getElementById('autocomplete-input');
const ghostInput = document.getElementById('ghost-input');
let debounceTimer;

// fetch the results from dictionary api
async function fetchSuggestions(query) {
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${query}&max=5`);
        const data = await response.json();
        return data.map(item => item.word);
    } catch (error) {
        return [];
    }
}
// trigger event from input search 
searchInput.addEventListener('input', function() {
    const val = this.value; 
    ghostInput.value = '';
    clearTimeout(debounceTimer);
    
    if (!val.trim()) return;//trim the whitespaces

    debounceTimer = setTimeout(async () => {
        const data = await fetchSuggestions(val.trim());
        const match = data.find(w => w.toLowerCase().startsWith(val.toLowerCase()));

        if (searchInput.value === val && match) {
            ghostInput.value = val + match.slice(val.length);
        }
    }, 150);
});

// Tab key for auto completion
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && ghostInput.value) {
        e.preventDefault();
        this.value = ghostInput.value;
        ghostInput.value = '';
    }
});