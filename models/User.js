const mongoose= require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  status: {type: Boolean, default: true}
})

module.exports = mongoose.model('User', userSchema)