function cons(value, list) {
    let tmp = list.slice(0);
    tmp.splice(0, 0, value);
    return tmp;
}

function first(list) {
    return list.slice(0, 1)[0];
}

function rest(list) {
    return list.slice(1);
}

function isEmpty(list) {
    if (typeof list == 'object') {
        return list.length === 0;
    }
    return false;
}

function isList(list) {
    return typeof list === 'object' && typeof list.length == 'number' && list.length >= 0;
}

module.exports = {cons, first, rest, isEmpty, isList};