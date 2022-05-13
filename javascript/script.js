'use strict'

import { remove } from "./module.js";



// var something = "How you?";
// something = something.insert(3, " are");
// console.log(something)



let xx = "2022-10-10 12:12";
// console.log(yy);

let datetime = "2022-10-10 12 12";
// datetime = datetime.insert(13, ":");
// datetime = datetime.remove(14, 1);
datetime = remove(datetime,14, 1);

console.log(datetime);

/*
// console.log('datetime');
let date = datetime.slice(0,11);
console.log(date);

const time = datetime.replace(':', ' ');
console.log(time);

datetime = datetime.insert(3,':')
console.log(datetime);


if(datetime.includes(':')){
    // console.log(time);
}

*/
