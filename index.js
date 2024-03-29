const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

// Create a Schema object
const Schema = mongoose.Schema;
const mySchema = new Schema({
  name: {type: String, required: true},
  studentID:{type:String,required: true}
})

// Create a Model object
const Myself = mongoose.model("w24students",mySchema)

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form

  const URI = req.body.myuri;
  // connect to the database and log the connection
  mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log("Connected To MongoDB server");
}).catch((error) => {
  console.log("Error connecting to MongoDB " + error);
});

const newmyself = new Myself({
    name:"Zoia Kiseleva",
    studentID:"300361944"
})
newmyself.save().then(()=>res.send(`<h1>Document  Added</h1>`))


  // add the data to the database

  // send a response to the user
  
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
