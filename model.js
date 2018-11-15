// const oneHotEncode = (code, size=CHAR_EN_SIZE)=> [...Array(size)].map((d,i)=>i===code|0);
//   const buildModel = ()=>{
//     // Train a simple model:
//     const model = tf.sequential();
//     model.add(tf.layers.lstm({units: 100, activation: 'relu', inputShape: [10]}));
//     model.add(tf.layers.dense({units: 1, activation: 'linear'}));
//     model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
//     return model;
//     const xs = tf.randomNormal([100, 10]);
//     const ys = tf.randomNormal([100, 1]);

//     model.fit(xs, ys, {
//       epochs: 100,
//       callbacks: {
//         onEpochEnd: async (epoch, log) => {
//           console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//         }
//       }
//     });
//   }
//   const train = ()=>{
//     const badTokens = Object.keys(this._babWords);
//     codes = badTokens.map(token=>{
//       return token.split('').map((char, index)=>{
//         return oneHotEncode(char.charCodeAt(0));
//       });
//     });
//     console.log(codes);
//     console
//   };
// const CHAR_EN_SIZE = 3;
var tf = require('@tensorflow/tfjs');
const model = tf.sequential();
model.add(tf.layers.lstm({units: 3}));
const output = model.apply(tf.randomNormal([1, 10,3]))
console.log(JSON.stringify(output));