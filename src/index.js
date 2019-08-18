import express from 'express';
import renderer from './helpers/renderer';

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(renderer());
});

app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
});