import {AFactory} from "./afactory";
import {AMock} from "../model/amock";
import {User} from "../mocks/user";
import {SystemResponse} from "../mocks/system-response";
import {ExternalApi} from "../mocks/external-api";

export class BasicFactory extends AFactory {
    constructor() {
        super()
    }

    public createUser(): AMock {
        return new User();
    }

    public createSystemResponse(): AMock {
        return new SystemResponse();
    }

    public  createExternalApi(): AMock {
        return new ExternalApi();
    }
}