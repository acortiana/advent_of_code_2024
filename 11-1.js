function solve() {
    inputtext = inputtext.split(' ');
    let data = inputtext.map(Number);
    for (let counter = 0; counter < 25; counter++) {
        data = workarray(data);
        console.log(counter);
    }
    document.getElementById("asd").innerHTML = data.length;
}

function workarray(inputarray) {
    let result = [];
    for (let i = 0; i < inputarray.length; i++) {
        let tmp = work(inputarray[i]);
        result = result.concat(tmp);
    }
    return result;
}

function work(input) {
    if (input == 0) { return [1] }
    let length = String(input).length;
    if ((length % 2) == 0) {
        let part1 = Number(String(input).substring(0,(length/2)));
        let part2 = Number(String(input).substring(length/2,length));
        return [part1, part2];
    } else {
        return [input * 2024];
    }
}