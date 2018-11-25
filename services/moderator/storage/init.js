var { BaseStorage } = require('./baseStorage.js');

class DataSet extends BaseStorage{
    constructor(datasetName){
        super(datasetName);
    }
    
    add(){

    }
    update(){

    }
    list(){

    }
    delete(){

    }
}

var dataset = new DataSet('abc');
console.log({dataset});