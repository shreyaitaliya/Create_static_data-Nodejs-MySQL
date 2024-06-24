const express = require('express');
const router = express.Router();
const { reportsShow } = require('../controller/reportcontroller');

// router.post('/createStaticData', routesController.createStaticData);
router.get('/reportsShow', reportsShow);

module.exports = router;
        