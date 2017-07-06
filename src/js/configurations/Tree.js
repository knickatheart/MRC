export default class Tree {
	constructor({ name, response }) {
		return {
            [name]: response
        };
	}
}
