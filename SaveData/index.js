const response = require('../network/response');

module.exports = async function (context, req) {
  if (req.body && req.body.sensortype) {
    if (req.body.value) {
      context.res = response.success(200, null);
    } else {
      context.res = response.error(400, null, 
        'Please insert the data value');
    }
  } else {
    context.res = response.error(400, null, 
      'Please define the type of the imput');
  }
}