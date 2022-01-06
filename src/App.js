import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Protected from './components/layouts/Protected';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';

function App() {
	return (
		<Router>
			<div className="App">
			<Switch>
				<Protected exact path="/" component={Dashboard} />
				<Route component={NotFound} />
			</Switch>
			</div>
		</Router>
	);
}

export default App;
