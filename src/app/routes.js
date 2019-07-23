const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.sendFile(`${__dirname}/html/index.html`));
router.use('/js', express.static('src/app/js'))

module.exports = router;