const Codes = require('./codes.json');
class ValidationError extends Error {
    constructor(message) {
      super(message); 
      this.name = this.constructor.name;
      this.ErrorCode = Codes.SchemaValidate;
    }
}

function Assert(condition, message){
    if(condition){
        throw new ValidationError(message);
    }
}

module.exports = {Assert};