import {SocketMock} from "./socket-mock";
import {ExternalApi} from "../basic/external-api";

export class SocketExternalApi extends SocketMock{
    constructor(socketSettings: any, mock: ExternalApi) {
        super(socketSettings, mock);
    }
}