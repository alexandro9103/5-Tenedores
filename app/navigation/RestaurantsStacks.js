import { createStackNavigator } from 'react-navigation-stack';
import Restaurants from './../screens/Restaurants';

const RestaurantsScreenStacks = createStackNavigator({
	Restaurants: {
		screen: Restaurants,
		navigationOptions: () => ({
			title: 'Restaurantes'
		})
	}
});

export default RestaurantsScreenStacks;
