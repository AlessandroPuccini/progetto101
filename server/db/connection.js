const mongoose = require('mongoose');

 async function connect() {
    let connection = await mongoose.connect("mongodb+srv://puccinialessandro:123456--@ecommerce.zyruqns.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce");
    console.log(connection);
}
module.exports.connect = connect;
