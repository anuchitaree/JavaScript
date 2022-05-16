'use strict'


String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }
    return string + this;
};

function remove(str, startIndex, count) {
    return str.substr(0, startIndex) + str.substr(startIndex + count);
}

String.prototype.remove = function (startIndex, count) {
    if (this.length > 0) {
        return this.substr(0, startIndex) + this.substr(startIndex + count);
    }
}

// var something = "How you?";
// something = something.insert(3, " are");
// console.log(something)

let time = '2022-10-12 12:30'
let result = null;



function setTime() {
    // check if the colon is there
    if (result !== null) {
        console.log(result.split(':').length);
        if (result.split(':').length === 1) {
            result = time;
        }
        else {
            // if it is, remove the colon
            result = time.split(':').join(' ');
        }
    } else {
        result = time;
    }

    console.log(result);
}


setInterval(setTime, 1000);
setTime();
