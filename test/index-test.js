const chai = require('chai')
const User = require('../../app/models/user')
const supertest = require('supertest')
/* ADD ME! */
const app = require('../app')

const expect = chai.expect

describe('app', function() {
  describe('up', function() {
    it('is a function', function() {
      expect(app.up).to.be.an.instanceof(Function)
    })
  })
})

describe('User', function() {
  let transaction;
 
  beforeEach(done => {
    bookshelf.transaction(t => {
      transaction = t
      done()
    })
  })
 
  afterEach(function() {
    return transaction.rollback()
  })
 
  it('saves a record to the database')
})