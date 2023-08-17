const request = require('supertest');
const app = require('../src/app');
const { conn } = require('../src/db');

describe('Test de integración del endpoint de dogs', () => {
  beforeAll(async () => {
    await conn.authenticate();
  });

  afterAll(async () => {
    await conn.close();
  });

  describe('GET /dogs', () => {
    it('Debería responder con un array de perros y un status 200', async () => {
      const res = await request(app).get('/dogs');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });


});
