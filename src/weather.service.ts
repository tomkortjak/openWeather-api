const baseUrl = process.env.WEATHER_API_URL;
const apiKey = process.env.WEATHER_API_KEY;
const fetch = require("node-fetch");
const Router = require('koa-router');
const router = Router({
    prefix: 'degrees'
});

export async function fetchDegreesCity(ctx)  {
    console.log(ctx);
    const city = ctx.params.city;
    const param = `q=${city}&appid=${apiKey}`;
    const url = baseUrl.concat(param);
    console.log("request naar: ", url);

    let response = await fetch(url);
    let data = await response.json();
    ctx.body = `Amount of degrees in ${router.params.city}: ` + data;

}

router.get('/:city', fetchDegreesCity);
export default router;
