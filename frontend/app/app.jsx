import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import { Header } from "./header";


export function App() {
	return (
		<>
			<Router>
				<Header></Header>

				<Switch>
					{

						ROUTES.map((route, index) => <Route key={index} {...route} />)
					}

				</Switch>
			</Router>
		</>
	);
}
