// Styles
require('bootstrap/dist/css/bootstrap.css');
require('../scss/style.scss');

// Dependencies
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Views
import Home from './views/Home';
import About from './views/About';

const Entry = () => (
	<Router>
		<div>
			<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/about">About</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
  	</Router>
);

export default render(<Entry />, document.getElementsByTagName('body')[0]);