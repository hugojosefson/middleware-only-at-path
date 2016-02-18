# middleware-only-at-path

Lets you use an Express middleware, only at a specific path.

Useful as `app.use(onlyAt('/', middleware))` so it doesn't run the middleware any deeper than
exactly `/`.

This means you don't have to write the routes in a backwards order for the middlewares to take
effect only where you want it.

## Install

```bash
npm install --save middleware-only-at-path
```

## Example

If you want to use [allow-methods](https://www.npmjs.com/package/allow-methods) at specific
paths, you can do this:

```js
import express from 'express';
import onlyAt from 'middleware-only-at-path';
import allowMethods from 'allow-methods';

const app = express();

app.use(onlyAt('/', allowMethods(['OPTIONS', 'GET', 'HEAD'])));
app.get('/', (req, res) => res.send('Hello world!'));

app.use(onlyAt('/examples', allowMethods(['OPTIONS', 'POST'])));
app.post('/examples', (req, res) => res.status(201).send('Created.'));

app.listen(8000);
```
