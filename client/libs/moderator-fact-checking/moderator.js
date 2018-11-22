if(typeof require !== 'undefined'){
  var fetch = require("node-fetch");
  var tf = require('@tensorflow/tfjs');
  // var model = require('./model');
  var model = {}; 
} 
const Moderator = function(babWords){
  const _babWords = babWords;
  const tokenizer = text=>text.split(' ');
  const predict = (text)=>{
    return model.predict(text);
  }; 
  const train = ()=>{
    return model.train();
  }
  const rule = (text)=>{
      const tokens = tokenizer(text);
      console.log({tokens, badWords: _babWords});
      const badTokens = tokens
            .map(token=>[token, _babWords[token]]);
      return badTokens
              .filter(([token, badType])=>badType)
              .reduce((ss,[token, badType])=>{
                ss[token]=badType;
                return ss;
              }, {});
    };
  return {rule, predict, train};
}
const data_url = 'https://raw.githubusercontent.com/huynhnguyen/swearjar-node/master/lib/config/en_US.json';

const fetch_data = async (data_url)=>{
  // const rep = await fetch(data_url);
  // const res = await rep.json();
  res = {'suck': ['impolite'], 'tit':['sexual']}
  const babWords = res;
  moderator = Moderator(babWords);
  return {moderator};
}
fetch_data(data_url)
  .then(({moderator})=>{
    const content = 'this is tit';
    const moderatedContent = moderator.rule(content);
    console.log({moderatedContent});
    
  })
  .catch((error)=>{
    console.trace(error);
    console.error('this is error hanlder');
  });
