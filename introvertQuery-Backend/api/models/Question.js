const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    
    question: {
        type: String,
        required: true
    },
    isAnswered: {
        type: Boolean,
        required: false,
        default: false
    },
    answer:{
        type: String,
        required: false,
        default: ""
    }
})


const question = mongoose.model('Question',questionSchema);
module.exports = question;