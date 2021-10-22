const response = require('../network/response');

module.exports = async function (context, req) {
  if (req.body && req.body.type) {
    if (req.body.value) {
      const sensor = process.processdata(req.body);
      const toSend = {
        num: 1,
        sensor
      };
      context.res = response.success(200, toSend);
    } else {
      context.res = response.error(400, null, 
        'Please insert the data value');
    }
  } else {
    context.res = response.error(400, null, 
      'Please define the type of the imput');
  }
}