import {ExternalApi} from "../basic/external-api";
import {RestMock} from "./rest-mock";

export class RestExternalApi extends RestMock{
    constructor(restSettings: any, mock: ExternalApi) {
        super(restSettings, mock);
    }
}