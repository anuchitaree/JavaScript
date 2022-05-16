

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

function getTime2() {
    return new Date().toLocaleTimeString('en-US',
        { hour12: false, hour: 'numeric', minute: 'numeric' }).toString();
}

export default { remove };
