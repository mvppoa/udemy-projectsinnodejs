var express = require('express'); // So we can use the router
var router = express.Router();

router.get('/',function (req, res) {
    res.render('index');
})

module.exports = router;