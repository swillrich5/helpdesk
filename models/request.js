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
    requestUsername: {
        type: String,
        trim: true,
        required: false
    },
    requestPriority: {
        type: String,
        trim: true,
        required: false
    },
    requestDate: {
        type: Date,
        required: false
    },
    assignedTo: {
        type: String,
        required: false
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


const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;