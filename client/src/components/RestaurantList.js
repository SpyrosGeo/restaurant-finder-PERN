import React, { useEffect, useContext } from "react";
import GetRestaurants from "../APIS/FetchData";
import { RestaurantsContext } from "../context/RestaurantsContext";
import {useHistory} from 'react-router-dom'




export default function RestaurantList(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  let history = useHistory()

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const res = await GetRestaurants.get("/");
        setRestaurants(res.data.data.restaurants)
      } catch (err) {
        console.log(err);
      }
    };
    fetchServerData();
  }, [setRestaurants]);


  const handleDelete = async (e,id) => {
    e.stopPropagation()
    try {
       await GetRestaurants.delete(`/${id}`)
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }))
    } catch (err) {
      console.log(err)
    }
  }
  const handleUpdate = async(e,id) =>{
      e.stopPropagation()
      history.push(`/restaurants/${id}/update`)
  }


  const handleRestaurantSelect = async(id)=>{
    history.push(`/restaurants/${id}`)
  }


  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr className="bg-dark-gray">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map(restaurant => (
            <tr onClick={()=>handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{"$".repeat(restaurant.price_range)}</td>
              <td><i className="fas fa-star-half-alt"></i></td>
              <td>
                <i onClick={(e)=> handleUpdate(e,restaurant.id)} style={{ color: "lightblue" }} className="fas fa-edit"></i>
              </td>
              <td>
                <i onClick={(e) => handleDelete(e,restaurant.id)} style={{ color: "red" }} className="far fa-trash-alt"></i>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tbody>
          <tr>
            <th scope="row">paradosiako</th>
            <td>Zografou</td>
            <td>$$</td>
            <td>
              <i className="fas fa-star-half-alt"></i>
            </td>
            <td>
              <i className="fas fa-edit"></i>
            </td>
            <td>
              <i className="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">Ergotaksio Pizzas</th>
            <td>Zografou</td>
            <td>$$</td>
            <td>
              <i className="fas fa-star-half-alt"></i>
            </td>
            <td>
              <i className="fas fa-edit"></i>
            </td>
            <td>
              <i className="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">Spitiko</th>
            <td>Zografou</td>
            <td>$$</td>
            <td>
              <i className="fas fa-star-half-alt"></i>
            </td>
            <td>
              <i className="fas fa-edit"></i>
            </td>
            <td>
              <i className="far fa-trash-alt"></i>
            </td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
}
