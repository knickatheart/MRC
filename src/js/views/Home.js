// Dependencies
import React from 'react';

// Views
import Table from './Table';
import Filters from '../models/filters';
import Bar from '../models/bar';

const Home = () => (
	<div className="container">
        <h2 className="text-center">Home</h2>
        <div className="col-xs-12">
        	<Bar />
        	<div className="row">
        		<div className="col-xs-12 col-sm-2">
		        	<Filters />
		        </div>
		        <div className="col-xs-12 col-sm-10">
		        	<Table />
		        </div>
		    </div>
	    </div>
    </div>
);

export default Home;