import got from 'got';

const response = await got('http://localhost:28139/', {
    username: '',
    password: 'some_password'
});
