const {ObjectID} = require('mongodb');


var {mongoose}  = require('./../server/db/mongoose');
var {Todo}  = require('./../server/models/todo');
var {User}  = require('./../server/models/user');

var id ='5b3384453d41ea265e93bd14';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log('Todo by id', todo);
// }).catch((e)=>console.log(e));

// User.findOne({
//   _id: id
// }).then((user) =>{
//   console.log('User', user);
// });

User.findById(id).then((user) =>{
  if(!user){
    return console.log("Id not found");
  }
  console.log('User by id', user);
}).catch((e)=>console.log(e));
