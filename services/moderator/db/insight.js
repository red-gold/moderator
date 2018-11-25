const {BaseDB} = require('./basedb');
class InsightDB extends BaseDB{
    constructor(){
        super();
    }
    
    list()
}
const insightDB = insightDB();
module.exports = {insightDB};