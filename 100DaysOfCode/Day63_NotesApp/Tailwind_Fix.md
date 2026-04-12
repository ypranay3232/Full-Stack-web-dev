# Tailwind CSS v4 IntelliSense Fix

A quick guide to fixing the Tailwind CSS IntelliSense / autocomplete issue when working with Tailwind v4 in a Vite project.

##  Prerequisites

Ensure you have the following installed and set up:
- A Vite project (React, Vue, Vanilla, etc.).
- The official [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) installed in VS Code.

## Step-by-Step Guide

### Step 1: Install and Configure Tailwind
Install Tailwind CSS and set it up according to the v4 documentation. Ensure you have imported Tailwind properly in your main CSS file (e.g., `src/index.css`):

```css
/* src/index.css */
@import "tailwindcss";
```

### Step 2: Update VS Code Settings (The Fix)
The key to making IntelliSense work with Tailwind v4 is to explicitly point the extension to your CSS file, as v4 relies less on a traditional `tailwind.config.js` file.

1. Open your VS Code Settings (`Ctrl + ,` or `Cmd + ,` on Mac).
2. Search for: `Tailwind`.
3. Look for the setting: **`Tailwind CSS › Experimental: Class Regex`** (or just open your `settings.json` file directly).
4. Add the following line to your `settings.json` configuration to point directly to your main CSS file:

```json
{
  "tailwindCSS.experimental.configFile": "Your_Root_Directory/src/index.css"
}
```

*(Note: Replace `"src/index.css"` with the relative path to your main CSS file if it is located elsewhere).*

## Verification
Save the `settings.json` file. You may need to reload your VS Code window (`Ctrl/Cmd + Shift + P` -> **Developer: Reload Window**). 

After reloading, your Tailwind CSS classes should now autocomplete perfectly!
