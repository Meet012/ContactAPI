const express = require('express');
const router = express.Router();
const {getAllContact,getOneContact,createContact,deleteContact,updateContact} = require('../controllers/contact');

router.route('/').get(getAllContact).post(createContact);
router.route('/:id').get(getOneContact).patch(updateContact).delete(deleteContact);

module.exports = router;