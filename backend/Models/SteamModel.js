const mongoose = require('mongoose')
const {Schema} = mongoose;

const streamSchema = new Schema({
  id: Number,
  title: String, 
  description: String, 
  userId: String,
  email: String
})
let Streams;

try{
  Streams = mongoose.model("Streams")
} catch {
  Streams = mongoose.model("Streams", streamSchema )

}


module.exports = Streams;
