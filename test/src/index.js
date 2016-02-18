import express from 'express';
import onlyAt from 'middleware-only-at-path';
import allowMethods from 'allow-methods';

const app = express();

app.use(onlyAt('/', allowMethods(['OPTIONS', 'GET', 'HEAD'])));
app.get('/', (req, res) => res.send('Hello world!'));

app.use(onlyAt('/examples', allowMethods(['OPTIONS', 'POST'])));
app.post('/examples', (req, res) => res.status(201).send('Created.'));

app.listen(8000);
