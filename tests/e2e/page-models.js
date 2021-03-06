import {Selector as selector} from 'testcafe';

export class GridColPage {
	constructor() {
		this.colums = selector('.col-1.bg-turquoise');
		this.url = 'http://localhost:8080/docs/grid-col.html';
	}
}

export class GridRowPage {
	constructor() {
		this.rows = selector('.row-1.bg-turquoise');
		this.url = 'http://localhost:8080/docs/grid-row.html';
	}
}

export class IndexPage {
	constructor() {
		const aside = selector('aside');

		this.gridColLink = aside.find('a').withText('grid-row');
		this.gridRowLink = aside.find('a').withText('grid-col');
		this.mainContainer = selector('.bg-cadetblue');
		this.url = 'http://localhost:8080/docs/index';
	}
}
