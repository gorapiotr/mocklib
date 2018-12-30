import {SocketMock} from "./socket-mock";
import {User} from "../basic/user";

export class SocketUser extends SocketMock{
    constructor(socketSettings: Array<any>, mock: User) {
        super(socketSettings, mock);
    }
}