

/**
 * Generates random values of length, can be positive or negative
 * @param {int} length
 */
export const randomValuesOfLength = (length) => {
    return randomPositiveValues(length).map(next => next - 50)
}

/**
 * Generates only positive values of length
 * @param {int} length
 */
export const randomPositiveValues = (length) => {
    return Array(length).fill(null).map(() => Math.round(Math.random() * 100))
}

/**
 * Generates random words of a given length
 * @param {int} length
 */
export const randomWordsOfLength = (length) => {
    const words = ['Tell', 'Make', 'Pie', 'Peanut', 'Aunt', 'User', 'Contrast', 'Yellow', 'Ou My!', 'Jelly', 'Work', 'Mama', 'Queen', 'Knight']
    return Array(length).fill(null).map((next, index) => words[Math.floor(Math.random() * words.length)])
}

/**
 * Generates random groups of a certain length
 * @param {int} length
 */
export const randomGroupsOfLength = (length) => {
    const words = ['Developers', 'Designers', 'Magicians', 'Wizzards', 'React', 'Loops']
    return Array(length).fill(null).map((next, index) =>  words[Math.floor(Math.random() * words.length)])
}

/**
 * Extracts the unique values of an array
 * @param {int} length
 */
export const uniqueValues = (array) => {
    let result = []

    array.forEach((next) => {
        if (!result.includes(next)) {
            result = result.concat(next)
        }
    })
    return result
}