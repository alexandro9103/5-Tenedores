import { createStackNavigator } from 'react-navigation-stack';
import Search from './../screens/Search';

const SearchScreenStacks = createStackNavigator({
	Search: {
		screen: Search,
		navigationOptions: () => ({
			title: 'Busca tu Restaurante'
		})
	}
});

export default SearchScreenStacks;
