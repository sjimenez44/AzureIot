const Type = require('./Type');

class Temperature extends Type {
  processValue() {
    return ((this._value * 9.0/5.0) + 32.0).toFixed(3);
  }
}

module.exports = Temperature;