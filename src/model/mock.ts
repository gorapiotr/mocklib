import {AMock} from "./amock";


export class Mock extends AMock {

    constructor(payload: []) {
        super(payload);
    }

    public setPayload(): void {
    }

    public getPayload(): [] {
        return [];
    }
}
