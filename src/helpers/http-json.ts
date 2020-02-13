import {URL} from 'url'
import * as http from "http";
import * as _merge from 'lodash.merge';
import * as https from "https";


export function options_get(endpoint: string, opts: http.RequestOptions = {}): http.RequestOptions {
    const url = new URL(endpoint);
    const options = {
        host: url.hostname,
        path: url.pathname + url.search,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };
    console.log("href is: ", url.href);
    return _merge(options, opts);
}

export function request(options: http.RequestOptions, data: string = '') {
    return new Promise((resolve, reject) => {
        let json = '';
        console.log(options);
        const req = https.request(options, (res: http.IncomingMessage) => {
            res.on('data', (chunk) => {
                json += chunk;
            });

            res.on('end', () => {
                console.log(json);
                resolve(json);
            });
        });
        req.on('error', (e) => {
            reject(e.message)
        });
        req.write(data);
        req.end();
    });
}

