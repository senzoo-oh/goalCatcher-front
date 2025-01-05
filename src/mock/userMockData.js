import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockUser = { id: '1', email: 'aaa@goalCatcher.com', nickname: 'goalCatcher' };

const mock = new MockAdapter(axios , { delayResponse: 200 });

mock.onGet('/user').reply(200, mockUser);

export const fetchUser = async() => {
    try {
        console.log('/user API 호출 시작');
        const response = await axios.get('/user');
        console.log('/user API 호출 완료');
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.error('API 호출 중 오류 발생: ', error);
        throw error;
    }
};