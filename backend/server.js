const  express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const DataModel = require('./DataModel');
const connectDB = require('./connectDB');
connectDB();


const app = express();
app.use(express.json({ extended: false }));

const cors = require('cors');

app.get('/readfromserver', (req, res) => {
    res.json({ message: 'Hello Man, i am the server'});
});

app.post('/writetodatabase', async (req, res) => {
 try {
    const { email, password } = req.body;
    const newData = new DataModel({ email, password });
    await newData.save();
    res.json({ message: 'Data saved to database'});
 } catch (error) {
     console.log("Something went wrong with the server", error.message);
     res.status(500).send('Server Error while saving the data');
 }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});