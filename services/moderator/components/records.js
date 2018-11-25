const TrainSessionSpec = require('./schemas/trainSession.json');

function TrainSession(data){
    this.data = data;
    return this;
}

console.log({TrainSession});
module.exports = {TrainSession};