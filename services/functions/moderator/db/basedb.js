class BaseDB{
    constructor(firebaseAdmin){
        //TODO: make checking schema here
        this.dbClient = firebaseAdmin.storage();
    }
    list(id){

    }
    
    init(){

    }    
}
module.exports = {BaseDB};