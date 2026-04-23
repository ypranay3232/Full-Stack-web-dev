# Digital Agency Landing Page

A modern, highly interactive, and responsive landing page for a digital agency. Built with React, Vite, Tailwind CSS v4, and Framer Motion. 

This project demonstrates how to create a sleek and engaging user experience using dynamic scroll animations, a custom cursor, dark mode support, and seamless contact form integration.

## Features

- **Modern & Premium Design**: Built with Tailwind CSS v4 featuring sleek gradients, blur effects, and dark/light mode toggle.
- **Dynamic Animations**: Integrated with `framer-motion` for scroll-triggered reveal animations (`whileInView`), staggered lists, and interactive elements.
- **Custom Blend-Mode Cursor**: A smooth, interactive custom cursor that follows mouse movement with physics-based interpolation and visually adapts to the background using `mix-blend-mode: difference`.
- **Working Contact Form**: Integrated with Web3Forms to capture user submissions securely.
- **Responsive Layout**: Completely mobile-friendly across all device sizes.

## Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web3Forms](https://web3forms.com/)
- [React Hot Toast](https://react-hot-toast.com/)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd 1_Agency_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root of the project and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Structure

- `/src/components`: Contains all modular React components (Hero, Services, ContactUs, etc.).
- `/src/assets`: Stores all images and icons used in the project.
- `App.jsx`: Main application component acting as the entry point for layout and routing.
