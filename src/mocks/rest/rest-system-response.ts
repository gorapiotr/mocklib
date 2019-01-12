import {ExternalApi} from "../basic/external-api";
import {RestMock} from "./rest-mock";

export class RestSystemResponse extends RestMock{
    constructor(restSettings: any, mock: ExternalApi) {
        super(restSettings, mock);
    }
}