import * as React from 'react';
import ThemeConfig from '../theme';
import Router from '../routes';

function App() {
	const [dark, setDark] = useState(false);

	function changeMode() {
		setDark(!dark);
	}

	return (
		<>
			<ThemeConfig darkMode={dark}>
				<Router changeDark={changeMode} />
			</ThemeConfig>
		</>
	);
}

export default App