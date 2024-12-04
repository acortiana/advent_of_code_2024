function solve() {
    first = [];
    second = [];
    result = 0;
    inputtext.split("\n").forEach(function(element) {
        asd = element.split(/\s+/);
        first.push(parseInt(asd[0]));
        second.push(parseInt(asd[1]));
    });
    for (let i=0; i < first.length; i++) {
        result = result + (first[i] * matchcount(second,first[i]));
    }
    document.getElementById("asd").innerHTML = result;
}

function matchcount(myarray, myelement) {
    let count = 0;
    for (let i=0; i < myarray.length; i++) {
        if (myarray[i] === myelement) {
            count++;
        }
    }
    return count;
}