export abstract class AMock implements IMock {

    protected payload: Array<any>;

    constructor() {
       this.payload = [];
    }

    abstract setPayload(): void;

    abstract getPayload(): Array<any>;
}

export interface IMock {

    setPayload(): void;

    getPayload(): Array<any>;

}