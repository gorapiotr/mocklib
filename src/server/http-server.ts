import express = require('express');
import {Config} from "../config";
import bodyParser from "body-parser";


const config = Config.getInstance();
const portNumber = config.configuration.socket.port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || portNumber);

let http = require('http').Server(app);

let mocks: any[] = [];

app.get('/connect', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "connection": true }));
});

app.get('/mocks', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(mocks));
});

app.post('/register-mocks', (req: any, res: any) => {
    mocks = req.body;
});

const server = http.listen(portNumber, function () {
    console.log(`listening on:${portNumber}`);
})