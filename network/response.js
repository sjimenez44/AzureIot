//-- Diccionario de mensajes segun codigo de estado
const statusMessages = {
    '200': 'Ok',
    '201': 'Created',
    '202': 'Accepted',
    '204': 'No content',
    '301': 'Moved Permanently',
    '400': 'Invalid format',
    '401': 'Unauthorized',
    '402': 'Payment required',
    '403': 'Forbidden',
    '404': 'Not found',
    '406': 'Not acceptable',
    '409': 'Conflict',
    '429': 'Too many requests',
    '500': 'Internal error',
    '520': 'Operation failed'
  }
  
  //-- Realiza un formato para las respuestas satisfactorias
  exports.success = function (status, message) {
    let statusCode = status;
    let statusMessage = message;
    
    //-- Si el estado no esta definido toma por defecto 200
    if (!status) {
      statusCode = 200;
    }
  
    /* 
      Si el mensaje no esta definido por defecto toma el
      el valor del diccionario
    */
    if (!message) {
      statusMessage = statusMessages[statusCode];
    }
  
    return {
      status: statusCode,
      body: statusMessage,
    }
  }
  
  //-- Realiza un formato para las respuestas erroneas
  exports.error = function (status, message, details) {
    let statusCode = status;
    let statusMessage = message;
    let statusDetails = details;
    
    //-- Si el estado no esta definido toma por defecto 500
    if (!status) {
      statusCode = 500;
    }
  
    /* 
      Si el mensaje no esta definido por defecto toma el
      el valor del diccionario
    */
    if (!message) {
      statusMessage = statusMessages[statusCode];
    }
  
    return {
      status: statusCode,
      body: {
        error: {
          message: statusMessage,
          details: statusDetails
        }
      }
    }
  }