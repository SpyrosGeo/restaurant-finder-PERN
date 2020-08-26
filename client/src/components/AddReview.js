import React, { useState } from 'react'

export default function AddReview() {
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")

    return (
        <div className="mb-2">
            <form >
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
