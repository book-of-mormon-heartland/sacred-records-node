const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const router = express.Router();
const cors = require('cors');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors({
    origin: 'http://localhost:8080'
}));


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// for rest api to use json.
app.use(express.json());

    // Optional: Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const database = require("./database/database.js");


const rest = require("./routes/rest.js");
app.use("/rest", rest);
module.exports = router;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

