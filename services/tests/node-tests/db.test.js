moderatorPath = '../../functions/moderator/'
const {BaseDB} = require(`${moderatorPath}/db/basedb.js`);

beforeEach(() => {
    var db = BaseDB()    
    return db;
});

test('[baseDB] add data must be no error', ()=>{
    const add = ()=>{
        db = 
        return null;
    }
    expect(validate).toBeTruthy();
});

test('[baseDB] delete data must be no error', ()=>{
    const validate = ()=>{
        assertData('forTestValidate', '123');
    }
    
});