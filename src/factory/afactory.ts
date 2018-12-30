import {AMock} from "../model/amock";
import {Mock} from "../model/mock";

export interface IFactory {
    createUser(param?: any, mock?: any): AMock;

    createSystemResponse(params?: any, mock?: any): AMock;

    createExternalApi(params?: any, mock?: any): AMock;
}

export abstract class AFactory implements IFactory {
    constructor() {

    }

    public abstract createUser(param?: any, mock?: any): AMock;

    public abstract createSystemResponse(param?: any, mock?: any): AMock;

    public abstract createExternalApi(param?: any, mock?: any): AMock;

    public create(mock:any) {

            let obj:Mock = new Mock();

            switch (Object.keys(mock)[0]) {
                case 'user': {
                    obj = this.createUser();
                    break;
                }
                case 'system-response': {
                    obj = this.createSystemResponse();
                    break;
                }
                case 'external-api': {
                    obj = this.createExternalApi();
                    break;
                }
            }

            obj.setPayload(mock[Object.keys(mock)[0]]);
            return obj;
    }
}

