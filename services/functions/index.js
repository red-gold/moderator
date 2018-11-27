const functions = require('firebase-functions');
const {nlpIntegraton} = require('./nlp-integration');
exports.records = functions.https.onRequest((request, response) => {
    const insight = await nlpIntegraton.SentimentInsight({text: 'hello, world'});
    response.send(insight);
});

exports.insights = functions.https.onRequest((request, response) => {
    response.send({'abc':'cac'});
});

exports.contents = functions.https.onRequest((request, response) => {

});

exports.trainingSessionRecordTrigger = functions.https.onRequest((request, response) => {

});


