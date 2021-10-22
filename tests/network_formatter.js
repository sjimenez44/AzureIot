const chai = require('chai');
const expect = chai.expect;

const response = require('../network/response');

describe("Network test formatter: ", function() {
  describe("Check success formatter: ", function() {
    it("Check the returned value using: success without message", function() {
      let result = response.success(200, null);
      expect(result.status).to.equal(200);
      expect(result.body).to.equal('Ok');
    });
    it("Check the returned value using: success without status", function() {
      let result = response.success(null, 'Accepted');
      expect(result.status).to.equal(200);
      expect(result.body).to.equal('Accepted');
    });
    it("Check the returned value using: success with status and message", function() {
      let result = response.success(200, 'Accepted');
      expect(result.status).to.equal(200);
      expect(result.body).to.equal('Accepted');
    });
    it("Check the returned value using: success without status and message", function() {
      let result = response.success(null, null);
      expect(result.status).to.equal(200);
      expect(result.body).to.equal('Ok');
    });
  });
  describe("Check error formatter: ", function() {
    it("Check the returned value using: error without message and details", function() {
      let result = response.error(400, null, null);
      expect(result.status).to.equal(400);
      expect(result.body.error.message).to.equal('Invalid format');
      expect(result.body.error.details).to.equal(null);
    });
    it("Check the returned value using: error without status, message and details", function() {
      let result = response.error(null, null, null);
      expect(result.status).to.equal(500);
      expect(result.body.error.message).to.equal('Internal error');
      expect(result.body.error.details).to.equal(null);
    });
    it("Check the returned value using: error with details", function() {
      let result = response.error(400, null, 'Missing values');
      expect(result.status).to.equal(400);
      expect(result.body.error.message).to.equal('Invalid format');
      expect(result.body.error.details).to.equal('Missing values');
    });
  });
});