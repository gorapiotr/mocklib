import {Config} from "./config";
import {Mock} from "./model/mock";
import 'reflect-metadata';

export class Mocklib {

    private mocks: Mock[];
    private config: Config;

    constructor() {
        this.config = Config.getInstance();
        this.mocks = [];
    }

    public registerMocks(): void {
    }

    public registerMocksSocket() {
    }

    public connectToSocket() {
    }

    public disconnectSocket() {
    }
}