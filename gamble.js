function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomInt = getRandomInteger(1, 10); // Random integer between 1 and 10
console.log(randomInt);