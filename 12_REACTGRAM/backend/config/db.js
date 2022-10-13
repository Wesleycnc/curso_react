const mongoose = require("mongoose")
const dbUSer = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// connection

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUSer}:${dbPassword}@cluster0.q5tazvi.mongodb.net/?retryWrites=true&w=majority`)

        console.log("Conectou ao banco");

        return dbConn
    } catch (error) {
        console.log(error);
    }
}

conn()

module.exports = conn
