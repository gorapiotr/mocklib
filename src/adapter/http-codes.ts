import {Codes} from "./codes";

export class HttpCodes implements HttpCodesAdapter{

    checkCode(code: string):boolean {
        let codes: Codes = new Codes();
        return codes.codes.includes(code);
    }
}

export interface HttpCodesAdapter {
    checkCode(code: string): boolean;
}