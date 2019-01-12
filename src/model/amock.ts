export abstract class AMock implements IMock {

    protected payload: Array<any>;

    protected name: string;

    constructor() {
       this.payload = [];
       this.name = '';
    }

    abstract setPayload(payload: Array<any>): void;

    abstract getPayload(): Array<any>;

    abstract setName(name: string): void;

    abstract getName(): string;
}

export interface IMock {

    setPayload(payload: Array<any>): void;

    getPayload(): Array<any>;

    setName(name: string): void;

    getName(): string;
}