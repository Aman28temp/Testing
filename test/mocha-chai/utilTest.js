const assert = require('chai').assert;
const { returnEqual } = require('../../util.js');

describe('Input', () => {
    it('true should be true', () => {
        assert.equal(returnEqual(true), true);
    })
})