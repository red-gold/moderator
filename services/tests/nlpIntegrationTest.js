nlpIntegration
    .SentimentInsight({text: 'hello, world'})
    .then(insight=>{
        console.log({insight});
    })
    .catch(err=>{
        console.error(err);
    })
