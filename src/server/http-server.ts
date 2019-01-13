import express = require('express');
import {Config} from "../config";
import bodyParser from "body-parser";


const config = Config.getInstance();
const portNumber = config.configuration.socket.port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("port", process.env.PORT || portNumber);

let http = require('http').Server(app);

let mocks: any[] = [];

app.get('/connect', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"connection": true}));
});

app.get('/mocks', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(mocks));
});

app.post('/register-mocks', (req: any, res: any) => {
    mocks = req.body;
});

app.route('/:param*')
    .get((req: any, res: any) => {
        const routing = req.params.param + req.params[0];

        const mock = Backend.findMock('GET', routing, mocks);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = mock._restSettings.statusCode;
        res.send(JSON.stringify(mock._mock.payload));
    })
    .post((req: any, res: any) => {
        const routing = req.params.param + req.params[0];

        const mock = Backend.findMock('POST', routing, mocks);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = mock._restSettings.statusCode;
        res.send(JSON.stringify(mock._mock.payload));
    });

const server = http.listen(portNumber, function () {
    console.log(`listening on:${portNumber}`);
});

/**
 * todo
 * move everything below to class
 */

export class Backend {
    static findMock(method: string, routing: string, mocks: any[]) {
        let mock = mocks.find(mock => {
            return mock._restSettings.routing == routing && mock._restSettings.method == method;
        });

        if (!mock) {
            return null;
        }

        return mock;
    }
}
