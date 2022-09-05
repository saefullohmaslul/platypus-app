const { sum } = require(".")

describe('testing terhadap function sum', () => {
    it('should return a + b', (done) => {
        const result = sum(6, 5)

        expect(result).toBe(11)
        done()
    })

    it('should return error if a or b is not a number', (done) => {
        const result = sum("string yang akan bikin error", 6)
        
        expect(isNaN(result)).toBe(true)
        done()
    })
})
