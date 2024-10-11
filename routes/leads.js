const express = require('express');
const { NewLead } = require('../controlls/leads');
const router = express.Router();

router.post('/new/lead', NewLead);

module.exports = router;