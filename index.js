const express = require("express");

const app = express();

function sum(n){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum +=i;
    }
    return sum;
}

app.get("/", function(req,res){
    const n = req.query.n;
    const s = sum(n);
    res.send("Hi there sum is"+ s);
})

app.listen(3000);