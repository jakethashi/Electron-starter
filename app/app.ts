import '../app/sass/main.scss';
import './refs';

// libs
import * as _ from 'underscore';

// custom
import {User} from './user';

export class Test {
    constructor(data: number) {
        console.log(data);
    }
}

_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

let tmp = _.template('<h1>{{ data }}</h1>');

document.querySelector('#content').innerHTML = tmp({ data: new User('John').getName() }); 
