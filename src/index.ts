const Koa = require('koa');
const bodyParser = require('koa-body');
const app = new Koa();

app.use(bodyParser({
    urlencoded: true,
}));

let degrees = require('./weather.service');

app.use(degrees.fetchDegreesCity);

app.listen(3004);
