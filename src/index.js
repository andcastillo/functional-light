/**
 * Agrega el elemento value al comienzo de la lista. 
 * @param {*} value 
 * @param {Array} list 
 * @example cons(1, [2, 3])
 */
function cons(value, list) {
    let tmp = list.slice(0);
    tmp.splice(0, 0, value);
    return tmp;
}

/**
 * Retorma el primer elemento de la lista
 * @param {Array} list 
 */
function first(list) {
    return list.slice(0, 1)[0];
}

/**
 * Retorna todos los elementos de la lista, excepto el primero
 * @param {Array} list 
 */
function rest(list) {
    return list.slice(1);
}

/**
 * La lista de entrada está vacio?
 * @param {Array} list 
 */
function isEmpty(list) {
    if (typeof list == 'object') {
        return list.length === 0;
    }
    return false;
}

/**
 * El objeto de entrada es una lista?
 * @param {Array} list 
 */
function isList(list) {
    return typeof list === 'object' && typeof list.length == 'number' && list.length >= 0;
}

/**
 * Retorna la longitud de un arreglo
 * @param {Array} list 
 */
function length(list) {
    return list.length;
}

/**
 * Concatena la list2 al final de la list1. Si list2 no es un arreglo, simplemente agrega
 * este elemento al final de list1.
 * @param {Array} list1 
 * @param {Array | Object} list2 
 */
function append(list1, list2) {
    let tmp = list1.slice();
    if (typeof list2 === 'object' && list2.length >= 0) {
        tmp.push(...list2);
        return tmp;

    }
    else {
        tmp.push(list2);
        return tmp;
    }
}

module.exports = {cons, first, rest, isEmpty, isList, length, append};