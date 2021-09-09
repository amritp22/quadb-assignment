const express=require("express");
const ejs = require("ejs");
const app=express();
const https = require('https');
const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.static("public"));
const url=`https://api.wazirx.com/api/v2/tickers`;

app.get("/",function(req,res){

async function fetch(){
  try {

         const stockData = await axios.get(url,{params: {_limit: 10}});

const sd=Object.keys(stockData.data).slice(0,10);

console.log(sd);
         res.render("index",{
              stockData:stockData.data,
             sd:sd
         })


     } catch (err) {
         console.error(err);
     }
   }
     fetch();

});

app.listen(process.env.PORT || 3000,function(){
  console.log("server started on port 3000");
});
