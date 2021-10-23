const responsef = require('../network/response');
const process = require('./processdata');
const save = require('./savedata');

module.exports = async function (context, req) {
  if (req.body && req.body.type) {
    if (req.body.id) {
      if (req.body.value) {
        const sensor = process.processdata(req.body);
        const result = await save.savedata(sensor);
        (result)
          ? context.res = responsef.success(201, null)
          : context.res = responsef.error(400, null, null);
      } else {
        context.res = responsef.error(400, null, 
          'Please insert the data value');
      }
    } else {
      context.res = responsef.error(400, null, 
        'Please define the sensor id');
    }
  } else {
    context.res = responsef.error(400, null, 
      'Please define the type of the imput');
  }
}