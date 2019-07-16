# Programación funcional con JavaScript

## Instalar paquete

```bash
  npm i functional-light
```

## Ejemplo

```js
const { cons, first, rest, isEmpty, isList } = require('functional-light');


console.log(cons('1',[])); // ['1']
console.log(cons('2', cons('1',[]))); // ['2', '1']
console.log(isList(cons('1',[]))); // TRUE
console.log(isList({length: false })); // false
console.log(isEmpty(cons('1',[]))); // false
console.log(isEmpty([])); // true
console.log(isEmpty(9)); // false
console.log(rest(cons(1, cons(2, [])))); // [2]
console.log(rest([])); // []
console.log(cons(1, [2, 3])); // []

const foo = cons(484, []);
console.log(cons('XX', foo))
console.log(foo); // Debe imprimir [484]
```
