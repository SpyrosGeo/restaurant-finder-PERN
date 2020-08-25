import React, { useState,useContext } from "react";
import FetchData from "../APIS/FetchData";
import { RestaurantsContext } from "../context/RestaurantsContext";



function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const {addRestaurants} = useContext(RestaurantsContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await FetchData.post("/", {
        name,
        location,
        price_range: priceRange,
      });

      addRestaurants(res.data.data.restaurant)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>

          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
              className="form-control"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button  type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
