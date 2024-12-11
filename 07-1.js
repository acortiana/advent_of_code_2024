function solve() {
    let regex=/[0-9]+/g
    data = [];
    inputtext.split("\n").forEach(function(element) {
        let entry = [
            parseInt(element.split(':')[0]),
            element.split(':')[1].match(regex).map(Number)
        ];
        data.push(entry);
    });
    let sum = 0;
    for (let i=0; i < data.length; i++) {
        if (possible(data[i])) {
            sum = sum + data[i][0];
        }
    }
    document.getElementById("asd").innerHTML = sum;
}
function possible(entry) {
    let combinations = 2**(entry[1].length - 1);
    let target = entry[0];
    for (let i=0; i < combinations; i++) {
        let operations = i;
        let result = entry[1][0];
        for (let ii=1; ii < entry[1].length; ii++) {
            if (operations & 1) {
                result = result + entry[1][ii];
            } else {
                result = result * entry[1][ii];
            }
            operations = operations >> 1;
        }
        if (result == target) { return true; }
    }
    return false;
}

