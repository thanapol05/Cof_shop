const express = require('express');
const router = express.Router();
const recipController = require('../controllers/recipeController');


router.get('/',recipController.homepage);


module.exports = router;