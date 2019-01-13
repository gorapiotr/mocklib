export class Context {

    protected state: State;

    constructor(state: State) {
        this.state = state;
    }

    get State(): State {
        return this.state;
    }

    set State(state: State) {
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

export interface State {
    handle(context: Context): void;

    readonly serverState: boolean;
}