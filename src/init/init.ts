export abstract class ServerInit implements iInit {

    public run(): void {
        this.checkConnection();
    }

    abstract checkConnection(): void;

    abstract registerMocks(): void;

    abstract checkMocks(): void;

    abstract registerMocksOnServer(): void;
}

export interface iInit {
    run(): void

    checkConnection(): void;

    registerMocks(): void;

    checkMocks(): void;

    registerMocksOnServer(): void;
}