class SentimentInsight extends BaseComponent{
    constructor(data){
        super(data, ''); 
        this.data = data;
    }
    toData(){
        return this.data;
    }
}