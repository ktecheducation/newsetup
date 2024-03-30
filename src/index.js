import mongoose from "mongoose"
import express  from "express";
import {dbname} from "./constants.js"
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
const app= express();
;(async ()=>{
     try{
        await  mongoose.connect(`${process.env.DB_URL}/${dbname}`)
        console.log("db connected")

        app.listen(process.env.PORT,()=>{
            console.log(`app is listenning onthe port number : ${process.env.PORT}`)
        })
     }catch(error){
        console.log("error ---------",error)
        console.log("db not connected")
     }
})()
