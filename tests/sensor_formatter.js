const chai = require('chai');
const expect = chai.expect;

const Sensor = require('../modules/data/Sensor');
const Temperature = require('../modules/data/Temperature');
const Humidity = require('../modules/data/Humidity');

const sensor = new Sensor();

describe("Data test module: ", function() {
  describe("Check sensor type strategies: ", function() {
    it("Check the returned value using: Temperature strategie ", function() {
      let result = sensor.formatter(new Temperature(25));
      expect(result).to.equal('77.000');
    });
    it("Check the returned value using: Humidity strategie ", function() {
      let result = sensor.formatter(new Humidity(2048));
      expect(result).to.equal('50.000');
    });
  });
});