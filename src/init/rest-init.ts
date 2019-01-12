import * as request from 'request';
import {ServerInit} from "./init";
import {Main} from "../../demo/main";
import {RestScope} from "../scope/rest-scope";

export class RestInit extends ServerInit {

    checkConnection(): void {
        //url from config singlet
        request.get('http://localhost:3001/connect', (error, response, body: any) => {
            if (JSON.parse(body).connection) {
                this.registerMocks();
                this.registerMocksOnServer();
            }
            if (error) {
                throw new Error('Server problem');
            }

        });
    }

    registerMocks(): void {
        Main.main();
    }

    registerMocksOnServer(): void {
        request.post({
            url: 'http://localhost:3001/register-mocks',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RestScope.getScope().mocks)
        }, (error, response, body: any) => {


        });
    }
}