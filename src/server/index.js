import path from 'path';
import express from 'express';

import htmlMiddleware from './middleware/html';
import renderMiddleware from './middleware/render';
import storeMiddleware from './middleware/store';

const publicPath = path.join(__dirname, '/public');
const app = express();
const compression = require('compression');
app.use(compression())
app.get('/fetchtodos', (err, res) => {
	res.status(200);
	res.json({ working: true });
	res.end();
});
app.use(express.static(publicPath));
app.use(htmlMiddleware());
app.use(storeMiddleware());
app.use(renderMiddleware());

export default app;
