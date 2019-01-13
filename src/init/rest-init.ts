import * as request from 'request';
import {ServerInit} from "./init";
import {Main} from "../../demo/main";
import {RestScope} from "../scope/rest-scope";
import {HttpCodes} from "../adapter/http-codes";
import {RestMock} from "../mocks/rest/rest-mock";

export class RestInit extends ServerInit {

    checkConnection(): void {
        //url from config singlet
        request.get('http://localhost:3001/connect',{timeout: 1500}, (error, response, body: any) => {

            if (error) {
                throw new Error('Server problem');
            }

            if (JSON.parse(body).connection) {
                this.registerMocks();
                this.checkMocks();
                this.registerMocksOnServer();
            }
        });
    }

    registerMocks(): void {
        Main.main();
    }

    checkMocks(): void {
        let codes = new HttpCodes();

        RestScope.getScope().mocks.map( (mock: RestMock) => {
            const result = codes.checkCode(mock.restSettings().statusCode)
            if(!result) {
                throw new Error('Mock http status code problem: ');
            }
        })
    }

    registerMocksOnServer(): void {
        request.post({
            url: 'http://localhost:3001/register-mocks',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RestScope.getScope().mocks)
        }, (error, response, body: any) => {
            if (error) {
                throw new Error('Problem with mocks registration');
            }
        });
    }
}