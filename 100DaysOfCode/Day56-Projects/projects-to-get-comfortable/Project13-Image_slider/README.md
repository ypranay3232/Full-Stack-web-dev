# Death Note: The Narrative Story Experience 📓🍎

**Live Demo: [deathnote-narrative-slider.netlify.app](https://deathnote-narrative-slider.netlify.app/)**

[![Build Status](https://img.shields.io/badge/UX-Premium-8B0000)](https://github.com/ypranay3232/Full-Stack-web-dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-end, cinematic web experience that transforms a standard image slider into a 24-chapter interactive narrative. Built with pure **HTML, CSS, and Vanilla JavaScript**, this project demonstrates how advanced CSS techniques and narrative-driven logic can create a "playable movie" feel.

---

## ✨ Cinematic Features

### 🎞️ Immersive Visuals
- **Film Grain & Texture Overlay**: A dynamic `.noise-overlay` provides a grit and "detective dossier" texture to every scene.
- **Cinematic Letterboxing**: Responsive "Letterbox" viewing ensuring 100% visibility of cinematic shots on all device ratios.
- **Micro-Animations**: Blur-to-focus transitions and slide-in typography for a high-end feel.

### 🗺️ Multi-Arc Navigation
- **Story Chapters**: 4 distinct Arcs (L's Beginning, Rivalry, Successors, The Final Trap).
- **Interactive Thumbnails**: Relocated to the bottom-left for a modern, dashboard-style UX.
- **Hover-Triggered Arc Bar**: The arc selector stays hidden to preserve immersion, revealing itself only when the user intends to skip chapters.

### 📊 Narrative Intelligence
- **Crimson Progress Bar**: A top-mounted indicator that tracks technical and narrative progress.
- **Boundary Constraints**: Non-looping logic—the story has a defined beginning and end, preventing "infinite loop fatigue."
- **Reset System**: Fully functional "Watch Again" mechanic at the story's conclusion.

---

## 🎨 UX & Design Philosophy

### The "Death Note" Aesthetic
- **Color Palette**: Deep blacks (`#050505`), atmospheric greys, and a signature "Shinagami Red" (`#8B0000`) for accents.
- **Typography**: A balanced mix of **Pirata One** (Gothic/Thematic) and **Spectral** (Serif/Readable). Titles feature custom `letter-spacing` to ensure complex words like "Shinigami" remain clear.
- **Spatial Awareness**: The active story content is raised to `42%` height, creating a massive safety buffer above the interactive navigation elements.

### Mobile-First Refinement
Unlike many sliders that crop faces on mobile, this project uses **Letterbox Logic**. On small screens, images scale to fit the entire viewport without losing critical narrative details (like character heads or wide cinematic shots).

---

## 🛠️ Tech Stack
- **Structure**: Semantic HTML5
- **Style**: Standard CSS3 (Custom Variables, Media Queries & Animations)
- **Logic**: Vanilla JavaScript (ES6+)
- **Assets**: Google Fonts & Font Awesome

---

## 🚀 Getting Started
1. Clone the repository.
2. Open `index.html` in any modern browser.
3. Hover over the bottom area to reveal the Arc Navigation.
4. Embark on the 24-slide journey of Kira.

---

## 📄 Documentation
For a deep dive into the code and a step-by-step building guide, check out our [Development Documentation (dev-docs.md)](./dev-docs.md).

---

## ⚖️ Disclaimer & Copyright
This project is created for **educational and entertainment purposes only**. 

- **Images**: The images used in this project are property of their respective owners (Tsugumi Ohba / Takeshi Obata / Madhouse / etc.). We do not claim ownership of these assets.
- **Fair Use**: This project is built as a non-commercial portfolio piece to demonstrate UI/UX design and development skills.
- **Queries & Removal**: If you are a rights holder and have any concerns regarding the use of your images, please drop us a mail. We will address any queries or removal requests in a jiffy! 📬
