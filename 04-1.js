function solve() {
    let data = [];
    inputtext.split("\n").forEach(function(element) {
        data.push(element);
    });
    let counter = 0;
    for (let ix = 0; ix < data.length; ix++) {
        for (let iy = 0; iy < data[0].length; iy++) {
            if (data[ix][iy] == 'X') {
                counter = counter + scan(ix,iy,data);
            }
        }
    }
    document.getElementById("asd").innerHTML = counter;
}
function scan(x,y,data) {
    let counter = 0;
    let xlen = data.length;
    let ylen = data[0].length;
    let target = "MAS";
    let xmin = target.length;
    let xmax = xlen - (target.length + 1);
    let ymin = target.length;
    let ymax = ylen - (target.length + 1);
    for (let ix = -1; ix < 2; ix++) {
        if ((ix == -1) && (x < xmin)) { continue; }
        if ((ix == 1) && (x > xmax)) { continue; }
        for (let iy = -1; iy < 2; iy++) {
            if ((iy == -1) && (y < ymin)) { continue; }
            if ((iy == 1) && (y > ymax)) { continue; }
            if ((ix == 0) && (iy == 0)) { continue; }
            let matches = 0;
            for (let i=1; i <= target.length; i++) {
                let my_x = x + (i*ix);
                let my_y = y + (i*iy);
                if (data[my_x][my_y] != target[i-1]) { break; }
                matches++;
            }
            if (matches == target.length) { counter++; }
        }
    }
    return counter;
}