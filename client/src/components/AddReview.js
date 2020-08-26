import React, { useState } from 'react'
import FetchData from '../APIS/FetchData'
import { useParams, useHistory, useLocation } from 'react-router'

export default function AddReview() {
   const {id} = useParams()
   const history = useHistory()
   const location = useLocation()
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")




    const handleSubmitReview = async(e) =>{
        e.preventDefault()
        try {
            await FetchData.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            })
            //trigger a quick refresh to get the newly added review
            history.push("/")
            history.push(location.pathname)
        } catch (error) {
            console.log(error)
        }
            
    } 

    return (
        <div className="mb-2">
            <form onSubmit={handleSubmitReview} >
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            placeholder="name"
                            className="form-control"
                            id="name" />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id="rating"
                            className="custom-select">
                            <option disabled value="Review">Review</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)} 
                        id="review" 
                        className="form-control" />
                </div>

                <button type="submit" className="btn btn-success">Add Review</button>
            </form>
        </div>
    )
}
