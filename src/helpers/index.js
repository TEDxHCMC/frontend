export const generateRandomUrls = (count) => {
    // Define the prefix and arrays for the numbers and colors
    const prefix = "/assets/pattern/single-pattern/";
    const numbers = [1, 2, 3, 4];
    const colors = ["Pink", "Blue", "Green", "Yellow"];

    // Check if the count is valid (maximum 4)
    if (count < 1 || count > 4) {
        throw new Error("Count should be between 1 and 4");
    }

    // Shuffle the numbers and colors arrays
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    const shuffledColors = colors.sort(() => Math.random() - 0.5);

    // Create an array of urls
    const result = [];
    for (let i = 0; i < count; i++) {
        const url = `${prefix}${shuffledNumbers[i]}-${shuffledColors[i]}.png`;
        result.push(url);
    }

    return result;
}
