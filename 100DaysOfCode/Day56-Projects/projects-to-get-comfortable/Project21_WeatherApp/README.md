# 🌦️ Weather App

A clean, minimal weather app that fetches real-time weather data for any city using the [OpenWeatherMap API](https://openweathermap.org/). Built with vanilla HTML, CSS, and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature, humidity, and wind speed
- 🎨 Dynamic weather icons based on current conditions
- ⌨️ Press **Enter** or click the search button to search
- 📱 Responsive design

---

## 📁 Project Structure

```
Project21_WeatherApp/
├── img/                  # Weather icon images
├── index.html            # Main HTML page
├── styles.css            # Stylesheet
├── app.js                # App logic (fetches weather data)
├── config.js             # 🔒 Your API key (gitignored)
├── config.example.js     # Template for config.js
├── .gitignore            # Ignores config.js
└── README.md             # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A free API key from [OpenWeatherMap](https://openweathermap.org/)

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd Project21_WeatherApp
```

### Step 2 — Get Your API Key

1. Go to [openweathermap.org](https://openweathermap.org/) and **sign up** for a free account.
2. After signing in, go to [API Keys](https://home.openweathermap.org/api_keys).
3. Copy your API key.

> **Note:** New API keys can take up to **2 hours** to activate. If you get errors right away, just wait a bit and try again.

### Step 3 — Set Up Your Config

1. In the project folder, find the file `config.example.js`.
2. **Copy** it and rename the copy to `config.js`.
3. Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
// config.js
const APIKEY = "paste_your_api_key_here";
```
### Step 4 — Open the App

Simply open `index.html` in your browser. That's it — no build tools or servers needed!

You can also use **Live Server** in VS Code:
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Right-click `index.html` → **Open with Live Server**.

---

## 🎯 How to Use

1. Type a **city name** in the search box (e.g., `London`, `Tokyo`, `New York`).
2. Press **Enter** or click the 🔍 button.
3. View the current temperature, humidity, and wind speed!

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling and layout |
| **JavaScript** | API calls and DOM manipulation |
| **OpenWeatherMap API** | Real-time weather data |
| **Font Awesome** | Search icon |
---

## 📝 License

This project is open source and available for learning purposes.

---

> Made with ❤️ as part of [#100DaysOfCode]
