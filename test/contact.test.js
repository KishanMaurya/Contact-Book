const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect

chai.use(chaiHttp)
describe('contact', () => {

  it('add contact data', (done) => {
    chai.request("http://localhost:3000")
      .post('/contact')
      .send({
        name: 'test1 demo',
        email: 'test1@gmail.com',
        contact: '8989898989',
        created_at : '2021-05-27 17:30:35.375'
      })
      .end(async (err, res) => {
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.be.an('object')
        done();
      })
      setTimeout(done, 300);
  });

  it('update contact data', (done) => {
    chai.request("http://localhost:3000")
      .put('/contact')
      .set('content-type', 'application/json')
      .send({
        id : 11,
        name: 'test2',
        email: 'test2@gmail.com',
        contact: '951195596',
        updated_at : '2021-05-27 17:30:35.375'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array')
        done();
      });
  });

  it('pagination 0 to 10', (done) => {
    chai.request("http://localhost:3000")
      .get('/contact')
      .set('content-type', 'application/json')
      .query({ 
        skip : 0,
        limit : 10
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object')
        done();
      });
  });

  it('search data by name and email', (done) => {
    chai
      .request("http://localhost:3000")
      .get('/contact/search')
      .set('content-type', 'application/json')
      .query({
        name: 'kishan maurya',
        email: 'kkmaurya.0095@gmail.com',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object')
        done();
      });
  });


  it('delete contact by id', (done) => {
    chai.request("http://localhost:3000")
      .delete('/contact')
      .set('content-type', 'application/json')
      .query({
        contact_id: 2
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object')
        done();
      });
  });


})