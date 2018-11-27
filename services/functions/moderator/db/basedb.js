class BaseDB{
    constructor(firebaseAdmin){
        //TODO: make checking schema here
        this.dbClient = firebaseAdmin.storage();
    }
    init(){

    }    
}
module.exports = {BaseDB};