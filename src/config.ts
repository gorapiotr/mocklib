var fs = require('fs');

export class Config {

    private static config: Config;
    private _configuration: any;
    private static PATH = './mocklib.json';

    private constructor() {
    }

    public static getInstance(): Config {
        if (!Config.config) {
            Config.config = new Config();
            Config.config._configuration = this.getConfigurationFromFile();
        }
        return Config.config;
    }

    public get configuration() {
        if (!Config.config) {
        return Config.getInstance()._configuration;
        }
        return Config.config._configuration;
    }

    private static getConfigurationFromFile() {
        return JSON.parse(fs.readFileSync(this.PATH, 'utf8'));
    }
}