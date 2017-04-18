import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public answer = '0';
	public testString;
	constructor() {
	}
	public UpdateAnswer(newString: string) {
		Observable
			.from(newString)
			.map(x => x.toLowerCase())
			.filter(x => x.toLowerCase() === 'd' || x.toLowerCase() === 'l')
			// add if different from the last or different from the second to last
			.reduce((x, y) => ((x[x.length - 1] !== y) || (x.length > 1 && x[x.length - 2] !== y)) ? x + y : x)
			.subscribe(x => {
				// remove the last character if it is duplicated
				if (x[x.length - 1] === x[x.length - 2]) {
					x = x.substr(0, x.length - 1);
				}
				this.answer = x.length === 1 ? '0' : x.length.toString();
			});
	}

}
