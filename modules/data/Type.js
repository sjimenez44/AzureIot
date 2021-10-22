// Strategy
class Type {
  constructor(value) {
    this._value = value;
  }

  formatter() {
    return this.processValue();
  }
}

module.exports = Type;