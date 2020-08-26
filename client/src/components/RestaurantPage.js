import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import FetchData from '../APIS/FetchData';
function RestaurantPage() {
	const { id } = useParams()
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)


	useEffect(() => {
		const fetchRestaurant = async () => {


			try {
				const res = await FetchData.get(`/${id}`)
				setSelectedRestaurant(res.data.data.restaurant)
				// console.log(res.data.data.restaurant)
				

			} catch (error) {
				console.log(error)

			}
		}
		fetchRestaurant()
	}, [id,setSelectedRestaurant])
	return (
		<div >
			
			<h1>{selectedRestaurant && selectedRestaurant[0].name}</h1>
		</div>
	);
}


export default RestaurantPage;
