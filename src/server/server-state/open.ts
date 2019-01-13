import {Context, State} from "./server-state-chain";
import {Locked} from "./locked";

export class Open implements State {
    public handle(context: Context): void {
        context.State = new Locked();
    }

    get serverState(): boolean {
        return true;
    }
}