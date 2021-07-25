const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    requestTitle: {
        type: String,
        trim: true,
        required: true
      },
    requestDescription: {
        type: String,
        trim: true,
        required: false
    },
    requestDate: {
        type: Date,
        required: true
    },
    requestResolveDate: {
        type: Date,
        required: false
    },
    resolved: {      
        type: Boolean,
        required: false
    }
});


const Trip = mongoose.model("Request", RequestSchema);

module.exports = Trip;