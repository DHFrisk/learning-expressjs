// SIMPLE 'WIKI' MODULE USING EXPRESS ROUTER MODULE

const express = require('express');
const router = express.Router();

// home page
router.get('/', function (req, res) {
    res.send('wiki home page');
});

// about page
router.get('/about', function (req, res) {
    res.send('about this wiki');
});

module.exports = router;
