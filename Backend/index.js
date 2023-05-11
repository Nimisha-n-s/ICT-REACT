//1.import express
 const express=require("express");

 //2.initialising
 const app = new express()
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());

 //3.creating api
 app.get('/', (req, res ) => {
    res.json("Hello welcome to Backend")
 })
app.get('/view', (req, res ) => { //url,callback fn.
    res.json("Welcome to nodejs")
})
app.post('/signup', (req, res ) => {

res.send(`${req.body.name} - ${req.body.age}`)
})

 //4.setting port
  app.listen(3005,()=>{
    console.log("port 3005 is running");
  })
