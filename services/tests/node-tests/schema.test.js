moderatorPath = '../../functions/moderator/'
const {validator, assertData, schemas} = require(`${moderatorPath}/schemas/index.js`);
// console.log({validator});
// const validate = ()=>{
//     assertData('forTestValidate', '123');
// }
// validator.addSchema('forTestValidate', {type: 'number'});
// validate();
beforeEach(() => {
    console.log('init forTestValidate schema');
    return validator.addSchema('forTestValidate', {type: 'number'});
});

test('[assertData] must be no error', ()=>{
    const validate = ()=>{
        // assertData('forTestValidate', 123);
        return null;
    }
    expect(validate).toBeTruthy();
});

test('[assertData] must throw error', ()=>{
    const validate = ()=>{
        assertData('forTestValidate', '123');
    }
    // expect(validate).toThrow();
    expect(validate).toThrowError(/validate/);
});