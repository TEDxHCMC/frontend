export const generateRandomUrls = (count) => {
    // Define the prefix and arrays for the numbers and colors
    const prefix = "/assets/pattern/single-pattern/";
    const numbers = [1, 2, 3, 4];
    const colors = ["Pink", "Blue", "Green", "Yellow"];

    // Shuffle the numbers and colors arrays

    // const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    // const shuffledColors = colors.sort(() => Math.random() - 0.5);
    const shuffledNumbers = shuffleArr(numbers)
    const shuffledColors = shuffleArr(colors)

    // Create an array of urls
    const result = [];
    for (let i = 0; i < count; i++) {
        const url = `${prefix}${shuffledNumbers[i]}-${shuffledColors[i]}.png`;
        result.push(url);
    }

    return result;
}

export const generateUrls = (numbers, colors) => {
    const prefix = "/assets/pattern/single-pattern/";
    // Create an array of urls
    const result = [];
    for (let i = 0; i < 4; i++) {
        const url = `${prefix}${numbers[i]}-${colors[i]}.png`;
        result.push(url);
    }

    return result;
}

export const shuffleArr= (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}