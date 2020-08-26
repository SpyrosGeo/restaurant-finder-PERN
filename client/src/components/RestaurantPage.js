import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import FetchData from '../APIS/FetchData';
import Reviews from './Reviews';
import AddReview from './AddReview';
function RestaurantPage() {
	const { id } = useParams()
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)


	useEffect(() => {
		const fetchRestaurant = async () => {


			try {
				const res = await FetchData.get(`/${id}`)
				setSelectedRestaurant(res.data.data)
				// console.log(res)
				

			} catch (error) {
				console.log(error)

			}
		}
		fetchRestaurant()
	}, [id,setSelectedRestaurant])

	return (
		<div>
			{selectedRestaurant && (

				<>
				<h1 className="text-center display-1">{selectedRestaurant.restaurant[0].name}</h1>
				<div className="mt-3">
					<Reviews reviews={selectedRestaurant.reviews} />
				</div>
					<AddReview/>
				</>
			)}
		</div>
	);
}


export default RestaurantPage;
