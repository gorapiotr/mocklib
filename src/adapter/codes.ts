import {statusCodes} from "./status-codes";

export class Codes {
    private _codes: any;

    constructor() {
        this._codes = statusCodes;
    }

    get codes(): string[] {
        return Object.keys(this._codes) as Array<string>;
    }

    displayCodes() {
        console.log(this._codes);
    }
}