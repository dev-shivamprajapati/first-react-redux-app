// APP Componens
import { Grid } from '@mui/material';
import AppComponent from '../src/components/App';
import { Provider } from 'react-redux';
// STORE
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Grid className='App' container justifyContent='center' alignItems='center' sx={{ height: '100vh' }}>
				<AppComponent />
			</Grid>
		</Provider>
	);
}

export default App;
