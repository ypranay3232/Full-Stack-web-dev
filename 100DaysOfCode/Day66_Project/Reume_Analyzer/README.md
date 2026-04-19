# Serverless AI Resume Analyzer

A serverless application designed to analyze resumes, provide ATS (Applicant Tracking System) scores, and suggest matching Job Descriptions (JDs). 

> **Status:** 🚧 Work in Progress (UI Phase completed)
> 
> *Note: This project was originally intended to be a complete full-stack application leveraging `puter.js` for built-in auth, storage, AI integration, and database features without backend hassle. Currently, only the **User Interface (UI)** portion of the application has been built and implemented.*

## 🚀 Features (Planned & Current)
- **Current:** 
  - Dynamic Homepage UI with dummy generated resume templates.
  - Interactive UI components (Navbar, Resume Cards).
  - Modern, responsive design using Tailwind CSS.
- **Planned:**
  - AI integration for ATS scoring and JD matching.
  - Authentication and Cloud Storage via `puter.js`.
  - PDF Uploading and Parsing (using `pdfjs-dist` & Dropzone).

## 🛠️ Tech Stack
- **Frontend Framework:** [React Router v7](https://reactrouter.com/)
- **UI Library:** React 19
- **Styling:** Tailwind CSS, `tw-animate-css`, `clsx`, `tailwind-merge`
- **State Management:** Zustand
- **Language:** TypeScript

## 📁 Project Structure highlights
- `app/components/`: Contains UI components like `navbar.tsx`, `resumecard.tsx`.
- `app/routes/`: Contains routing pages like the main `home.tsx`.
- `Constants/`: Contains demo data and UI structuring constants.

## ⚙️ How to Run Locally

1. **Clone the repository / Navigate to the folder:**
   ```bash
   cd Day66_Project/Reume_Analyzer
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

## 📝 Learnings & Notes from Day 66
This day focused on migrating UI concepts into React Router v7, setting up project scaffolding (Vite + React Router), optimizing tailwind integration, and creating a layout architecture to be consumed by ai-backend APIs later.
