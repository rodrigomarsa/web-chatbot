const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../api/app');
const { Message } = require('../../database/models');

const { expect } = chai;

describe('Test route POST/messages', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('User successfully creates messages', async function () {
    const mockedMessage = [
      {
        content: 'Message Test Fake',
        from: 'User',
        id: 1,
        userId: 1,
      },
    ];
    sinon.stub(Message, 'create').resolves(mockedMessage);

    const httpResponse = await chai
      .request(app)
      .post('/messages')
      .send({
        messages: [
          {
            content: 'Message Test Fake',
            from: 'User',
            to: 'Bot',
          },
        ],
        userId: 1,
      });

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal([mockedMessage]);
  });
});
