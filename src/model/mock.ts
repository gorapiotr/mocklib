import {AMock} from "./amock";


export class Mock extends AMock {

    constructor() {
        super();
    }

    public setPayload(): void {
    }

    public getPayload(): Array<any> {
        return [];
    }
}
