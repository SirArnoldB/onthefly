import express from 'express';
import cors from 'cors';

// create express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// enable cors
app.use(cors());

// default route hander for / route (GET) request 
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1 style = "text-align: center; margin-top: 100px; font-size: 50px; color: #1a1a1a; font-weight: 1000;" >✈️ On The Fly API</h1>')
});

// define the port to run the server on
const PORT = process.env.PORT || 3001;

// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}.`);
});

