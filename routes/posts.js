const express = require('express');

const router = express.Router();

const post = require('../models/post')


router.get('/post', (req, res) => {
    res.send('wea are on post')
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;