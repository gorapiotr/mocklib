import {Factory} from "./factory";
import {AMock} from "../model/amock";
import {User} from "../mocks/basic/user";
import {SystemResponse} from "../mocks/basic/system-response";
import {ExternalApi} from "../mocks/basic/external-api";

export class BasicFactory extends Factory {
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