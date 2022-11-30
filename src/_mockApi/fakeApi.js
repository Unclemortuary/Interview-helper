import stubData from './stabData.json';
import { DATA_URL } from '../modules/resources';

function initFakeApi() {
    window.fetch = function(url, options) {
        return new Promise((resolve, reject) => {
            setTimeout(() => handleRequest(url), 500);

            function handleRequest(url) {
                switch (url) {
                    case DATA_URL:
                        dataRequestExecution();
                        break;
                    default:
                        break;
                }
            }

            function dataRequestExecution() {
                resolve({ ok: true, json: () => Promise.resolve(stubData)})
            }
        }
    )};
};

export default initFakeApi;