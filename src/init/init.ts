export abstract class ServerInit implements iInit {

    public run(): void {
        this.checkConnection();
        this.registerMocks();
        this.registerMocksOnServer();
    }

    abstract checkConnection(): void;

    abstract registerMocks(): void;

    abstract registerMocksOnServer(): void;
}

export interface iInit {
    run(): void

    checkConnection(): void;

    registerMocks(): void;

    registerMocksOnServer(): void;
}