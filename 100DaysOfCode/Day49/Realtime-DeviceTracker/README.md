# Real-Time Device Tracker

A real-time location tracking application built with Node.js, Express, Socket.io, and Leaflet.js. This project allows you to track users' locations on a map in real-time as they connect to the server.


## 🚀 How It's Built (Step-by-Step Guide)

This guide follows the process used to create this application, explaining each step and the code involved.

### Step 1: Project Initialization

First, initialize a new Node.js project and install the necessary dependencies.

```bash
# Initialize project
npm init -y

# Install dependencies
npm install express ejs socket.io

# Install dev dependency
npm install nodemon --save-dev
```

Update `package.json` to set `app.js` as the main entry point and add scripts:

```json
"main": "app.js",
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### Step 2: Setting up the Express Server

Create `app.js` to set up the basic Express server and integrate Socket.io. We need the `http` module because Socket.io requires it to attach to the server.

**File: `app.js`**

```javascript
const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

const server = http.createServer(app);
const io = socketio(server);

// Setup EJS view engine and static files
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get('/', function (req, res) {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

### Step 3: Handling Real-Time Connections

In `app.js`, we handle socket connections. When a client connects, we listen for their location updates and broadcast them to everyone else.

**Code added to `app.js`:**

```javascript
io.on("connection", function (socket) {
    console.log("New user connected:", socket.id);

    socket.on("send-location", function (data) {
        // Broadcast location to all connected clients
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id);
    });
});
```

### Step 4: Frontend Setup (EJS & Leaflet)

Create a `views/index.ejs` file. This acts as our HTML template. We include Leaflet CSS/JS for the map and the Socket.io client script.

**File: `views/index.ejs`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Tracker</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
</head>
<body>
    <div id="map"></div>
    
    <!-- Scripts -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/script.js"></script>
</body>
</html>
```

### Step 5: Client-Side Logic

Create `public/js/script.js` to handle geolocation and map rendering.

1.  **Initialize Map**: Create a Leaflet map.
2.  **Geolocation**: Use `navigator.geolocation.watchPosition` to track the user.
3.  **Socket Events**: Emit location to server, receive updates from others.

**File: `public/js/script.js`**

```javascript
const socket = io();
const map = L.map("map").setView([0, 0], 10);
let hasCentered = false;
const markers = {};

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'RealTime Tracker'
}).addTo(map);

// Send my location to server
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
        
        // Center only once on load
        if(!hasCentered){
            map.setView([latitude, longitude], 16);
            hasCentered = true;
        }
    }, (error) => {
        console.error(error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
}

// Receive location updates from others
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Remove markers on disconnect
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
```

---

## 🛠 Setup & Usage

Follow these steps to run the project locally.

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the server**:
    ```bash
    npm run dev
    ```
4.  **Open in Browser**:
    Visit `http://localhost:3000`.
5.  **Test Multi-User**:
    Open the same URL in a **new tab** or **different device** (on the same network) to see multiple markers appear.

## 📝 Notes
- Ensure you allow **Location Permissions** in your browser when asked.
- If using Chrome, you might need to enable hardware acceleration for smoother map performance, though it works fine without it.


