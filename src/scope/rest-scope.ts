export class RestScope {
    private static mocksScope: RestScope;
    private _mocks: any;

    protected constructor() {
    }

    public static getScope(): RestScope {
        if (!RestScope.mocksScope) {
            RestScope.mocksScope = new RestScope();
            RestScope.mocksScope._mocks = [];
        }
        return RestScope.mocksScope;
    }

    public static addMock(mock: any) {
        RestScope.getScope()._mocks.push(mock);
    }

    public get mocks() {
        if (!RestScope.mocksScope) {
            return RestScope.getScope()._mocks;
        }
        return RestScope.mocksScope._mocks;
    }
}