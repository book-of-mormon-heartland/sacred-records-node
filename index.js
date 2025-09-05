import express from 'express';
const app = express();
const port = 3000;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { router } from './routes/rest.js';


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
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// for rest api to use json.
app.use(express.json());

    // Optional: Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use("/rest", router);

import { theSacredTree } from "./routes/thesacredtree.js";
app.use("/thesacredtree", theSacredTree);

//import { nicodemus } from "./routes/nicodemus.js";
//app.use("/nicodemus", nicodemus);
//const miskwaabik = require("./routes/miskwaabik.js");
//app.use("/miskwaabik", miskwaabik);
//const nephiteRecord = require("./routes/nephiterecord.js");
//app.use("/nephiterecord", nephiteRecord);
//const newtestament = require("./routes/newtestament.js");
//app.use("/newtestament", newtestament);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})