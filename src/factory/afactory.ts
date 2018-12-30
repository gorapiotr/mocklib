import {AMock} from "../model/amock";

export interface IFactory {
    createUser(param?: any, mock?: any): AMock;
    createSystemResponse(params?: any, mock?: any): AMock;
    createExternalApi(params?: any, mock?: any):AMock;
}

export abstract class AFactory implements IFactory {
    constructor() {

    }

    public abstract createUser(param?: any, mock?: any): AMock;

    public abstract createSystemResponse(param?: any, mock?: any): AMock;

    public abstract createExternalApi(param?: any, mock?: any): AMock;
}

