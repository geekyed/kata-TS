export const foo = () => 'hello Ashar and Rui and Ed'

export const calculate = (numbers: number[]): number => {
    if (numbers.length !== 5) throw new Error('Hahahahahaha')

    numbers.forEach(number => {
        if (number < 1 || number > 6) {
            throw new Error('Hahahahahaha')
        }
    })
    return 150
}