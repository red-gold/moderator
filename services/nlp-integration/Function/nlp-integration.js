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
console.log(Configure);
function NlpIntegration(trainingSessionRecord){
    this.trainingSessionRecord = trainingSessionRecord;
    const make_request = (text)=>{
        const document = { content: text, type: 'PLAIN_TEXT'};
        return {document} 
    }
    const InsightPipeLine = async (content)=>{

    }    
    const SentimentInsight = async (content)=>{
        const request = make_request(content.text);
        const results = await client.analyzeSentiment(request);    
        console.log({results});
        const sentiment = results[0].documentSentiment;
        return sentiment;
    }    
    return {ExtractionEntities}
}

const nlpIntegration = NlpIntegration();
nlpIntegration.ExtractionEntities({text: 'hello, world'})
    .then(insight=>{
        console.log({insight});
    });
