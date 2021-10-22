const Sensor = require('../modules/data/Sensor');
const Temperature = require('../modules/data/Temperature');
const Humidity = require('../modules/data/Humidity');

const sensorrcv = new Sensor();

exports.processdata = function(message) {
  let sensor = { value: 0, format: 'none' };
  switch (message.type) {
    case 'temperature':
      sensor.value = sensorrcv
        .formatter(new Temperature(message.value));
      sensor.format = 'fahrenheit';
      break;
    case 'humidity':
      sensor.value = sensorrcv
        .formatter(new Humidity(message.value));
      sensor.format = 'percentage';
      break;
    default:
      break;
  }
  return sensor;
}