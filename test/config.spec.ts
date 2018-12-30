import 'mocha';
import {Config} from "../src/config";
import {expect} from 'chai';

let fs: any = require("fs");
const PATH = './mocklib.json';

describe('Configuration', () => {

    it('create config singleton', () => {
        let config1 = Config.getInstance();
        let config2 = Config.getInstance();

        expect(config1 === config2).to.be.true;
    });

    it('configuration variable', () => {
        let config = Config.getInstance();
        const configurationFromFile = JSON.parse(fs.readFileSync(PATH, 'utf8'));

        expect(config.configuration).to.deep.equal(configurationFromFile);
    });

    it('check file-system ', () => {
        let sampleObject = {
            a: 1,
            b: 2,
            c: {
                x: 11,
                y: 22
            }
        };

        fs.writeFile("./test/object.json", JSON.stringify(sampleObject, null, 4), (err: any) => {
            if (err) {
                console.error(err);
                return;
            }
        });

        fs.readFile('./test/object.json', 'utf8', (err: any, data: any) => {
            if (err) throw err;
        });

        fs.unlink('./test/object.json', (err: any) => {
            if (err) throw err;
        });

    });
});