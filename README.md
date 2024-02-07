# Phishing Email Simulation

This repository demonstrates how to create a phishing email simulation using an HTML webpage and a Node.js server. The goal is to educate users about the dangers of phishing attacks and how to recognize them.

## Technologies Used

- HTML: To create the phishing webpage.
- Node.js: To create the server for tracking clicks.
- Express.js: To handle routing and serving static files.

## Setting Up the Environment

### Prerequisites

- Node.js installed on your machine.
- Basic knowledge of HTML and JavaScript.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

## Running the Server

1. Open your terminal or command prompt.
2. Navigate to the `server` directory in the project.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
Start the server by running:

bash
Copy code
node server.js
The server will start running on the default port 45678.

Running the HTML Page
Open another terminal or command prompt window.
Navigate to the project directory.
Open the index.html file in a web browser.
Instructions for the Phishing Simulation
The HTML page will display a simulated phishing message.
When the user clicks the "Go to Youtube" button, a request will be sent to the server to track the click.
The server will log the click in the output.txt file.
The user will be redirected to a YouTube video link.
To stop the phishing simulation, close the browser tab.
Important Note
Replace 'http://ipaddress/track-click' in the HTML file with the actual public IP address or domain name of your server.
Ensure that the server is accessible from the internet and has proper security measures in place.
Use this simulation for educational purposes only and with the consent of participants.
