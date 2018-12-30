import {Mock} from "../../model/mock";

//socket decorator
export class SocketMock extends Mock {

    protected socketSettings: Array<any>;
    protected mock: Mock;

    constructor(socketSettings: any, mock: Mock) {
        super();
        this.socketSettings = socketSettings;
        this.mock = mock;
    }

    public get SocketSettings() {
        return this.socketSettings;
    }

    public setPayload(): void {
    }

    public getPayload(): Array<any> {
        return this.mock.getPayload();
    }
}