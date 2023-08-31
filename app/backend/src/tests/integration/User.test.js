const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../api/app');
const { User } = require('../../database/models');

const { expect } = chai;

describe('Test route POST/user', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('User successfully register', async function () {
    const mockedUser = {
      id: 1,
      username: 'User Test Fake',
      password: '123456',
    };
    sinon.stub(User, 'create').resolves(mockedUser);

    const httpResponse = await chai.request(app).post('/user').send({
      username: 'User Test Fake',
      password: '123456',
    });

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(mockedUser);
  });
});
