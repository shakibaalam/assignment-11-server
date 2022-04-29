const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const jwt = require('jsonwebtoken')
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.mlfwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('connected mongo');
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('Running')
});

app.listen(port, () => {
    console.log('continue', port);
})