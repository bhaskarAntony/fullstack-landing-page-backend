const express = require('express');
const { NewLead, getUsers } = require('../controlls/eligibility');
const router = express.Router();

router.post('/new/eligibility', NewLead);
router.get('/get/eligibiliteis', getUsers);

module.exports = router;