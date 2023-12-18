const express = require("express")
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    // const klength = kidneys.length;

    // res.send("you have "+ klength + " kidney" )

    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
})

app.get("/", (req, res)=>{
    res.send("HII")
})

// global catch
app.use((err, req, res, next)=>{
    res.json({
        msg: "handling error"
    })
})
app.listen(3000, ()=>{
    console.log("Port listenig on 3000")
});