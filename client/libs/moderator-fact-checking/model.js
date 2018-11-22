var tf = require('@tensorflow/tfjs');
tf = require('@tensorflow/tfjs-node');
const CHAR_EN_SIZE = 3;
const oneHotEncode = (code, size=CHAR_EN_SIZE)=> [...Array(size)].map((d,i)=>i===code|0);
const tokenEncode = (token, encodeLen=10)=>{
    const charToken = token.spit('')
    const padCharToken = [...charToken, [...Array(encodeLen - charToken.length).fill(-1)]];
    return padCharToken.map(c=>c.charCodeAt(0));
};
const model = tf.sequential();
model.add(tf.layers.inputLayer({inputShape: [5,3]}));
model.add(tf.layers.lstm({units: 3}));
model.add(tf.layers.dense({units: 2, activation: 'sigmoid'}));

console.log(model.summary());
const input = tf.randomNormal([5, 5, 3]);
const label = tf.variable(tf.tensor([[0, 1], 
                                     [1, 0], 
                                     [0, 1], 
                                     [1, 0],
                                     [0, 1]], shape=[5, 2]));
model.predict(input).print();
const LR = 0.05;
const optimizer = tf.train.sgd(LR);
model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
});
const train = async () =>{
    try{
        var hist = await model.fit(input, label, 
            {batchSize: 5, validationData: [input, label], epochs:1});
        console.log(hist);
        
    }
    catch(err){
        console.error(err);
    }
}
var fs = require('fs');
const readData = (fileName='./EN_moderator.json`')=>{
    let raw = fs.readFileSync('EN_moderator.json');
    return JSON.parse(raw);
}
badWords = readData();
console.log();
const saveModel = (weights, fileName='model.modle')=>{
    fs.writeFileSync(fileName, JSON.stringify(weights));
}
saveModel({'abc': Array.from([1,2,3])});

train().then(()=>{
    model.predict(input).print();
    const modelWeight = model.getWeights();
    for(let w of modelWeight){
        const getDat = async (w)=>{
            const dat = await w.data();
            saveModel(Array.from(dat),'./save/'+w.name.replace('/','_')+'.json');
            w.weights
        }
        const dat = getDat(w);
    }
}).then(()=>{
    console.log('this is then');
    
});