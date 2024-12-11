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
    let combinations = 3**(entry[1].length - 1);
    let target = entry[0];
    for (let i=0; i < combinations; i++) {
        let operations = i.toString(3);
        if (operations.length < (entry[1].length - 1)) {
            let count = (entry[1].length - 1) - operations.length;
            operations = '0'.repeat(count) + operations;
        }
        let result = entry[1][0];
        for (let ii=1; ii < entry[1].length; ii++) {
            if (operations[ii-1] == '0') {
                result = result + entry[1][ii];
            } else if (operations[ii-1] == '1') {
                result = result * entry[1][ii];
            } else {
                result = parseInt(result.toString() + entry[1][ii].toString());
            }
        }
        if (result == target) { return true; }
    }
    return false;
}

