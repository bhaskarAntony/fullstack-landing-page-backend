const express = require('express');
const { NewLead, getUsers } = require('../controlls/leads');
const router = express.Router();

router.post('/new/lead', NewLead);
router.get('/get/leads', getUsers);

module.exports = router;