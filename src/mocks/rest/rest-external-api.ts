import {ExternalApi} from "../basic/external-api";
import {RestMock} from "./rest-mock";

export class RestExternalApi extends RestMock{
    constructor(restSettings: Array<any>, mock: ExternalApi) {
        super(restSettings, mock);
    }
}