const request = require('supertest');
const app = require('../src/index');

describe('Healthcheck', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/v1/healthcheck');
    expect(res.statusCode).toEqual(200);
  });
});
