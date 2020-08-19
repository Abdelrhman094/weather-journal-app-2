// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser');
//here requires body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3030; 
//creating server port
const server =app.listen(port,listening);
function listening (){
    console.log('server running');
    console.log("running on localhost "+port)
    //console.log to the callback function to make sure server is running
};
app.get("/all",getData);
 function getData (req,res){
    res.send(projectData);
    
projectData = [];
};

//setting post route 
app.post("/add",postData);
function postData(req,res){
    console.log(req.body);
 newObject = {
    date:req.body.date,
    temp:req.body.temp,
    content:req.body.content
}
projectData.push(newObject);
}

