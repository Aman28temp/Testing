const { returnEqual } = require('../../util')

describe("Test", () => {
    it("is true", () => {
        var test =true;
        expect(test).toBe(true);
    })

    it('Return Equal', () => {
        expect('Hell').toBe('Hell');
    })
})