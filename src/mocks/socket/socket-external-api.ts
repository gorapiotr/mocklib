import {SocketMock} from "./socket-mock";

export class SocketExternalApi extends SocketMock{
    constructor(socketSettings: any) {
        super(socketSettings);
    }
}