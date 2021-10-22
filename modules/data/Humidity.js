const Type = require('./Type');

class Humidity extends Type {
  processValue() {
    return ((this._value / 4096.0) * 100.0).toFixed(3);
  }
}

module.exports = Humidity;