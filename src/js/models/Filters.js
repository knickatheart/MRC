import React from 'react';

// View
import FiltersView from '../views/Filters';

// Controller
import FiltersController from '../controllers/Filters';

const { onClick } = new FiltersController();

const data = [
	{
		id: 1,
		name: {
			first: 'Gianluigi',
			last: 'Mango'
		},
		username: '@gmango'
	},
	{
		id: 2,
		name: {
			first: 'Homer',
			last: 'Simpson'
		},
		username: '@hsimpson'
	},
];

const FiltersModel = () => <FiltersView onClick={onClick} data={data} />;

export default FiltersModel;
