import express from 'express';
import calc from './calc.js';

const aNumber = calc();
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send(`Showting number ${aNumber} and running on port ${PORT}`));

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
