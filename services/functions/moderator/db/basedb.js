const systemConfigure = require('../moderator-system.json');
class BaseDB{
    
    constructor(firebaseAdmin, recordType){
        //TODO: make checking schema here
        this.firestore = admin.firestore();
        this.collectionType = this.systemConfigure['db'][recordType];
        this.collection = firestore.collections(this.collectionType);
    }
    list(trainingSessionId){
        var doc = this.collection.doc(trainingSessionId);
    }
    
    add(trainingSessionId,){

    }    
}
module.exports = {BaseDB};