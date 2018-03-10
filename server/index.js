const express = require('express');
const app = express();

app.get('/', (req, res) => {
	let data = 1 * 3;
	res.send({ data });
});

app.listen(6789, () => {
	console.log('app running on http://localhost:6789');
});
