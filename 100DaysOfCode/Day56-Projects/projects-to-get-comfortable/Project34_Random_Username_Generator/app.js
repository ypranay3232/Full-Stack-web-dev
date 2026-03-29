const usernameDisplay = document.getElementById('username-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const includeNumbers = document.getElementById('include-numbers');
const includeSpecial = document.getElementById('include-special');
const toast = document.getElementById('toast');

const specialChars = ["_", "-", ".", "!", "@"];

// Helper: Get random item
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// API Fetches and gets a random word
async function fetchWord() {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
        const data = await response.json();
        const word = data[0];
        return word.charAt(0).toUpperCase() + word.slice(1);
    } catch (error) {
        // Fallback words if API fails
        const fallbacks = ["Cosmic", "Voyager", "Phantom", "Ninja", "Cyber"];
        return getRandomItem(fallbacks);
    }
}

async function generateUsername() {
    usernameDisplay.textContent = "Generating...";
    generateBtn.disabled = true;

    // Fetch two words in parallel
    const [word1, word2] = await Promise.all([fetchWord(), fetchWord()]);
    
    let username = `${word1}${word2}`;

    // Apply Special Characters
    if (includeSpecial.checked) {
        if (Math.random() > 0.5) {
            username = `${word1}${getRandomItem(specialChars)}${word2}`;
        } else {
            username += getRandomItem(specialChars);
        }
    }

    // Apply Numbers
    if (includeNumbers.checked) {
        const digits = Math.floor(Math.random() * 900) + 100; // Random 3-digit number
        if (includeSpecial.checked && !username.match(/[._\-!@]$/)) {
            username += getRandomItem(specialChars) + digits;
        } else {
            username += digits;
        }
    }

    // 30% chance to make it all lowercase
    if (Math.random() > 0.7) username = username.toLowerCase();

    // UI Update with animation
    usernameDisplay.style.opacity = '0';
    setTimeout(() => {
        usernameDisplay.textContent = username;
        usernameDisplay.style.opacity = '1';
        generateBtn.disabled = false;
    }, 150);
}

function copyToClipboard() {
    const text = usernameDisplay.textContent;
    if (text === "Click generate to start" || text === "Generating...") return;
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast();
    });
}

function showToast() {
    toast.classList.add('show');
    const icon = copyBtn.querySelector('i');
    icon.className = 'ri-check-line';
    
    setTimeout(() => {
        toast.classList.remove('show');
        icon.className = 'ri-file-copy-line';
    }, 2000);
}

generateBtn.addEventListener('click', generateUsername);
copyBtn.addEventListener('click', copyToClipboard);

generateUsername();