import * as Koa from 'koa'
import * as bodyParser from 'koa-body';
import {weather} from './routers/weather.router'
import * as Router from 'koa-router'
const app = new Koa();
const router = new Router();

app.use(bodyParser({
    urlencoded: true,
}));

app.use(weather.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3004);
