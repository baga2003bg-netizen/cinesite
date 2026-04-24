const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Render or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.json());

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).send('RiseStock Server is running');
});

app.listen(PORT, () => {
    console.log(`RiseStock is live at http://localhost:${PORT}`);
});