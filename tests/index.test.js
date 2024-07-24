const request = require('supertest');
const app = require('../src/index'); // Substitua '../app' pelo caminho correto do seu arquivo principal da aplicação

describe('GET /users', () => {
    it('Deve retornar uma lista de usuários', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('users');
        expect(response.body.users).toBeInstanceOf(Array);
    });
});
