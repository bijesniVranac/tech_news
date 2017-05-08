const express = require('express');
const axios = require('axios');

const port = process.env.PORT || 3000;
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));
//const port = process.env.PORT || 3000;
var catArray=['Ars Technica', 'Engadget', 'Hacker News', 'Recode', 'TechCrunch', 'TechRadar', 'The Next Web', 'The Verge'];
var pages =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

app.get("/", function(req,res){
  res.render('home', {catArray: catArray, pages:pages});
});

app.get("/a", function(req,res){
  var url='https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='Ars Technica';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/b", function(req,res){
  var url=' https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='Engadget';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});


app.get("/c", function(req,res){
  var url=' https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='Hacker News';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/d", function(req,res){
  var url='https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='Recode';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/e", function(req,res){
  var url='https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='TechCrunch';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});
app.get("/f", function(req,res){
  var url='https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='TechRadar';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/g", function(req,res){
  var url='https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='The Next Web';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/h", function(req,res){
  var url='https://newsapi.org/v1/articles?source=the-verge&sortBy=latest&apiKey=bb6d063981964c6c9015b0ff44586af7'
  axios.get(url).then((response)=>{
  if(response.data.status !== "ok"){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }
    var dataLe= response.data.articles.length;
    var data= response.data;
    var title='The Verge';
    res.render('index', {data:data, dataLe: dataLe, title: title});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.listen(port, function(){
    console.log("Server started...");
});
