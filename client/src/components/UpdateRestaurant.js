import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import { RestaurantsContext } from '../context/RestaurantsContext'
import FetchData from '../APIS/FetchData'

export default function UpdateRestaurant() {
    const { id } = useParams()
    let history = useHistory()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await FetchData.get(`/${id}`)
            const { location, name, price_range } = res.data.data.restaurant[0]
            setPriceRange(price_range)
            setLocation(location)
            setName(name)
        }
        fetchRestaurant()
    }, [id])



    const handleSubmit = async (e) => {
        e.preventDefault()
         await FetchData.put(`/${id}`,{
            name,
            location,
            price_range:priceRange
        })
        history.push('/')
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>

                    <input
                        min="1"
                        max="5"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        id="price_range"
                        className="form-control"
                        type="number" />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    )
}
