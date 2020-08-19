require('dotenv').config()
const express = require('express');

const db = require('./db');
const app = express();

//middleware
app.use(express.json())

const PORT = process.env.PORT || 3005;

//retrieve all restaurants
app.get('/api/v1/restaurants', async (req,res)=>{

    try {
        const results = await db.query('select * from  restaurants')
        console.log(results.rows)
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows

            },
        })
    } catch (error) {
      res.status(500)
    }
    
})




//retrieve One restaurant
app.get('/api/v1/restaurants/:id',(req,res)=>{
   
    res.status(200).json(
        {
            status:'success',
            data:{
                restaurant:"Paradosiako"
            }
        }
    )
})

//Create Restaurant POST
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json(
        {
            status: 'success',
            data: {
                restaurant: "Paradosiako"
            }
        }
    )
});

//Update Restaurant PUT
app.put('/api/v1/restaurants/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json(
        {
            status: 'success',
            data: {
                restaurant: "Paradosiako"
            }
        }
    )

})

//DELETE Restaurant 
app.delete('/api/v1/restaurants/:id',(req,res)=>{
    res.status(204).json({
        status:"success"
    })
})


app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})