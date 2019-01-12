import express = require('express');
import {Config} from "../config";

var middleware = require('socketio-wildcard')();

const config = Config.getInstance();

const portNumber = config.configuration.socket.port;


const app = express();
app.set("port", process.env.PORT || portNumber);

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.send('socket server working');
});

io.use(middleware);

io.on('connection', function (socket: any) {

    console.log('a user connected');

    let mocks: any;

    socket.on('*', function (packet: any, next: any) {
        console.log('CHANNEL: ' + packet.data[0]);
        if (packet.data[0] == 'register-mocks') {
            mocks = packet;
        }
        io.emit(packet.data[0]);
    });

});


const server = http.listen(portNumber, function () {
    console.log(`listening on:${portNumber}`);
});