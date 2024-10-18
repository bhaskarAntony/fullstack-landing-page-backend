const express = require('express');
const { NewLead, getUsers } = require('../controlls/leads');
const { NewIntern, getInterns } = require('../controlls/internship');
const router = express.Router();

router.post('/new/intern', NewIntern);
router.get('/get/intern', getInterns);

module.exports = router;