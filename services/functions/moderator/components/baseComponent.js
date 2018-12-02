const {assertData} = require('../schemas');
class BaseComponent{
    constructor(data, schema){
        assertData(schema, data);
        this.data = data;
    }
    getData(){
        return this.data;
    }
}
const obj = new BaseComponent("{}", "content.activity");
module.exports = {BaseComponent};

