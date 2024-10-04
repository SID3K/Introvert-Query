const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const cors = require('cors');

const questionRoutes = require('./api/routes/questionRoutes');

const app = express();

const PORT = 3000;
dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("succesfully connected to MongoDB Atlas");
})
.catch((error)=>{
    console.log(`error: ${error}`);
});

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
app.use(cors(corsOptions));


app.get('/',(req,res)=>{
    res.send(`hello port ${PORT}`);
})

app.get('/:id',(req,res)=>{
    res.send(`hello port ${req.params.id}`);
})

app.use('/question', questionRoutes);

app.listen(PORT,()=>{
    console.log(`server running successfullly at ${PORT}`);
});