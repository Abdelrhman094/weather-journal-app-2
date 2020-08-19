/* Global Variables */

const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey  =",us&APPID=81c7a29f0f603ad00a930a4096c5829c&units=metric";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//GET data
//getting data function to get api weather data
const apiData=async(baseURL,zipCode,apiKey)=>{
const res = await fetch(baseURL+zipCode+apiKey)
try {   
const data =await res.json();
return data;
}catch (error){  
console.log("error",error);
}   
}


//POST data 
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
try {    
const backData =await response.json();
console.log(backData);
return backData;
}catch(error){
    console.log("error",error);
}
}

//update the user interface with enterd feelings &api  weather
const updating =async()=>{
const request=await fetch('/all');
try {
const final=await request.json();
document.getElementById('date').textContent=("date:"+final[0].date);
document.getElementById('temp').textContent=("temperature:"+final[0].temp);
document.getElementById('content').textContent=("i feel :"+final[0].content+" ,today");

}    catch(error){
    console.log("error",error);
}
}

const generate = document.getElementById('generate');
generate.addEventListener('click',performAction);
function performAction(e){
const zipCode =document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
apiData(baseURL,zipCode,apiKey)
.then (function(data){
console.log(data);
postData('/add',{date:d, temp:data.main.temp,content:feelings})
updating();
})
};