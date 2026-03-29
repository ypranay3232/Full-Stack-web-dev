// clear the joke history 
let jokeHistory = [];

function goToStep(num) {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.add('hidden');
    document.getElementById(`step-${num}`).classList.remove('hidden');
}

function happyExit() {
    document.querySelector('.container').innerHTML = "<h1>Perfect.</h1><p>Continuing peak performance. Have a great day.</p>";
}

async function fetchJoke(feedback = "") {
    const lang = document.getElementById('lang-select').value;
    const display = document.getElementById('joke-display');
    const loader = document.getElementById('loading');

    goToStep(3);
    display.innerText = "";
    loader.classList.remove('hidden');

    let prompt = `Tell an extremely hilarious, laugh-out-loud joke in ${lang}. It must be very short, 1-3 lines maximum. No extra conversational text!`;
    if (feedback === 'bad') {
        prompt = `The user didn't laugh at the last joke. Please tell a much better, completely different style of joke in ${lang}. Make it incredibly funny, and keep it extremely short, 1-3 lines maximum! No extra text.`;
    } else if (feedback === 'good') {
        prompt = `The user loved that joke! Tell another extremely hilarious joke in ${lang} in a similar style. Keep it very short, 1-3 lines maximum! No extra text.`;
    }

    try {
        // Using Google Gemini API 
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();

        // Check if the API returned an error (e.g., invalid key, quota exceeded)
        if (!response.ok) {
            console.error("API Error Response:", data);
            throw new Error(data.error?.message || "Failed to generate content");
        }

        const joke = data.candidates[0].content.parts[0].text;

        loader.classList.add('hidden');
        display.innerText = joke;
    } catch (error) {
        loader.classList.add('hidden');
        display.innerText = "Error connecting to Humor Neural Link. Please check your API key.";
        console.error("Fetch Error:", error);
    }
}

function refineJoke(rating) {
    if (rating === 'good') {
        alert("I'm glad you liked it!");
    }
    fetchJoke(rating);
}