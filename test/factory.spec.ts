import {expect} from 'chai';
import 'mocha';
import {BasicFactory} from "../src/factory/basic-factory";
import {AMock} from "../src/model/amock";
import {Mock} from "../src/model/mock";
import {User} from "../src/mocks/basic/user";
import {SystemResponse} from "../src/mocks/basic/system-response";
import {ExternalApi} from "../src/mocks/basic/external-api";
import {SocketFactory} from "../src/factory/socket-factory";
import {SocketUser} from "../src/mocks/socket/socket-user";
import {SocketSystemResponse} from "../src/mocks/socket/socket-system-response";
import {SocketExternalApi} from "../src/mocks/socket/socket-external-api";

describe('Abstract factory', () => {

    it('create basic User instance by BasicFactory', () => {
        const factory = new BasicFactory();
        let user = factory.createUser();

        expect(user).to.be.an.instanceof(AMock);
        expect(user).to.be.an.instanceof(Mock);
        expect(user).to.be.an.instanceof(User);
        expect(user).to.not.be.an.instanceof(SystemResponse);

    });

    it('create basic SystemResponse instance by BasicFactory', () => {
        const factory = new BasicFactory();
        let systemResponse = factory.createSystemResponse();

        expect(systemResponse).to.be.an.instanceof(AMock);
        expect(systemResponse).to.be.an.instanceof(Mock);
        expect(systemResponse).to.be.an.instanceof(SystemResponse);
        expect(systemResponse).to.not.be.an.instanceof(User);

    });

    it('create basic ExternalApi instance by BasicFactory', () => {
        const factory = new BasicFactory();
        let externalApi = factory.createExternalApi();

        expect(externalApi).to.be.an.instanceof(AMock);
        expect(externalApi).to.be.an.instanceof(Mock);
        expect(externalApi).to.be.an.instanceof(ExternalApi);
        expect(externalApi).to.not.be.an.instanceof(User);

    });

    it('create  SocketUser instance by SocketFactory', () => {
        const factory = new BasicFactory();
        let user = factory.createUser();

        const socketSettings: Array<any> = [];
        const socketFactory = new SocketFactory();
        let userSocket = socketFactory.createUser(socketSettings, user);

        expect(userSocket).to.be.an.instanceof(AMock);
        expect(userSocket).to.be.an.instanceof(Mock);
        expect(userSocket).to.be.an.instanceof(SocketUser);
        expect(userSocket).to.not.be.an.instanceof(User);

    });

    it('create SocketSystemResponse instance by SocketFactory', () => {
        const factory = new BasicFactory();
        let systemResponse = factory.createSystemResponse();

        const socketSettings: Array<any> = [];
        const socketFactory = new SocketFactory();
        let socketSystemResponse = socketFactory.createSystemResponse(socketSettings, systemResponse);


        expect(socketSystemResponse).to.be.an.instanceof(AMock);
        expect(socketSystemResponse).to.be.an.instanceof(Mock);
        expect(socketSystemResponse).to.be.an.instanceof(SocketSystemResponse);
        expect(socketSystemResponse).to.not.be.an.instanceof(SystemResponse);

    });

    it('create SocketExternalApi instance by SocketFactory', () => {
        const factory = new BasicFactory();
        let externalApi = factory.createExternalApi();

        const socketSettings: Array<any> = [];
        const socketFactory = new SocketFactory();
        let socketExternalApi = socketFactory.createExternalApi(socketSettings, externalApi);


        expect(socketExternalApi).to.be.an.instanceof(AMock);
        expect(socketExternalApi).to.be.an.instanceof(Mock);
        expect(socketExternalApi).to.be.an.instanceof(SocketExternalApi);
        expect(socketExternalApi).to.not.be.an.instanceof(ExternalApi);

    });
});