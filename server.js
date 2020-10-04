const express = require('express');

const app = express();

const PORT = '5000';

app.use(express.json());

app.listen(PORT, () => {
	console.log('App listening on port 5000!!!');
});
