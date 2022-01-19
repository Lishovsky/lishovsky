const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static
    (path.join(__dirname, '/public'),
));

const frontPage = require('./actions/frontPage');
const sendEmailToOwner = require('./actions/sendEmailToOwner');

router.get('/', frontPage.frontPage)

router.get('/sendMailToOwner', sendEmailToOwner.sendEmailToOwner)



module.exports = router;