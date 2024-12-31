function solve() {
    inputtext = inputtext.split(' ');
    let tmp = inputtext.map(Number);
    let data = {};
    for (let i=0; i < tmp.length; i++) {
        let value = tmp[i];
        if (!(value in data)) {
            data[value] = 1;
        } else {
            data[value]++;
        }
    }
    for (let counter = 0; counter < 75; counter++) {
        data = workdata(data);
        console.log(counter);
    }
    let counter = 0;
    for (const [key, value] of Object.entries(data)) {
        counter = counter + value;
    }
    document.getElementById("asd").innerHTML = counter;
}

function workdata(inputdata) {
    let newdata = {};

    for (const [key, value] of Object.entries(inputdata)) {
        let output = work(parseInt(key));
        for (let i=0; i < output.length; i++) {
            let newvalue = output[i];
            if (!(newvalue in newdata)) {
                newdata[newvalue] = value;
            } else {
                newdata[newvalue] = newdata[newvalue] + value;
            }
        }
    }
    return newdata;
}

function work(input) {
    if (input == 0) { return [1]; }
    if (input < 10) { return [input * 2024]; }
    let length = Math.floor(Math.log10(input)) + 1;
    if ((length % 2) == 0) {
        let tmp = Math.pow(10,length/2);
        let part1 = Math.floor(input / tmp);
        tmp = part1 * tmp;
        let part2 = input - tmp;
        return [part1, part2];
    } else {
        return [input * 2024];
    }
}