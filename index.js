const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = express.Router();


app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
/*
const cors = require('cors');
// CORS configuration
const allowedOrigins = [
        'http://localhost:8080',
        'http://localhost:8001',
        'http://localhost:8002',
    ];

const corsOptions = {
  origin: allowedOrigins
}
app.use(cors(corsOptions));
*/


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// for rest api to use json.
app.use(express.json());

    // Optional: Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const database = require("./database/database");
const rest = require("./routes/rest.js");
app.use("/rest", rest);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})