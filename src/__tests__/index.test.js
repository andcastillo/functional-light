const { assert } = require('chai');

const { cons, first, rest, isEmpty, isList, append, length, filter, map } = require('../');

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
    it('test length', () => {
        assert.equal(length(cons('1', [])), 1); // TRUE
        assert.equal(length([]), 0); // false
        assert.equal(length([1, 2, 3, 4]), 4); // false

    });
    it('test append', () => {
        assert.deepEqual(append(cons('1', []), cons(2, [])), cons('1', cons(2, []))); // TRUE
        assert.deepEqual(append([1, 2], []), [1, 2]); // TRUE
        assert.deepEqual(append([], []), []); // TRUE
        assert.deepEqual(append([], 10), [10]); // TRUE
        assert.deepEqual(append([1, 2], 3), [1, 2, 3]); // TRUE

    });

    it('test map', () => {
        assert.deepEqual(map([1, 2, 3], x => x * x), [1, 4, 9]); // TRUE
    });

    it('test filter', () => {
        assert.deepEqual(filter([1, 2, 3, 4, 5], x => x % 2 === 1), [1, 3, 5]); // TRUE
    });
});