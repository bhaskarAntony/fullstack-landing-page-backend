const mongoDB = require('mongoose');

const leadsSchema = new mongoDB.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure the email is unique
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email regex validation
    },
    phonenumber: {
        type: String,
        required: true,
        match: /^\+?[1-9]\d{1,14}$/ // E.164 format for phone numbers
    },
    experience: {
        type: String,
        required: true,
        // enum: ['Beginner', 'Intermediate', 'Advanced'] // Enum for experience levels
    },
    course: {
        type: String,
        required: true
    }
});

const leadsDataBase = mongoDB.model('fullstackLeads', leadsSchema);
module.exports = leadsDataBase;
