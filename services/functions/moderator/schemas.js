var djv = require('djv');
const {Assert} = require('./utils/assertion.js');
const validator = new djv({version: 'draft-06'});
const schemas = ['content.activity'];
schemas.forEach(schema=>{
    validator.addSchema(schema, require(`./schemas/${schema}.json`));
})
function assertData(schema, data){
    Assert(validator.validate(schema, data)!==undefined, 
        `${JSON.stringify(data)} fail to validate with ${schema}`);
}
module.exports = {validator, assertData, schemas};