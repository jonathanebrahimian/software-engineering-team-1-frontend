import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import SearchBar from 'material-ui-search-bar';


function App() {
	return (
		<>
			<SearchBar
				value={this.state.value}
				onChange={(newValue) => this.setState({ value: newValue })}
				onRequestSearch={() => doSomethingWith(this.state.value)}
			/>
		</>
	);
}

export default App();