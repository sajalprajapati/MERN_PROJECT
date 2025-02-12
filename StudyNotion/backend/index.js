import express from 'express';
import { configDotenv } from 'dotenv';
import dbConnect from './config/database.config.js';
configDotenv();
const app=express();

const port=process.env.PORT ||3000;


app.listen(port,()=>{
    console.log(`the server is running at the port number `,port);
    console.log(`It is your conection string http://localhost:${port}`);
    console.log("Here is database connection",dbConnect());
})


app.get('/',(req,res)=>{
    res.send(`<div><h1>Hey StudyNotion is here !</h1></div>`)
})