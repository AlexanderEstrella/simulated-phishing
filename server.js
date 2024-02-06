const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Define route to serve static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Specify port number
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
