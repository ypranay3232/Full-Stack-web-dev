# NPM and Modules Revision

> **Note**: `npm` is a package manager which helps to install the packages of Node.js. `npm` stands for Node Package Manager. The Node.js default packages are called "modules" and the packages we install with `npm` are called "packages".

> `npm uninstall <packagename>`: By doing that we remove that package from `node_modules` --> it contains the code of each package.

### Why do we use `npm start`, `npm run dev`?
When we install npm, commands like `start` and `test` are added in the OS table as commands. So when we execute `start`/`test`, Windows searches for these and executes the operation; if not found, Windows throws an error.

If we run something like: `npm demo` --> this won't work because there is no such thing as `npm demo`. We have to add `run` in front of the custom scripts which we create (`npm run demo` --> this works).

**Example:**
1. Go to `package.json`.
2. Inside `scripts`, create a new script named `"demo": "something"`.
3. Go to the terminal:
   - `npm demo` --> This prints an error.
   - `npm run demo` --> This prints something!

---

## 1. What is NPM?
NPM stands for **Node Package Manager**.
It is the default package manager that comes bundled with Node.js.

**Used to:**
- Install external libraries
- Manage dependencies
- Run scripts

👉 **Think of NPM as:**
> “A dependency + script management system for Node.js projects”

---

## 2. Modules vs Packages

### 🔹 Modules
Built-in functionality provided by Node.js.
*No installation required.*

**Examples:**
- `fs` (file system)
- `http`
- `path`

👉 These are called **core modules**.

### 🔹 Packages
External libraries installed using NPM.
*Stored inside the `node_modules` folder.*

**Example:**
```bash
npm install express
```
Here, `express` is a package.

👉 **Key difference:**

| Type | Source | Install Required |
| --- | --- | --- |
| **Modules** | Node.js core | ❌ No |
| **Packages** | NPM registry | ✅ Yes |

---

## 3. `node_modules` Folder
Automatically created when you install packages.
Contains:
- Source code of installed packages
- Nested dependencies

👉 **Important:**
- This folder can get very large.
- **Never push it to Git** (always use `.gitignore`).

---

## 4. Installing & Removing Packages

**Install a package:**
```bash
npm install <package-name>
```

**Uninstall a package:**
```bash
npm uninstall <package-name>
```

👉 **What happens on uninstall:**
Removes package from:
- `node_modules`
- `package.json`
- `package-lock.json`

---

## 5. `package.json` — The Brain of Your Project
This file contains:
- Project metadata
- Dependencies
- Scripts

**Example:**
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "demo": "echo Hello World"
  }
}
```

---

## 6. NPM Scripts (VERY IMPORTANT)
Scripts are custom commands defined inside `package.json`.

### 🔹 Why we use `npm start`, `npm run dev`, etc.
NPM provides special handling for certain script names:

| Script Name | Command | Needs `run`? |
| --- | --- | --- |
| `start` | `npm start` | ❌ No |
| `test` | `npm test` | ❌ No |
| others | `npm run <name>` | ✅ Yes |

### 🔹 Why does `npm start` work without `run`?
`start` and `test` are reserved/default script names.
NPM directly maps them internally.

👉 **So:**
- `npm start`   ✅ works
- `npm test`    ✅ works

### 🔹 Why does `npm demo` fail?
`npm demo` ❌ **ERROR**
Because:
- `demo` is not a default script.
- NPM doesn’t recognize it directly.

### 🔹 Correct way
`npm run demo` ✅ works

👉 **Rule:**
> Always use `npm run <script-name>` for custom scripts.

---

## 7. How Scripts Actually Work
When you run:
```bash
npm run demo
```
NPM:
1. Looks inside `package.json`
2. Finds: `"demo": "echo Hello World"`
3. Executes the command in your system shell.

---

## 8. Example Walkthrough

**Step 1: Add script**
```json
"scripts": {
  "demo": "echo Hello from script"
}
```

**Step 2: Run command**

❌ This fails:
```bash
npm demo
```

✅ This works:
```bash
npm run demo
```

**Output:**
```
Hello from script
```

---

## 9. Real-World Scripts You’ll Use
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "build": "webpack",
  "test": "jest"
}
```

**Usage:**
```bash
npm start        # production run
npm run dev      # development mode
npm run build    # build project
npm test         # run tests
```