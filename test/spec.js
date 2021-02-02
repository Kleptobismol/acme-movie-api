const { expect } = require('chai');
const { request } = require('supertest')

const app = require('supertest')(require('../app'))

describe('Test', () => {
    describe('Can Test', () => {
      it('passes a test', () => {
        expect(1).to.equal(1);
      });
    })
    describe('Handles Requests', () => {
        it('Can GET "/"', async() => {
            const response = await app.get('/')
            expect(response.status).to.equal(200)
        })
        it('Retrieves correct HTML from GET "/"', async() => {
            const response = await app.get('/')
            expect(response.text).to.equal('\n        <h1>Hello!</h1>\n        ')
        })
    })
  });