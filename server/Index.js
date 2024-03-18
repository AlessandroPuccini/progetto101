const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Users = require('./Models/User');

app.post("/", async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});