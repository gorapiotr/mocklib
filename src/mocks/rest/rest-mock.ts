import {Mock} from "../../model/mock";

//socket decorator
export class RestMock{

    protected _restSettings: any;
    protected _mock: Mock;

    constructor(restSettings: any, mock: Mock) {
        this._restSettings = restSettings;
        this._mock = mock;
    }

    public setPayload(): void {
    }

    public getPayload(): Array<any> {
        return this._mock.getPayload();
    }

    public restSettings(): Array<any> {
        return this._restSettings;
    }
}