const express = require('express');
const clientRouter = express.Router();

clientRouter.get('/', (req, res) => {
	// res.render('layouts/test.hbs');
    res.send('działa');
});

module.exports = {
	clientRouter,
};
