let mongoose = require('mongoose')

let memberModel = new mongoose.Schema({
  name: String,
  regNo: {type:String, unique:true},
  faculty: {type:String, default:"Science"},
  email:{type:String, unique:true},
  // dateJoined:Date
})

module.exports = mongoose.model('Member', memberModel)