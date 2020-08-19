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
app.get('/api/v1/restaurants/:id',async(req,res)=>{
   

    try {
        const results = await db.query("select * from restaurants where id = $1",[req.params.id])
        res.status(200).json(
            {
                status: 'success',
                data: {
                    restaurant: results.rows
                }
            }
        )    
    } catch (error) {
        res.status(500)
    }
    
})

//Create Restaurant POST
app.post("/api/v1/restaurants", async (req, res) => {
const {name,location,price_range}=req.body;
    try {
        //returning * makes postgres to return when inserting a new row
        const results = await db.query("insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *",
        [name,location,price_range])
        res.status(201).json(
            {
                status: 'success',
                data: {
                    restaurant: results.rows[0]
                }
            }
        )    
    } catch (error) {
        res.status(500)
    }
    
});

//Update Restaurant PUT
app.put('/api/v1/restaurants/:id',async(req,res)=>{
  try {
      const {name,location,price_range } = req.body
      const id = req.params.id
      const results = await db.query("update restaurants set name = $1, location = $2, price_range =$3 where id = $4 returning *",[name,location,price_range,id])

      res.status(200).json(
          {
              status: 'success',
              data: {
                  restaurant: results.rows
              }
          }
      )  
  } catch (error) {
      res.status(501)
  }
    

})

//DELETE Restaurant 
app.delete('/api/v1/restaurants/:id',async(req,res)=>{
        try {
            const id = req.params.id
            const results = await db.query("delete from restaurants where id = $1",[id])

            res.status(204).json({
                status:"success"
            })
        } catch (error) {
            res.status(500)
        }
    
})


app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})