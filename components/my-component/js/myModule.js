// Add your Javascript here

export default {

    getRandomColor() {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}