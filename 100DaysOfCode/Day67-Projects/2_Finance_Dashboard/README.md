# Finance Dashboard 📈

A modern, responsive, and fully functional Finance Dashboard built with React and Tailwind CSS. This project features a clean user interface with interactive charts, dynamic routing, and seamless Light/Dark mode toggling.

## 🚀 Features

- **Interactive Analytics**: Beautiful, responsive charts for sales dynamics, user activity, and subscriptions.
- **Dynamic Theming**: Full support for both Light and Dark modes with smooth transitions.
- **Client-Side Routing**: Fast and seamless navigation between pages (Analytics, Products, Messages, Customers).
- **Responsive Design**: Optimized for various screen sizes, ensuring a great experience on desktops and tablets.
- **Modern UI Components**: Custom-styled stat cards, progress rings, and data tables.

## 🛠️ Tech Stack & Libraries

This project leverages modern web technologies to deliver a fast and maintainable application:

### Core Tech Stack
- **[React 19](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development and optimized builds.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development and styling.

### UI & Functionality Libraries
- **[Recharts](https://recharts.org/)**: A composable charting library built on React components. Used to render the Sales Bar Chart, User Activity Line Chart, and Donut Pie Charts.
- **[Lucide React](https://lucide.dev/)**: Beautiful and consistent icon toolkit used throughout the dashboard (Sidebar, Header, Stat Cards).
- **[React Router DOM](https://reactrouter.com/)**: Standard routing library for React, handling client-side navigation between different dashboard views.

## 🎨 UI & Design Highlights

- **Color Palette**: Carefully selected colors to differentiate metrics (Green for Orders, Blue for Approved, Orange for Month total, Purple for Revenue).
- **Dark Mode**: Configured using Tailwind's custom variant (`@custom-variant dark`), utilizing deep grays and purples (`#1f2128`, `#13141a`) to reduce eye strain while maintaining contrast.
- **Layout**: A classic 2-column layout with a fixed sidebar and scrollable main content area.
- **Components**:
  - `StatCard`: Displays key metrics with dynamic background opacities and trend indicators.
  - `StatPieCard` & `SalesChart`: Utilizes Recharts with custom tooltips and responsive containers.
  - `CustomerOrder`: A clean, formatted table for displaying recent transactions.

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/finance-dashboard.git
   cd finance-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── Components/
│   ├── CustomerOrder.jsx    # Table displaying recent orders
│   ├── FundsCard.jsx        # Mini cards for paid invoices/funds
│   ├── Header.jsx           # Top navigation with theme toggle & date picker
│   ├── SalesChart.jsx       # Recharts Bar Chart
│   ├── SideBar.jsx          # Left navigation menu
│   ├── StatCard.jsx         # Metric summary cards
│   ├── StatPieCard.jsx      # Recharts Donut/Pie Charts
│   └── UserActivity.jsx     # Recharts Line Chart
├── App.jsx                  # Main layout and route configuration
├── index.css                # Global styles and Tailwind configuration
└── main.jsx                 # Application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/finance-dashboard/issues).

---
*Built as part of the 100 Days of Code challenge.*
