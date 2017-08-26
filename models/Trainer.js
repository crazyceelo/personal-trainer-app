var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TrainerSchema = new Schema({
    email: {
        type: String
    },

    specialization: {
        type: String
    },

    address1: {
        type: String
    },

    address2: {
        type: String
    },

    city: {
        type: String
    },

    state: {
        type: String
    },

    zip: {
        type: Number
    },

    description: {
        type: String
    }
});

var Trainer = mongoose.model("Trainer", TrainerSchema);
module.exports = Trainer;