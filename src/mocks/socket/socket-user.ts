import {SocketMock} from "./socket-mock";

export class SocketUser extends SocketMock{
    constructor(socketSettings: any) {
        super(socketSettings);
    }
}