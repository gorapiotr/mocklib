import {AMock} from "../model/amock";
import {Mock} from "../model/mock";

export interface IFactory {
    createUser(param?: any, mock?: any): AMock;

    createSystemResponse(params?: any, mock?: any): AMock;

    createExternalApi(params?: any, mock?: any): AMock;
}

export abstract class Factory implements IFactory {
    constructor() {

    }

    public abstract createUser(param?: any, mock?: any): AMock;

    public abstract createSystemResponse(param?: any, mock?: any): AMock;

    public abstract createExternalApi(param?: any, mock?: any): AMock;

    public create(mock:any) {

            let obj:Mock = new Mock();

            switch (mock['type']) {
                case 'user': {
                    obj = this.createUser();
                    break;
                }
                case 'system-response': {
                    obj = this.createSystemResponse();
                    break;
                }
                case 'external-rest': {
                    obj = this.createExternalApi();
                    break;
                }
            }

            obj.setPayload(mock['payload']);
            obj.setName(mock['name']);
            return obj;
    }
}

