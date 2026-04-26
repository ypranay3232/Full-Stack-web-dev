# Multi-Step Form Project (Day 67)

This project is a React-based multi-step form implementation. It demonstrates how to handle a complex form by breaking it into multiple progressive steps (Personal Info, Address Info, Billing Info) while maintaining a single, unified form state under the hood.

## Architecture

```text
USER ---> 3 stages
  ├── Personal Info  
  ├── Address Info
  └── Billing Info
         │
         ▼
[React Hook Form] --> Validation via [Zod] --> Evaluated against [Custom Hook]
         │
         ▼
Data Stored ---> Next step/Submit button --> Go to component, check progress. 
If we are on the last step, show the success/submitted screen.
```

**Key Concept:** Even though the user sees the form in multiple pieces, when submitted, a single payload containing all the information is generated. This is a very common interview question pattern.

## Tech Stack
- **React (Vite + TypeScript)**
- **Tailwind CSS V4**
- **Shadcn UI** (Component library for UI)
- **React Hook Form** (Form state management)
- **Zod** (Schema validation)

## Installation & Setup Guide

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Tailwind CSS & Shadcn Setup:**
   The project uses `@tailwindcss/vite` and Shadcn UI.
   ```bash
   npm install tailwindcss @tailwindcss/vite
   npx shadcn@latest init
   ```
   Add the following alias config to `vite.config.ts`, `tsconfig.json`, and `tsconfig.app.json` for Shadcn path resolution:
   ```json
   "compilerOptions": {
     "baseUrl": ".",
     "paths": {
       "@/*": ["./src/*"]
     }
   }
   ```

3. **Required Shadcn Components:**
   ```bash
   npx shadcn@latest add card button input label
   ```

4. **Form Management & Validation:**
   ```bash
   npm install react-hook-form zod @hookform/resolvers
   ```

## Development Workflow

1. Define the validation schemas for each step using `zod` in `src/lib/types.ts`.
2. Generate TypeScript types by inferring from the Zod schemas (`z.infer<typeof schema>`).
3. Build a Custom Hook (`src/Hooks/use-multistep-form.tsx`) to handle the step progression, tracking `currentStepIndex`, `isFirstStep`, and `isLastStep`.
4. Create the main `MultiStepForm` component that renders different fields conditionally based on the current step.
5. Use `react-hook-form`'s `trigger()` to validate only the current step's fields before allowing progression to the next step.
