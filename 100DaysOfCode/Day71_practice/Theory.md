# Express.js Setup and Routing Notes

## Initial Setup

1. **Initialize Project:** Create a new project and initialize `package.json`.
   ```bash
   npm init -y
   ```
2. **Install Express:** Install the Express.js framework.
   ```bash
   npm install express
   ```
3. **Set Main File:** Ensure `package.json` has `"main": "index.js"`.
4. **Nodemon:** Install and run nodemon to automatically restart the server upon changes.
   ```bash
   npm i nodemon
   npx nodemon index.js
   ```

## Configuration

### Setting up Parsers for Forms
* Configure Express to parse URL-encoded bodies and JSON data (useful for handling form submissions).

### Setting up EJS for View Pages
* **EJS (Embedded JavaScript):** It is similar to HTML but allows us to perform dynamic operations, calculations, and inject data directly into the markup.
* **Installation:** 
  ```bash
  npm i ejs
  ```
* **Configuration:** Set EJS as the default view engine in your Express application.

### Setting up Public Static Files
* Configure a static directory (usually named `public`) to serve assets such as CSS, images, and vanilla JavaScript files.

## Dynamic Routing

* **Concept:** Instead of hardcoding every possible route (like `/profiles/user`), we can use route parameters to handle an arbitrary number of dynamic segments.
* **Usage:** By defining a route like `/profile/:username`, we can capture dynamic values. 
* **Example:** With this route, we can access pages dynamically, such as `/profile/demo` or `/profile/demo2`. Express will handle these and make the dynamic part (`demo`, `demo2`) available in the request parameters (`req.params`).
