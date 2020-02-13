const url = process.env.LOG_URL;
const fetch = require("node-fetch");

export async function fetchName() {
    let response = await fetch(url);
    let data = await response.json();
    return data.response;
}