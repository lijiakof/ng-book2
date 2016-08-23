import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import {enableProdMode} from "@angular/core";

@Component({
	selector: 'hello-world',
	template: `
	<div>
		Hello world
	</div>
	`
})
class HelloWorld {

}

//enableProdMode();
bootstrap(HelloWorld);