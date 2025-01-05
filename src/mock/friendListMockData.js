import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockFriendList = [
    { id: '1', email: 'aaa@goalCatcher.com', nickname: 'goalCatcher1' },
    { id: '2', email: 'bbb@goalCatcher.com', nickname: 'goalCatcher2' },
    { id: '3', email: 'ccc@goalCatcher.com', nickname: 'goalCatcher3' }
];

const mock = new MockAdapter(axios);

mock.onGet('/friendList').reply(200, mockFriendList);

export const fetchFriendList = async() => {
    try {
        const response = await axios.get('/friendList');
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.error('API 호출 중 오류 발생: ', error);
        throw error;
    }
};