import {BasicFactory} from "../src/factory/basic-factory";
import {RestUser} from "../src/mocks/rest/rest-user";
import {RestScope} from "../src/scope/rest-scope";

export class Main {
    /**
     * todo remove name from mock objects
     *
     */


    static main() {
        let payload: any = {
            "a": "a",
            "b": "b"
        };

        const factory = new BasicFactory();
        let user = factory.createUser();
        user.setPayload(payload);

        const restSettings: any = {
            routing: 'user'
        };
        let restUser = new RestUser(restSettings, user);

        RestScope.addMock(restUser);
    }
}