import {AFactory} from "./afactory";
import {AMock} from "../model/amock";
import {User} from "../mocks/basic/user";
import {SystemResponse} from "../mocks/basic/system-response";
import {ExternalApi} from "../mocks/basic/external-api";
import {SocketUser} from "../mocks/socket/socket-user";
import {SocketSystemResponse} from "../mocks/socket/socket-system-response";
import {SocketExternalApi} from "../mocks/socket/socket-external-api";

export class SocketFactory extends AFactory {
    constructor() {
        super()
    }

    public createUser(socketSettings: Array<any>, mock:User): AMock {
        return new SocketUser(socketSettings, mock);
    }

    public createSystemResponse(socketSettings: Array<any>, mock:SystemResponse): AMock {
        return new SocketSystemResponse(socketSettings, mock);
    }

    public  createExternalApi(socketSettings: Array<any>, mock:ExternalApi): AMock {
        return new SocketExternalApi(socketSettings, mock);
    }
}