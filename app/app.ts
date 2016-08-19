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

let tmp = _.template('<input id="text" type="text"></input><div id="resp" />');

document.querySelector('#content').innerHTML = tmp({ data: new User('John').getName() });
var respEl = document.querySelector('#resp');


var req = (search, onResponse = (resp)=> {} ) => {
    var http = new XMLHttpRequest();
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=cs&dt=t&q=" + search;
    http.open("GET", url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            try {
                var response = JSON.parse(http.response.replace(/,+/g, ','))
                onResponse(response);
            }catch(e) {}
        }
    }
    http.send();

}


var exec = _.debounce(search => {
    req(search, resp => { 
        console.log(resp);
        respEl.innerHTML = resp[0][0][0];
    });
} , 500); 

document.querySelector('#text').addEventListener('input', e => {
    
    var value = (<any>e.target).value;

    if (value.length > 1) {
        exec(value);
    }

    
    // function r(value) {
    //     setTimeout(() => {
    //             //console.log(value);
    //             if (value.length > 1) {
    //                 req(value, resp => { 
    //                     //console.log(resp.split("\"")[1]);
    //                     respEl.innerHTML = resp.split("\"")[1];
    //                 });
    //             }            
    //     }, 1000);
    // }

    //r(value);
});

