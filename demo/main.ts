import {BasicFactory} from "../src/factory/basic-factory";
import {RestUser} from "../src/mocks/rest/rest-user";
import {RestScope} from "../src/scope/rest-scope";

export class Main {
    /**
     * todo remove name from mock objects
     *
     */


    static main() {
       this.firstMock();
       this.secondMock();
    }

    static firstMock() {
        let payload: any = {
            "a": "a",
            "b": "b",
        };

        const factory = new BasicFactory();
        let user = factory.createUser();
        user.setPayload(payload);

        const restSettings: any = {
            routing: 'user',
            method: 'GET',
            statusCode: '200'
        };
        let restUser = new RestUser(restSettings, user);

        RestScope.addMock(restUser);
    }

    static secondMock() {
        let payload: any = {
            "z": "asdasdas",
            "4": "asdasd"
        };

        const factory = new BasicFactory();
        let user = factory.createUser();
        user.setPayload(payload);

        const restSettings: any = {
            routing: 'basic-routing',
            method: 'POST',
            statusCode: '201'
        };
        let restUser = new RestUser(restSettings, user);

        RestScope.addMock(restUser);
    }
}