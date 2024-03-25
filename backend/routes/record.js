import express from 'express';
import db from '../db/connection.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
    let collection = await db.collection("records");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if(!result) res.send("Record not found").status(404);
    else res.send(result).status(200);
});

router.post('/', async (req, res) => {
    try{
        let newDocument = {
            name: req.body.name,
            surname: req.body.surname,
            address: req.body.address,
            city: req.body.city,
            zipcode: req.body.zipcode,
            email: req.body.email,
            password: req.body.password,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);

    } catch(err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});
router.post('/', async (req, res) => {
    const { email2, password2 } = req.body;
    try{
        const collection = await db.collection("records");
        const query = { email: email2, password: password2 };
        const user = await collection.findOne(query);

        if(!user){
            res.status(401).send("Invalid credentials");
        }else{
            res.status(200).send({userId: user._id});
        }
    }catch(error){
        console.error("Error during login:",error);
        res.status(500).send("Internal server error");
    }
});

router.put('/:id'), async (req, res) => {
    try{
        const userId = req.params.id;
        const newName = req.body.name;
        const newEmail = req.body.email;
        const query = { _id: new ObjectId(userId) };
        const updates = { $set: { name: newName, email: newEmail } };
        const collection = db.collection("records");
        const results = await collection.updateOne(query, updates);

        if(results.modifiedCount > 0){
            res.status(200).send({message: "User updated successfully"});
        }else{
            res.status(404).send({message: "User not found"})
        }
    }catch(err){
        console.error(err);
        res.status(500).send("internal server error");
    }
} 
    

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
            return res.status(400).send('Invalid ID');
        }     
        const query = { _id: new ObjectId(id) };

        const collection = db.collection("records");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    }catch(err){
        console.error(err);
        res.status(500).send("Error deleting record");
    }
});

export default router;