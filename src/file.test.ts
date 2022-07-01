import { foo, calculate } from "./file"
import theoretically from 'jest-theories'

test('calculating the score returns a result', () => {
    expect(() => calculate([1,2,3,4,5])).not.toThrow()
})

test('calculating the score returns a result', () => {
    const result = calculate([1, 2, 3, 4, 5])
    expect(typeof result).toBe('number')
})


describe('calculate should throw error when input size is not 5', () => {
    const theoriesInput = [
        { testName: 'empty', input: []},
        { testName: 'one object',  input: [1]},
        { testName: 'two objects',  input: [1,2]},
        { testName: 'three objects',  input: [1,2,3]},
        { testName: 'four objects',  input: [1,2,3,4]},
        { testName: 'size objects',  input: [1,2,3,4,5,6]},
    ]

    theoretically('{testName} test', theoriesInput, (theory) => {
        expect(() => calculate(theory.input)).toThrow()
    })
})

test('calculate should throw error when an input is not 1-6', () => {
    expect(() => calculate([7, -1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, -1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 1, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 1, 1, 345698])).toThrow()
})


describe('calculate should give the correct score', () => {
    const theoriesInput = [
        { testName: 'single1single5', variableName: [1, 2, 3, 4, 5] },
    ]

    theoretically('{testName} test', theoriesInput, (theory) => {
        expect(calculate(theory.variableName)).toBe(150)
    })
})


