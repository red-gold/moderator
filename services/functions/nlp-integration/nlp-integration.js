'use strict';
const Configure = require('./moderator/moderator-system.json');
const {Post} = require('./moderator/components');
const {BaseStorage} = require('./moderator')
var admin = require("firebase-admin");
admin.initializeApp({
    projectId: admin.credential.applicationDefault(),
    databaseURL: "https://" + Configure.project_id + ".firebaseio.com"
});
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

class NlpIntegration{
    constructor(trainingSessionRecord){
        this.trainingSessionRecord = trainingSessionRecord;
    };
    static makeRequest(text){
        const document = { content: text, type: 'PLAIN_TEXT'};
        return {document} 
    };
    async SentimentInsight(content){
        const request = NlpIntegration.makeRequest(content.text);
        console.log({request});
        const results = await client.analyzeSentiment(request);    
        console.log({results});
        const sentiment = results[0].documentSentiment;
        return sentiment;
    }    
}

const nlpIntegration = new NlpIntegration();
module.exports = {nlpIntegration};
