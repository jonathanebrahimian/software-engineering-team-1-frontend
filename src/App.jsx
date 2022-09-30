import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import SearchBar from 'material-ui-search-bar';

function doSomethingWith(value) {

}

function App() {
	return (
		<>
			<SearchBar
				value={''}
				onChange={(newValue) => this.setState({ value: newValue })}
				onRequestSearch={() => doSomethingWith(this.state.value)}
			/>
			<p>Hello</p>
		</>
	);
}

export default App();