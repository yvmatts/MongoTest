const mocha = require('mocha');
const assert = require('assert');
const student = require('../student');
describe('Save',function(){

  it('Save a Record',function(done){

    var s = new student({
      name: 'Yash'
      //age: 23
    });

    s.save().then(function(){

      assert(s.isNew === false);
      done();
    });

  });

});
