import 'mocha';
import {expect} from 'chai';
import {Context} from "../../src/server/server-state/server-state-chain";
import {Open} from "../../src/server/server-state/open";

describe('Server state', () => {

    it('change state', () => {
        let context: Context = new Context(new Open());
        expect(context.State.serverState).to.equal(true);
        context.request();
        expect(context.State.serverState).to.equal(false);
        context.request();
        expect(context.State.serverState).to.equal(true);
        context.request();
        expect(context.State.serverState).to.equal(false);
    });
});