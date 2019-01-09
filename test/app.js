var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(function(done){

  mongoose.connect('mongodb://localhost/test');
  mongoose.connection.once('open',function(){
    console.log('Connected');
    done();
  }).on('error',function(error){
    console.log(error);
  });

});

beforeEach(function(done){

  mongoose.connection.collections.studentModels.drop(function(){
    done();
  });

});
