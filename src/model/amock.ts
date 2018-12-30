export abstract class AMock implements IMock {

    protected payload: [];

    constructor(payload: []) {
        this.payload = payload;
    }

    abstract setPayload(): void;

    abstract getPayload(): [];
}

interface IMock {

    setPayload(): void;
    getPayload(): [];

}