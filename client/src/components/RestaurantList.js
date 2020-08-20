import React from 'react'

export default function RestaurantList() {
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
					<tr>
						<th scope="row">paradosiako</th>
						<td>Zografou</td>
						<td>$$</td>
						<td><i className="fas fa-star-half-alt"></i></td>
						<td><i className="fas fa-edit"></i></td>
						<td><i className="far fa-trash-alt"></i></td>
					</tr>
					<tr>
						<th scope="row">Ergotaksio Pizzas</th>
						<td>Zografou</td>
						<td>$$</td>
						<td><i className="fas fa-star-half-alt"></i></td>
						<td><i className="fas fa-edit"></i></td>
						<td><i className="far fa-trash-alt"></i></td>
					</tr>	
					<tr>
						<th scope="row">Spitiko</th>
						<td>Zografou</td>
						<td>$$</td>
						<td><i className="fas fa-star-half-alt"></i></td>
						<td><i className="fas fa-edit"></i></td>
						<td><i className="far fa-trash-alt"></i></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
