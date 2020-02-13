import {Context} from "koa";
import * as json from '../helpers/http-json'
import * as Router from 'koa-router';

const fetchDegreesCity = async (ctx: Context, next: Function) => {
    const baseURL = process.env.WEATHER_API_URL;
    const apiKey = process.env.WEATHER_API_KEY;
    console.log(ctx);
    const city = ctx.params.city;
    const param = `?q=${city}&appid=${apiKey}&units=metric`;
    const endpoint = `http://` + baseURL.concat(param);

    const options = json.options_get(endpoint, {
        timeout: 2000,
    });

    ctx.body = await json.request(options);

    await next;
};

const router = new Router();
router.get('/:city', fetchDegreesCity);

export const weather = router;
