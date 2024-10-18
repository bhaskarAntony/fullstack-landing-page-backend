const mongoDB = require('mongoose');

const internshipsSchema = new mongoDB.Schema({
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
    course: {
        type: String,
        required: true
    }
});

const InternshipDatabase = mongoDB.model('FullstackInternship', internshipsSchema);
module.exports = InternshipDatabase;
