const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

let {connect } = require('./db/connection');
const Users = require('./Models/User');

app.post("/", async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

async function startServer() {
    await connect();
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();