import 'mocha';
import {expect} from 'chai';
import {RestInit} from "../../src/init/rest-init";

describe('Init (Template Method)', () => {

    it('basic test', () => {

        let restInit = new RestInit();

        restInit.checkConnection();

        expect([]).to.be.an('array');
    });

});