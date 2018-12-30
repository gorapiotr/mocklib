import {expect} from 'chai';
import 'mocha';
import {User} from "../../src/mocks/basic/user";
import {SystemResponse} from "../../src/mocks/basic/system-response";
import {ExternalApi} from "../../src/mocks/basic/external-api";
import {SocketUser} from "../../src/mocks/socket/socket-user";
import {SocketSystemResponse} from "../../src/mocks/socket/socket-system-response";
import {SocketExternalApi} from "../../src/mocks/socket/socket-external-api";

describe('Decorator', () => {
    it('decorate User instance to SocketUser instance', () => {
        let user = new User();
        const socketSettings: Array<any> = [];
        let socketUser = new SocketUser(socketSettings, user);

        expect(socketUser).to.be.an.instanceof(SocketUser);
        expect(socketUser).to.not.be.an.instanceof(User);
    });

    it('decorate SystemResponse instance to SocketSystemResponse instance', () => {
        let systemResponse = new SystemResponse();
        const socketSettings: Array<any> = [];
        let socketSystemResponse = new SocketSystemResponse(socketSettings, systemResponse);

        expect(socketSystemResponse).to.be.an.instanceof(SocketSystemResponse);
        expect(socketSystemResponse).to.not.be.an.instanceof(SystemResponse);
    });

    it('decorate ExternalApi instance to SocketExternalApi instance', () => {
        let externalApi = new ExternalApi();
        const socketSettings: Array<any> = [];
        let socketExternalApi = new SocketExternalApi(socketSettings, externalApi);

        expect(socketExternalApi).to.be.an.instanceof(SocketExternalApi);
        expect(socketExternalApi).to.not.be.an.instanceof(ExternalApi);
    });

});