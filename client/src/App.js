import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './routes/Home'
import RestaurantDetail from './routes/RestaurantDetail'
import UpdatePage from './routes/UpdatePage'
function App() {
  return (
  	<Switch>
	<Route exact path="/">
		<Home />	
	</Route>

	<Route exact path="/restaurants/:id">
		<RestaurantDetail />	
	</Route>
	<Route exact path="/restaurants/:id/update">
		<UpdatePage />	
	</Route>


	  </Switch>


  )
}

export default App;
