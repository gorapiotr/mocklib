import {Context, State} from "./server-state-chain";
import {Open} from "./open";

export class Locked implements State {
    public handle(context: Context): void {
        context.State = new Open();
    }

    get serverState(): boolean {
        return false;
    }
}