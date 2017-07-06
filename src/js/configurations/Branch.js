// Dependencies
import Tree from '../configurations/Tree';

export default class Branch {
	// Getters
	static get name() { return ''; }
	static get response() { return []; }

	// Setters
	static set name(name) { return name; }
	static set response(res) { return res; }

	constructor() {
		this.set = this.set.bind(this);
		this.callee = this.callee.bind(this);

		this.set();
	}

	set() {
		this.name = this.constructor.name;
		this.response = this.response || [];

		return new Tree({ name: this.name, response: this.response });
	}

	get() {
		return this;
	}

	callee(received = '') {
		this.response = received;

		return this.set();
	}
}
