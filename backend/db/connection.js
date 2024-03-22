import { config } from 'dotenv';
config({ path: 'config.env' });
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
},
});

try{
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. Database connected. You are good to go!");
} catch(err) {
    console.error(err);
}
let db = client.db("lovers");

export default db;