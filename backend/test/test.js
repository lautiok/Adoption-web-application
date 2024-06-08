import app from '../src/index.js';
import request from 'supertest';

describe('GET /api/pets', () => {
     test('should return 200', async () => {
        const response = await request(app).get('/api/pets').send();
        expect(response.statusCode).toBe(200);
     })

     test ('should respond with an array of pets', async () => {
        const response = await request(app).get('/api/pets').send();
        expect(response.body).toBeInstanceOf(Array);
     })
})

const newPets = {
    name: 'test',
    age: 1,
    gender: 'test',
    type: 'test',
    description: 'test',
    status: 'test'
}

describe('POST /api/pets', () => {
   describe('give a new pet', () => {
      test('should respond with a content-type of application/json', async () => {
         const response = await request(app).post('/api/pets').send(newPets);
         expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
      })
   })

   describe('give an invalid pet', () => {
      test('should return 400', async () => {
         const fields = [
            {},
            { name: 'test' },
            { age: 1 },
            { gender: 'test' },
            { type: 'test' },
            { description: 'test' },
            { status: 'test' },
         ]
         for(const body of fields) {
            const response = await request(app).post('/api/pets').send(body);
         expect(response.statusCode).toBe(400);
         }
      })
   })
})

describe('GET /api/adopted', () => {
    test('should return 200', async () => {
        const response = await request(app).get('/api/adopted').send();
        expect(response.statusCode).toBe(200);
    })

    test ('should respond with an array of adopted', async () => {
        const response = await request(app).get('/api/adopted').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})

const newAdopted = {
   name: 'Familia de Ciro',
   image : 'test'
}

describe('POST /api/adopted', () => {
   describe('give a new adoption', () => {
      test('should respond with a content-type of application/json', async () => {
         const response = await request(app).post('/api/adopted').send(newAdopted);
         expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
      })
   })

   describe('give an invalid adoption', () => {
      test('should return 400', async () => {
         const fields = [
            {},
            { name: 'test' },
            { email: 'test' },
            { phone: 'test' },
            { message: 'test' },
         ]
         for(const body of fields) {
            const response = await request(app).post('/api/adopted').send(body);
         expect(response.statusCode).toBe(400);
         }
      })
   })
})