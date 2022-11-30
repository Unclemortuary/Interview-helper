import fakeApi from '../_mockApi/fakeApi';

export const initApp = () => {
    if(FAKE_API) {
        fakeApi();
    }
};