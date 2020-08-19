require('dotenv').config()
const express = require('express');
// const morgan = require('morgan');
const app = express();

//middleware
app.use(express.json())

const PORT = process.env.PORT || 3005;

//retrieve all restaurants
app.get('/api/v1/restaurants',(req,res)=>{
    res.json({
        status:"success",
        data:{
            restaurants:['Makedoniko','Spitiko','Doggy Style']
            
        },
    })
})




//retrieve One restaurant
//TODO
app.get('/api/v1/restaurants/:id',(req,res)=>{
    res.json({
        id:req.params.id
    })
})

//Create Restaurant POST
app.post("/test", (req, res) => {
    // console.log(req.body);
    res.send("ok")

});

//Update Restaurant PUT
//TODO

//DETE Restaurant DELETE

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})