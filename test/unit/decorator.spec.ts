import {expect} from 'chai';
import 'mocha';
import {User} from "../../src/mocks/basic/user";
import {SystemResponse} from "../../src/mocks/basic/system-response";
import {ExternalApi} from "../../src/mocks/basic/external-api";
import {RestUser} from "../../src/mocks/rest/rest-user";
import {RestSystemResponse} from "../../src/mocks/rest/rest-system-response";
import {RestExternalApi} from "../../src/mocks/rest/rest-external-api";

describe('Decorator', () => {

    it('decorate User instance to RestUser instance', () => {
        let user = new User();
        const restSettings: Array<any> = [];
        let restUser = new RestUser(restSettings, user);

        expect(restUser).to.be.an.instanceof(RestUser);
        expect(restUser).to.not.be.an.instanceof(User);
    });

    it('decorate SystemResponse instance to RestSystemResponse instance', () => {
        let systemResponse = new SystemResponse();
        const restSettings: Array<any> = [];
        let restSystemResponse = new RestSystemResponse(restSettings, systemResponse);

        expect(restSystemResponse).to.be.an.instanceof(RestSystemResponse);
        expect(restSystemResponse).to.not.be.an.instanceof(SystemResponse);
    });

    it('decorate ExternalApi instance to RestExternalApi instance', () => {
        let externalApi = new ExternalApi();
        const restSettings: Array<any> = [];
        let restExternalApi = new RestExternalApi(restSettings, externalApi);

        expect(restExternalApi).to.be.an.instanceof(RestExternalApi);
        expect(restExternalApi).to.not.be.an.instanceof(ExternalApi);
    });

});