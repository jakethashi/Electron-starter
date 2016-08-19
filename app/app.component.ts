import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>hello</h1>`
})
export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack';
    constructor() {
        console.log('sem tu');
    }
}