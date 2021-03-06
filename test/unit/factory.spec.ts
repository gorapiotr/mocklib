import {expect} from 'chai';
import 'mocha';
import {BasicFactory} from "../../src/factory/basic-factory";
import {AMock} from "../../src/model/amock";
import {Mock} from "../../src/model/mock";
import {User} from "../../src/mocks/basic/user";
import {SystemResponse} from "../../src/mocks/basic/system-response";
import {ExternalApi} from "../../src/mocks/basic/external-api";

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

    it('create User instance with data', () => {

        let data: any = {
            "type": "user",
            "name": "test",
            "payload": {
                "a": "a",
                "b": "b"
            }
        };

        const factory = new BasicFactory();
        let user = factory.create(data);

        expect(user.getPayload()).to.eql(data['payload']);
        expect(user.getName()).to.eql(data['name']);
        expect(user).to.be.an.instanceof(User);
    });

    it('create SystemResponse instance with data', () => {

        let data: any = {
            "type": "system-response",
            "name": "test",
            "payload": {
                "a": "a",
                "b": "b"
            }
        };

        const factory = new BasicFactory();
        let systemResponse = factory.create(data);

        expect(systemResponse.getPayload()).to.eql(data['payload']);
        expect(systemResponse.getName()).to.eql(data['name']);
        expect(systemResponse).to.be.an.instanceof(SystemResponse);
    });
});