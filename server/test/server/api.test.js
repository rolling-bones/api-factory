const request = require('supertest');

const baseURL = 'http://localhost:5000';

describe('GET /bob', () => {
  it('should return 200', async () => {
    const response = await request(baseURL).get('/bob');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
});
