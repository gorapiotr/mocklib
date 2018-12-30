import {AMock} from "./amock";


export class Mock extends AMock {

    constructor() {
        super();
    }

    public setPayload(payload: Array<any>): void {
        this.payload = JSON.parse(JSON.stringify(payload));
    }

    public getPayload(): Array<any> {
        return this.payload;
    }
}
