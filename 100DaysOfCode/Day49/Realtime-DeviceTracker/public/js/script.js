const socket = io();
const map = L.map("map").setView([0, 0], 10);
let hasCentered = false;
const markers = {};

// When we receive a location update from the server (could be us or someone else)
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    // Update existing marker or create new one
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Remove marker when a user disconnects
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ' RealTime tracker '
}).addTo(map);

// Check if browser supports geolocation
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Emit my location to the server
        socket.emit("send-location", { latitude, longitude });

        // Center map on my location (optional: could only do this once if preferred)
        if (!hasCentered) {
            map.setView([latitude, longitude], 16);
            hasCentered = true;
        }
    }, (error) => {
        console.error(error);
    },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
}

