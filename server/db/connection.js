const mongoose = require('mongoose');

 async function connect() {
    try{
        let connection = await mongoose.connect("mongodb+srv://puccinialessandro:123456--@ecommerce.zyruqns.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce");
        console.log("Connected to the database");
    }catch(err){
        console.log("An error occurred: ", err);
    }

    // console.log(connection);
}
module.exports.connect = connect;
