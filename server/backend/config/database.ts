
import mongoose from 'mongoose'

// const URI = process.env.MONGODB_URL 

mongoose.connect("mongodb://localhost:27017/typesite",
(err) => {
  if(err) throw err;

  console.log('Mongodb connected....')})


// mongoose.connect(`${URI}`,
// (err) => {
//   if(err) throw err;

//   console.log('Mongodb connected....')})
