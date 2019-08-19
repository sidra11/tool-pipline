const expect  = require('chai').assert;
const app1 = require('../app1');

describe('app1',function(){
    it('app1 should return hello',function(){
        assert.equal(app1(),'hello');
    });
});
