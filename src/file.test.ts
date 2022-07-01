import { foo } from "./file"

test('I test the thing', () => {
    expect(foo()).toBe('hello world')
})