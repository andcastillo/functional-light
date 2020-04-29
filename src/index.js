/**
 * Agrega el elemento value al comienzo de la lista. 
 * @param {*} value 
 * @param {Array} list 
 * @returns {Array}
 * @example cons(1, [2, 3]); // => [1, 2, 3]
 */
function cons(value, list) {
    let tmp = list.slice(0);
    tmp.splice(0, 0, value);
    return tmp;
}

/**
 * Retorma el primer elemento de la lista
 * @param {Array} list 
 * @example first([1, 2, 3]) // => 1
 * @returns {*}
 */
function first(list) {
    return list.slice(0, 1)[0];
}

/**
 * Retorna todos los elementos de la lista, excepto el primero
 * @param {Array} list 
 * @returns {Array}
 * @example rest([1, 2, 3]); // => [2, 3]
 */
function rest(list) {
    return list.slice(1);
}

/**
 * La lista de entrada está vacio?
 * @param {Array} list 
 * @returns {boolean}
 * @example isEmpty([1, 2, 3]); // => false
 * @example isEmpty([]); // => true
 * @example isEmpty(""); // => true
 */
function isEmpty(list) {
    if (typeof list == 'object') {
        return list.length === 0;
    }
    if (typeof list == 'string') {
        return list.length === 0;
    }
    return false;
}

/**
 * Retorna verdadero si el objeto de entrada es una lista
 * @param {Array} list
 * @returns {boolean} 
 * @example isList([]); // => true
 * @example isList([1, 2]); // => true
 * @example isList(1); // => false
 * @example isList("Hola"); // => false
 */
function isList(list) {
    return typeof list === 'object' && typeof list.length == 'number' && list.length >= 0;
}

/**
 * Retorna la longitud de un arreglo
 * @param {Array} list 
 * @returns {Number}
 * @example length([]); // => 0
 * @example length([2, 4]); // => 2
 */
function length(list) {
    return list.length;
}

/**
 * Concatena la list2 al final de la list1. Si list2 no es un arreglo, simplemente agrega
 * este elemento al final de list1.
 * @param {Array} list1 
 * @param {Array | Object} list2 
 * @returns {Array}
 * @example append([1, 2], [3, 4]); // => [1, 2, 3, 4]
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

/**
 * Filtra la lista l usando la función f.
 * @param {Array} l 
 * @param {function} f función booleana 
 * @returns {Array}
 * @example filter([1, 2, 3, 4, 5], x => x % 2 === 1); // => [1, 3, 5]
 */
function filter(l, f) {
    if (isEmpty(l)) {
        return [];
    } else if (f(first(l))) {
        return cons(deepCopy(first(l)), filter(rest(l), f))
    } else {
        return filter(rest(l), f);
    }
}

/**
 * Aplica la función f a cada elemento del arreglo a
 * @param {Array} a 
 * @param {function} f 
 * @returns {Array}
 * @example console.log(map([1,2,3], x => x*x)); // => [1, 4, 9]
 */
let map = function (a, f) {
    if (isEmpty(a)) {
        return [];
    } else {
        return cons(deepCopy(f(first(a))), map(rest(a), f));
    }
}

/**
 * Realiza una copia profunda(recursiva) del objeto que se pasa como parámetro
 * @param {object} value 
 * @returns {object}
 * @example deepCopy({a: 10, b: {a: 45}}); // => {a: 10, b: {a: 45}}
 */
let deepCopy = function (value) {
    return JSON.parse(JSON.stringify(value));
}

/**
 * Aplica una función f a cada elemento de la lista. La función f
 * recibe el elemento de la lista y el índice en el cual se encuentra.
 * El tercer parámetro es un desplazamiento del índice. Por defecto en 0
 * @param {Array} l 
 * @param {function} f 
 * @param {number} offset
 * @example forEach([1, 2, 3], (a, i) => console.log(i + " : " + a));
 */
function forEach(l, f, index = 0) {
    if (!isEmpty(l)) {
        f(first(l), index);
        forEach(rest(l), f, index + 1);
    }
}
/**
 * Concatena 2 listas.
 * @param {Array} list1 
 * @param {Array} list2 
 * @returns {Array}
 * @example concat([1, 2], [3, 4]); // [1, 2, 3, 4]
 */
function concat(list1, list2) {
    if (isEmpty(list1)) return list2;
    return cons(first(list1), concat(rest(list1), list2));
}

module.exports = { cons, first, rest, isEmpty, isList, length, append, filter, map, deepCopy, forEach, concat };
