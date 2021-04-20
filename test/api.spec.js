const express = require('express');
const request = require('supertest');
const app = require('../src/routes')(express());

describe('The health check', () => {
  it('Returns a JSON payload and a 200 success code if the app is online', () => request(app)
    .get('/info/health')
    .expect('Content-Type', /json/)
    .expect(200));
});
