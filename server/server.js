import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const server = express();
let PORT = 3000;

server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
});

server.post("/signup", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});