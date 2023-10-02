const router = require('express').Router();
const exampleController = require('../Controllers/exampleController')

router.post('route', exampleController.example);


module.exports = router;