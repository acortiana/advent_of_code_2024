function solve() {
    let data = [];
    inputtext.split("\n").forEach(function(element) {
        data.push(element);
    });
    let counter = 0;
    for (let ix = 0; ix < data.length; ix++) {
        for (let iy = 0; iy < data[0].length; iy++) {
            if (data[ix][iy] == 'A') {
                if (scan(ix,iy,data)) { counter++ };
            }
        }
    }
    document.getElementById("asd").innerHTML = counter;
}
function scan(x,y,data) {
    let xmax = data.length - 2;
    let ymax = data[0].length - 2;
    if ((x == 0) || (y == 0) ) { return false; }
    if ((x > xmax) || (y > ymax) ) { return false; }
    let target = "MS".charCodeAt(0) + "MS".charCodeAt(1);
    if (((data[x-1][y-1].charCodeAt(0)+ data[x+1][y+1].charCodeAt(0)) == target) &&
       ((data[x-1][y+1].charCodeAt(0)+ data[x+1][y-1].charCodeAt(0)) == target)) {
        return true;
    }
    return false;
}