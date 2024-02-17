const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const DataModel = require('./models/DataModel'); // Import your Mongoose model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_database_uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://rexsparsh:sparsh@data.k2qwayp.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/',(req,res)=>{
    res.send("hello world");
    console.log("hello world");

})


app.get('/api/data', async (req, res) => {
   try {
      const data = await DataModel.find();
      res.json(data);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
   }
});


app.post('/api/data', async (req, res) => {
    try {
        // console.log("data ")
        console.log(req.body);
       const newData = req.body; // Assuming the data to be inserted is sent in the request body
 
       // Insert multiple documents into the collection
       const createdData = await DataModel.insertMany(newData);
        
       res.json([...createdData]);
    } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Server Error' });
    }
 });

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
