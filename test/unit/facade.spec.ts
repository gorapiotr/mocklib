import {expect} from "chai";
import {Mocks} from "../helpers/mocks";
import {Mocklib} from "../../src/mocklib";

describe('Facade', () => {

    /**
     * todo: add assertions to testes
     */

    it('register mock', () => {
        let mocks = Mocks.users();

        const mocklib = new Mocklib();
        mocklib.registerMocks(mocks);
    });
});