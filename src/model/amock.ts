export abstract class AMock implements IMock {

    protected payload: Array<any>;

    constructor() {
       this.payload = [];
    }

    abstract setPayload(payload: Array<any>): void;

    abstract getPayload(): Array<any>;
}

export interface IMock {

    setPayload(payload: Array<any>): void;

    getPayload(): Array<any>;

}