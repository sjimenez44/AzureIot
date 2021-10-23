const guid = require('node-uuid');
const Storage = require('azure-storage');
const config = require('../config');

const entityGen = Storage.TableUtilities.entityGenerator;
const storageClient = Storage.createTableService(config.connectionString);
const tableName = config.tableName;

/**
* Creates a data entity to be used in library calls based on provided parameters
* @ignore
*
* @param {string}  sensorId   Identifier of the sensor
* @param {string}  type       Type of the sensor
* @param {string}  scale      Scale of measurement
* @param {string}  value      Value sensed by the sensor
* @return {Object}
*/
function createDataEntityDescriptor(sensorId, type, scale, value) {
  const dataEntity = {
    PartitionKey: entityGen.String(sensorId),
    RowKey: entityGen.String(guid.v4()),
    SensorId: entityGen.String(sensorId),
    Type: entityGen.String(type),
    Scale: entityGen.String(scale),
    Value: entityGen.Double(value)
  };
  return dataEntity;
}

exports.savedata = async function(data) {
  const dataEntity = createDataEntityDescriptor(data.id, data.type, data.scale, data.value);
  storageClient.insertEntity(tableName, dataEntity, (error, result, response) => {
    if (error) {
      return false;
    }
  });
  return true;
};