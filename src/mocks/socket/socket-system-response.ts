import {SocketMock} from "./socket-mock";
import {SystemResponse} from "../basic/system-response";

export class SocketSystemResponse extends SocketMock{
    constructor(socketSettings: any, mock: SystemResponse) {
        super(socketSettings, mock);
    }
}