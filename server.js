const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 45679;
app.use(cors());
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



// Define route to serve static HTML file
app.get('/', (req, res) => {

    const now = new Date();
    const dateTime = now.toLocaleString();
    const clientIP = req.ip;
    console.log("This user clicked on the link", clientIP)
    const entryTime = dateTime;
    const data = `${entryTime}:  Client IP from the user which clicked on it - ${clientIP}\n`;
    fs.appendFile('Phished.txt', data + '\n', (err)=> {
        if (err) {
            console.log("There was an error: ", err)
        } else {
            console.log("Logged entry from: ", clientIP);
        }
    })
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/:name', (req,res) => {
   const now = new Date();
   const dateTime = now.toLocaleString();
   const name = req.params.name;
   const logTime = dateTime;
   const data = `${logTime}: This user clicked on the link - ${name}\n`;
   console.log("The Following user clicked on the link: ", name);
   fs.appendFile('Phished.txt', data + ' clicked on it\n', (err) => {
if (err) {
console.log("Error writing to file", err);

}else {

console.log("Logged Entry from: ", name);
}

 res.sendFile(path.join(__dirname, 'index.html'));

});



});



// route to handle post request
app.post('/track-click', (req, res) => {
    if (req.body.clicked) {

        const now = new Date();
        const dateTime = now.toLocaleString();
        const clientIP = req.ip;
        if (req.body.name != "") {
         
            console.log(JSON.stringify(req.body.name), "user watched the video");

         
        } else {
            console.log(clientIP, "user watched the video")
        }
        // Convert request body to string
        // get date
        const dateTimes = dateTime;

        // Convert request body to string
        const data = `${dateTimes}: Client IP - ${clientIP}, ${JSON.stringify(req.body)}\n`;


        // Write the data to output.txt
        fs.appendFile('Learned.txt', data + '\n', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.sendStatus(500);
            } else {
                console.log('Click tracked and logged to file for', clientIP);
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(400);
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
