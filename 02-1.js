function solve() {
    let safecount = 0;
    inputtext.split("\n").forEach(function(element) {
        asd = element.split(/\s+/);
        if (is_safe(asd)) { safecount++ }
    });
    document.getElementById("asd").innerHTML = safecount;
}
function is_safe(myinputarray) {
    var myarray = myinputarray.map(Number);
    if (myarray[0] > myarray[1]) { myarray = myarray.reverse() }
    for (let i=1; i < myarray.length; i++) {
        if (mycompare(myarray[i-1], myarray[i]) == false) { return false }
    }
    return true;
}
function mycompare(first,second) {
    mydiff = second - first;
    if (mydiff > 3 ) { return false }
    if (mydiff < 1 ) { return false }
    return true;
}