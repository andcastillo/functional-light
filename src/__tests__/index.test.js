const { assert } = require('chai');

const { cons, first, rest, isEmpty, isList } = require('../');

describe('functional-light', () => {
    it('test cons', () => {

        assert.typeOf(cons('1', []), 'array'); // ['1']
        assert.deepEqual(cons('1', []), ['1']); // ['1']
        assert.deepEqual(cons('2', cons('1', [])), ['2', '1']); // ['2', '1']
        assert.deepEqual(cons(1, [2, 3]), [1, 2, 3]);
        const foo = cons(484, []);
        cons('XX', foo)
        assert.deepEqual(foo, cons(484, []));
    });

    it('test first', () => {
        assert.equal(first(cons('2', cons('1', []))), 2); // 2
        assert.equal(first(rest(cons('2', cons('1', [])))), 1); // 1
        assert.equal(first([]), undefined); // 1
    });

    it('test rest', () => {
        assert.deepEqual(rest(cons(1, cons(2, []))), [2]); // [2]
        assert.deepEqual(rest([]), []); // []
    });

    it('test isEmpty and isList', () => {
        assert.equal(isList(cons('1', [])), true); // TRUE
        assert.equal(isList({ length: false }), false); // false
        assert.equal(isEmpty(cons('1', [])), false); // false
        assert.equal(isEmpty([]), true); // true
        assert.equal(isEmpty(9), false); // false
    });
});