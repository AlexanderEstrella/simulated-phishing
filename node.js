const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 45678;

// Parse JSON requests
app.use(bodyParser.json());

// Endpoint to track clicks
app.post('/track-click', (req, res) => {
    if (req.body.clicked) {
        // Convert request body to string
        const data = JSON.stringify(req.body);

        // Write request body to file
        fs.appendFile('output.txt', data + '\n', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.sendStatus(500);
            } else {
                console.log('Click tracked and logged to file');
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(400);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
