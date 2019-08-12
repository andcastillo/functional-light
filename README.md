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

Crear un nuevo directorio para el proyecto. En este ejemplo usaremos **fl-extended**. Luego debemos inicializar el proyecto usando npm init y llenar los campos de manera adecuada según le pregunte la herramienta. Usar *jest* para las pruebas

``` bash
mkdir fl-extended
cd fl-extended
npm init
```

Luego instalamos la librería functional-light y jest para la pruebas. Con los comando siguientes no solo se instalan las librerías, sino que además se incluyen las librerías en el archivo package.json

``` bash
npm i functional-light
npm i jest --save-dev
npm i browserify --save-dev
```

Incluya los siguientes scripts en el archivo package.json

``` js
  "scripts": {
    "test": "jest",
    "build": "browserify -r ./src/index.js:fl-extended -o ./dist/fl-extended.js"
  }
```
El archivo package.json debería verse como esto:

``` js
{
  "name": "fl-extended",
  "version": "1.0.0",
  "description": "Example project",
  "main": "src/index.js",
  "scripts": {
    "test": "jest",
    "build": "browserify -r ./src/index.js:fl-extended -o ./dist/fl-extended.js"
  },
  "author": "Andres M. Castillo",
  "license": "MIT",
  "dependencies": {
    "functional-light": "^0.2.0"
  },
  "devDependencies": {
    "browserify": "^16.5.0",
    "jest": "^24.8.0",
  }
}
```

Creamos la carpeta que contendrá el código fuente. Estos pasos se pueden hacer desde el IDE de desarrollo o desde el navegador de archivos. Aqui continuo en bash

``` bash
mkdir src
```

Dentro de esta carpeta pondremos todo nuestro código fuente. Para este ejemplo supongamos que queremos extender nuestra librería functional-light para agregar la función map, que recibe un arreglo, un función f y retorna una nueva lista con los elementos de la lista original mapeados usando la función f. El siguiente código debe ir en *src/index.js*

``` js
const { cons, first, rest, isEmpty, isList, append, length } = require('functional-light');

/**
 * Apply a function f to each element of the array a
 * @param {Array} a 
 * @param {function} f 
 * @example console.log(map([1,2,3], x => x*x)); // => [1, 4, 9]
 */
let map = function(a, f) {
    if (isEmpty(a)) {
        return [];
    } else {
        return cons(f(first(a)), map(rest(a), f));
    }
}
// We export all the previous functions +  our current implementation of map
module.exports = { cons, first, rest, isEmpty, isList, append, length, map }
```

## Compilar el paquete para el navegador

Ahora para obtener una librería que pueda ser usada en nuestro framework-canvas, debemos compilar el proyecto para obtener un archivo javascript para el navegador. Para esto, debemos compilar usando browserify

``` bash
npm run build
```

Ahora tendremos nuestro archivo compilado en la carpeta **dist**. El archivo se llama **fl-extended.js** según especificamos en el package.json
Ahora pueden copiar este archivo dentro de la carpeta web-lib de su proyecto HTML y deben importarlo usando una etiqueta de script. Algo como esto:

``` html
<script src="web-lib/fl-extended.js"></script>
<script>
  // Importamos las librerias
  let { append, cons, first, isEmpty, isList, length, rest, map } = require('fl-extended');
```
