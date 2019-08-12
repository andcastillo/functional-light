# Programación funcional con JavaScript

## Instalación paquete

```bash
  npm i functional-light
```

## Documentación del API

[Ver todas las funciones](docs/functional-light.md)

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
# Crear un nuevo proyecto usando esta librería

Crear un nuevo directorio para el proyecto. En este ejemplo usaremos foo. Luego debemos inicializar el proyecto usando npm init y llenar los campos de manera adecuada según le pregunte la herramienta. Usar *jest* para las pruebas

``` bash
mkdir foo
cd foo
npm init
```

Luego instalamos la librería functional-light y jest para la pruebas. Con los comando siguientes no solo se instalan las librerías, sino que además se incluyen las librerías en el archivo package.json

``` bash
npm i functional-light
npm i jest --save-dev
npm i browserify --save-dev
```
