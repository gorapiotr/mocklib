import {AMock} from "../model/amock";

export interface IFactory {
    createUser(): AMock;
    createSystemResponse(): AMock;
    createExternalApi():AMock;
}

export abstract class AFactory implements IFactory {
    constructor() {

    }

    public abstract createUser(): AMock;

    public abstract createSystemResponse(): AMock;

    public abstract createExternalApi(): AMock;
}

