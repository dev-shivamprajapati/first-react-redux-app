// APP Componens
import { Grid } from '@mui/material';
import AppComponent from '../src/components/App';
import { Provider } from 'react-redux';
// STORE
import store from './redux/store';
// APP CSS
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Grid className='App' sx={{ margin: -1, bgcolor: 'lightGrey', height: '100vh' }}>
				<AppComponent />
			</Grid>
		</Provider>
	);
}

export default App;
