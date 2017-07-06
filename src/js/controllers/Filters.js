// Dependencies
import Branch from '../configurations/Branch';

export default class FiltersController extends Branch {
	constructor(callee) {
		super(callee);

		this.onClick = this.onClick.bind(this);
	}

	onClick(data) {
		return this.callee('Clicked on ' + data.first);
	}
}
