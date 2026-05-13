# Notes App using EJS & Node.js (fs module)

Here we are building a functional Notes application. It uses a file-system based approach where each note is saved as a physical `.txt` file on the server rather than using a database.

### Features
- **Create**: We have a title input, a description textarea, and a submit button. Once we click the button, the note is saved as a text file inside the `Tasks` folder.
- **Read**: The app reads the `Tasks` directory using `fs.readdir` and dynamically renders a card for each note on the home page. Clicking "Read more..." opens the specific note's full content.
- **Edit**: Users can edit an existing note. The app handles renaming the `.txt` file if the title changes (using `fs.rename`), and updates the inner content (using `fs.writeFile`).

### Application Routes
- `GET /` : Reads all files from the `Tasks` folder and renders them on the home page (`index.ejs`).
- `POST /create` : Takes form input, formats the title (removes spaces), creates a new `.txt` file, and saves the details.
- `GET /task/:filename` : Reads a specific file's content and renders the detail page (`task.ejs`).
- `GET /edit/:filename` : Renders the edit form (`edit.ejs`), pre-populated with the note's existing data.
- `POST /edit` : Takes the hidden previous filename, renames the file if the new title differs, and saves the updated content.

### Frontend
- We are using **Tailwind CSS** for styling to build a premium, dark-themed UI. 
- For quick prototyping, we are utilizing the Tailwind CDN. While using the CDN is not the recommended approach for a production build (where installing via npm/postcss is best practice), it is great for quick setups and learning projects.
