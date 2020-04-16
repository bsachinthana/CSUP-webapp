let mongoose = require('mongoose')

let memberModel = new mongoose.Schema({
  regNo: {type:String, unique:true},
  name: String,
  faculty: {type:String, default:"Science"},
  dateJoined:Date,
  designations:[{
    position:String,
    year: Number
  }]
})

module.exports = mongoose.model('Member', memberModel)