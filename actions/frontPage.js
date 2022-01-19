const path = require('path');

exports.frontPage = (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
}