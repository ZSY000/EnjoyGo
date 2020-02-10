
var express = require('express');
var router = express.Router();

var handler = require('../handler/handler.js');


router.use('/category', handler.category);
router.use('/secondCategory',handler.secondCategory);
router.use('/searchResult',handler.searchResult);

module.exports = router;