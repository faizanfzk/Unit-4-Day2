const express=require("express")
 
// console.log(express())
const app=express();

app.get("/",function(req,res){
  
    res.send(" Hello");
});
app.get("/books",function(req,res){
    res.send( [
        {
            "name":"harry potter",
            "author":"JK Rowling",
            "id":"1"
        },
        {
            "name":"Programming with C",
            "author":"E-Balaguruswamy",
            "id":"2"
        },
        {
            "name":"Mathematics",
            "author":"RD Sharma",
            "id":"3"
        },
        {
            "name":"Physics",
            "author":"HC Verma",
            "id":"4"
        }
    ]);
});

app.listen(5000,()=>{
    console.log("Listening to port 5000");
});
