import {ExternalApi} from "../basic/external-api";
import {RestMock} from "./rest-mock";

export class RestUser extends RestMock{
    constructor(restSettings: any, mock: ExternalApi) {
        super(restSettings, mock);
    }
}