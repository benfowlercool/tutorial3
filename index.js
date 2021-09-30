/* 
const sum = (num1, num2) => {
    return num1 + num2;
}
const result = sum(2, 3);
console.log (result);

const fs = require('fs');
const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "I love Node")
    } catch (err) {
        console.log(err);
    }
}
generateFile();

const http = require('http');
http.createServer(function (req, res){
    res.write("Server has begun, welcome.");
    res.end();
}).listen(8080);

const currDate = require("./my-module");
const date = currDate();
console.log(date);
*/

//setting up express to host 
const express = require('express');

const app = express();

const port = 9000;

//API and urls
app.get('/', (req, res) => {
  res.send("I love Express.");  
});

app.get('/api/cats', (req, res) => {

    // call to db

    // return dummy data
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];

    //sending a response should be in json
    res.send(JSON.stringify(cats));
});

app.get('/api/icecream', (req, res) => {

    // call to db

    // return dummy data
    const icecream = ["vanilla", "chocolate", "strawberry"];

    //sending a response should be in json
    res.send(JSON.stringify(icecream));
});

app.listen(port, () => {
    console.log("Listening on port", port);
});