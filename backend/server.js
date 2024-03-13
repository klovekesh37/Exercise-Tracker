const express=require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const Router=express.Router();
require('dotenv').config();

const app=express();
const port= process.env.PORT || 8090;

app.use(cors());
app.use(express.json()); //body parser not needed in new version

// mongoose DB connection
//mongodb+srv://klovekesh37:NG7tSoP5ZA8Bl8iW@cluster0.0mfxvbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//klovekesh37
//NG7tSoP5ZA8Bl8iW
const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true});
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connected successfully');
})


const excerciseRouter= require('./routes/excercise');
const userRouter=require('./routes/user');

app.use('/excercises',excerciseRouter);
app.use('/users',userRouter);

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});

