function solve() {
    first = [];
    second = [];
    result = 0;
    inputtext.split("\n").forEach(function(element) {
        asd = element.split(/\s+/);
        first.push(parseInt(asd[0]));
        second.push(parseInt(asd[1]));
    });
    first.sort(function(a, b){return a - b});
    second.sort(function(a, b){return a - b});
    for (let i=0; i < first.length; i++) {
        result = result + Math.abs(first[i] - second[i]);
    }
    document.getElementById("asd").innerHTML = result;
}