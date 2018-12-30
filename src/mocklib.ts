import {Config} from "./config";
import {BasicFactory} from "./factory/basic-factory";
import {Mock} from "./model/mock";

export class Mocklib {

    private mock: Mock;

    constructor() {
        let config = Config.getInstance();
        this.mock = new Mock();
    }

    public registerMocks(mock:any): void {

        const factory = new BasicFactory();
        this.mock = factory.create(mock);
    }

    public runSocketServer(): void {

    }
}