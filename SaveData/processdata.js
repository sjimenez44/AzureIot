const Sensor = require('../modules/data/Sensor');
const Temperature = require('../modules/data/Temperature');
const Humidity = require('../modules/data/Humidity');

const sensorrcv = new Sensor();

exports.processdata = function(message) {
  let sensor = { id: message.id, type: null, scale: null, value: 0 };
  switch (message.type) {
    case 'temperature':
      sensor.type = 'temperature';
      sensor.scale = 'fahrenheit';
      sensor.value = sensorrcv
        .formatter(new Temperature(message.value));
      break;
    case 'humidity':
      sensor.type = 'humidity';
      sensor.scale = 'percentage';
      sensor.value = sensorrcv
        .formatter(new Humidity(message.value));
      break;
    default:
      break;
  }
  return sensor;
}