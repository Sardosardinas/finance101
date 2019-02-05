const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongod://localhost/finance101"
);

const financeSeed = [
    {
        income: 11000,
        expense: 6000,
        savings: 5000
    }
];

db.Savings
    .remove({})
    .then(() => db.Savings.collection.insertMany(financeSeed))
    .then(data => {
        console.log(data.result.n + "budget tracking inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });