# Travel Website Project

A visually stunning, multi-page travel website featuring advanced scroll animations, page transitions, and a custom cursor. Built with modern JavaScript libraries to provide an immersive user experience.

## ✨ Features

- **Smooth Scroll Animations**: Content reveals dynamically as you scroll down the page.
- **Page Transitions**: Seamless transitions between the Home and Fashion pages using Barba.js.
- **Interactive Custom Cursor**: A custom mouse cursor that reacts to hover states on links and buttons.
- **Responsive Navigation**: stylish full-screen navigation menu with animated toggle.
- **Parallax Effects**: Subtle parallax scrolling on images.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**:  Modern styling with Flexbox and custom properties.
- **JavaScript (ES6+)**: Core logic and interaction.
- **[GSAP](https://greensock.com/gsap/)**: High-performance animations (Timelines, Tweens).
- **[ScrollMagic](http://scrollmagic.io/)**: Scroll interaction control.
- **[Barba.js](https://barba.js.org/)**: Smooth page transitions (SPA-like experience).

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository** (or download the source code).
2.  **Open the project folder**.
3.  **Launch the application**:
    *   Since this project uses Barba.js (which fetches pages via AJAX), you **must** run it on a local server. Opening `index.html` directly in the browser will result in CORS errors.
    *   **Using VS Code with Live Server**: Right-click `index.html` and select "Open with Live Server".
    *   **Using Python**: Run `python -m http.server` in the terminal and visit `localhost:8000`.

## 📂 Project Structure

```
12_Project_website/
├── index.html          # Main landing page
├── styles.css          # Main stylesheet
├── app.js              # Core JavaScript logic
├── notes.md            # Detailed project notes
├── README.md           # Project documentation
├── img/                # Image assets
└── fashion/            # Sub-page directory
    └── index.html      # Fashion page HTML
```

## 🎮 Usage

- **Scroll**: Scroll down to see the reveal animations for each section (Mountain, Hike, Fashion).
- **Explore**: Click the "Explore" button on the Fashion slide to transition seamlessly to the Fashion page.
- **Menu**: Click the burger icon in the top right to open the full-screen navigation.
- **Hover**: Move your mouse over the logo, menu, or buttons to see the custom cursor effects.

## 📝 Design & Inspiration

This project focuses on "micro-interactions" and "reveal animations" to make a static website feel alive. The dark mode aesthetic combined with vibrant accent colors creates a premium feel.

---

