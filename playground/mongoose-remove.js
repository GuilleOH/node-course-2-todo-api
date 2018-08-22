const {ObjectID} = require('mongodb');


const {mongoose}  = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User}  = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove('5b7ab85e572539f3d454fae2').then((todo)=>{
  console.log(todo);
});
