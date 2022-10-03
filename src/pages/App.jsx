import Button from '@mui/material/Button';
import * as React from 'react';
import { LandingPage } from './LandingPage';
import ThemeConfig from '../theme';

function App() {
	const [dark, setDark] = React.useState(true);

	function changeMode() {
		setDark(!dark);
	}

	return (
		<>
			<ThemeConfig darkMode={dark}>
				<LandingPage changeDark={changeMode}></LandingPage>
			</ThemeConfig>
		</>
	);
}

export default App