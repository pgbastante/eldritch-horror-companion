const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/about', (req, res) => {
  res.send('MEAN Stack bootstrap');
});

module.exports = router;
