## Functions

<dl>
<dt><a href="#cons">cons(value, list)</a> ⇒ <code>Array</code></dt>
<dd><p>Agrega el elemento value al comienzo de la lista.</p>
</dd>
<dt><a href="#first">first(list)</a> ⇒ <code>*</code></dt>
<dd><p>Retorma el primer elemento de la lista</p>
</dd>
<dt><a href="#rest">rest(list)</a> ⇒ <code>Array</code></dt>
<dd><p>Retorna todos los elementos de la lista, excepto el primero</p>
</dd>
<dt><a href="#isEmpty">isEmpty(list)</a> ⇒ <code>boolean</code></dt>
<dd><p>La lista de entrada está vacio?</p>
</dd>
<dt><a href="#isList">isList(list)</a> ⇒ <code>boolean</code></dt>
<dd><p>Retorna verdadero si el objeto de entrada es una lista</p>
</dd>
<dt><a href="#length">length(list)</a> ⇒ <code>Number</code></dt>
<dd><p>Retorna la longitud de un arreglo</p>
</dd>
<dt><a href="#append">append(list1, list2)</a> ⇒ <code>Array</code></dt>
<dd><p>Concatena la list2 al final de la list1. Si list2 no es un arreglo, simplemente agrega
este elemento al final de list1.</p>
</dd>
<dt><a href="#filter">filter(l, f)</a> ⇒ <code>Array</code></dt>
<dd><p>Filtra la lista l usando la función f.</p>
</dd>
<dt><a href="#map">map(a, f)</a> ⇒ <code>Array</code></dt>
<dd><p>Aplica la función f a cada elemento del arreglo a</p>
</dd>
</dl>

<a name="cons"></a>

## cons(value, list) ⇒ <code>Array</code>
Agrega el elemento value al comienzo de la lista.

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| list | <code>Array</code> | 

**Example**  
```js
cons(1, [2, 3]); // => [1, 2, 3]
```
<a name="first"></a>

## first(list) ⇒ <code>\*</code>
Retorma el primer elemento de la lista

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>Array</code> | 

**Example**  
```js
first([1, 2, 3]) // => 1
```
<a name="rest"></a>

## rest(list) ⇒ <code>Array</code>
Retorna todos los elementos de la lista, excepto el primero

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>Array</code> | 

**Example**  
```js
rest([1, 2, 3]); // => [2, 3]
```
<a name="isEmpty"></a>

## isEmpty(list) ⇒ <code>boolean</code>
La lista de entrada está vacio?

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>Array</code> | 

**Example**  
```js
isEmpty([1, 2, 3]); // => false
```
**Example**  
```js
isEmpty([]); // => true
```
<a name="isList"></a>

## isList(list) ⇒ <code>boolean</code>
Retorna verdadero si el objeto de entrada es una lista

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>Array</code> | 

**Example**  
```js
isList([]); // => true
```
**Example**  
```js
isList([1, 2]); // => true
```
**Example**  
```js
isList(1); // => false
```
**Example**  
```js
isList("Hola"); // => false
```
<a name="length"></a>

## length(list) ⇒ <code>Number</code>
Retorna la longitud de un arreglo

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>Array</code> | 

**Example**  
```js
length([]); // => 0
```
**Example**  
```js
length([2, 4]); // => 2
```
<a name="append"></a>

## append(list1, list2) ⇒ <code>Array</code>
Concatena la list2 al final de la list1. Si list2 no es un arreglo, simplemente agrega
este elemento al final de list1.

**Kind**: global function  

| Param | Type |
| --- | --- |
| list1 | <code>Array</code> | 
| list2 | <code>Array</code> \| <code>Object</code> | 

**Example**  
```js
append([1, 2], [3, 4]); // => [1, 2, 3, 4]
```
<a name="filter"></a>

## filter(l, f) ⇒ <code>Array</code>
Filtra la lista l usando la función f.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>Array</code> |  |
| f | <code>function</code> | función booleana |

**Example**  
```js
filter([1, 2, 3, 4, 5], x => x % 2 === 1); // => [1, 3, 5]
```
<a name="map"></a>

## map(a, f) ⇒ <code>Array</code>
Aplica la función f a cada elemento del arreglo a

**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| f | <code>function</code> | 

**Example**  
```js
console.log(map([1,2,3], x => x*x)); // => [1, 4, 9]
```
