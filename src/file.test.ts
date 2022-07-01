import { foo, calculate } from "./file"

test('calculating the score returns a result', () => {
    expect(() => calculate([1,2,3,4,5])).not.toThrow()
})