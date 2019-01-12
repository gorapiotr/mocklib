import {Mock} from "../../model/mock";

//socket decorator
export class RestMock {

    protected _restSettings: Array<any>;
    protected _mock: Mock;

    constructor(restSettings: Array<any>, mock: Mock) {
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