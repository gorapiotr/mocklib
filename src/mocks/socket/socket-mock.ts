import {AMock} from "../../model/amock";

//socket decorator
export class SocketMock extends AMock{

    protected socketSettings: Array<any>;

    constructor(socketSettings: any) {
        super();
        this.socketSettings = socketSettings;
    }

    public get SocketSettings() {
        return this.socketSettings;
    }

    public setPayload(): void {
    }

    public getPayload(): Array<any> {
        return [];
    }
}