const express = require("express");
const app = express();

const users = [{
    name: "sur",
    kidenies: [ {
        healthykidney: true
    }]
}]

app.get("/", function(req,res){
    const sur = users[0].kidenies;
    let healthykidneynum = 0;
    const totalkidney = sur.length;
    for(let i=0;i<totalkidney;i++){
        if(sur[i].healthykidney){
            healthykidneynum= healthykidneynum + 1;
        }
    }
    const unhelthykidney = totalkidney - healthykidneynum;

    res.json({
        totalkidney,
        healthykidneynum,
        unhelthykidney
    })
})

app.listen(3000);