const mongoDB = require('mongoose');

const eligibilitySchema = new mongoDB.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    backlogs: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true
    },
    academyScore:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    }
});

const EligibilityDatabase = mongoDB.model('eligibilityusers', eligibilitySchema);
module.exports = EligibilityDatabase;
