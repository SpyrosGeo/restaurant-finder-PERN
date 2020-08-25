import React, { useEffect, useContext } from "react";
import GetRestaurants from "../APIS/FetchData";
import { RestaurantsContext } from "../context/RestaurantsContext";




export default function RestaurantList(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)

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
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.location}</td>
            <td>{"$".repeat(restaurant.price_range)}</td>
            <td><i className="fas fa-star-half-alt"></i></td>
            <td>
              <i style={{color:"lightblue"}} className="fas fa-edit"></i>
            </td>
            <td>
              <i style={{color:"red"}} className="far fa-trash-alt"></i>
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
