const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  age: Number,
});

const Student = mongoose.model('studentModel',StudentSchema);

module.exports = Student;
