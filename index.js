const express = require('express');
const hbs = require('express-handlebars');
const { urlencoded } = require('express');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');

const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.static('public'));
app.use(express.json());
app.engine(
	'hbs',
	hbs.engine({
		extname: 'hbs',
		// helpers: handlebarsHelpers,
	})
);
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, '0.0.0.0', () => {
	console.log('Listening on server');
});
