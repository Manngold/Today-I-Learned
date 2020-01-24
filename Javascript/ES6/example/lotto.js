const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
};

let mySet = new Set();

function getRandomNumber(maxNumber) {
    let { count } = SETTING;

    while (count !== 0) {
        let newNum = Math.floor(Math.random() * maxNumber);
        if (!mySet.has(newNum)) {
            mySet.add(newNum);
            count -= 1;
        }
    }

    return [...Array.from(mySet)];
}

console.log(getRandomNumber(SETTING.maxNumber));
