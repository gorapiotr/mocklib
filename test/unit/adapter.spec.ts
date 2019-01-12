import 'mocha';
import {expect} from 'chai';
import {Codes} from "../../src/adapter/codes";
import {HttpCodes} from "../../src/adapter/http-codes";

describe('Adapter', () => {

    it('codes is array', () => {
        let codes: Codes = new Codes();

        expect(codes.codes).to.be.an('array');
    });

    it('adapter checkCode return true', () => {
        let codesAdapter: HttpCodes = new HttpCodes();

        const val = codesAdapter.checkCode('200');

        expect(val).to.equal(true);
    });

    it('adapter checkCode return false', () => {
        let codesAdapter: HttpCodes = new HttpCodes();

        const val = codesAdapter.checkCode('130');

        expect(val).to.equal(false);
    });


});