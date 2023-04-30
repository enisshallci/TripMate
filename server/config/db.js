require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async() => {
    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Konektimi me \"MongoDB\" databazën ka arritur me sukses!");
    } catch(error) {
        console.log("Konektimi me \"MongoDB\" databazën nuk ka arritur");
        process.exit(1);
    }
}

module.exports = connectDB;

//Duhet te behet run ne server