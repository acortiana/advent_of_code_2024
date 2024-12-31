function solve() {
    data = [];
    inputtext.split("\n").forEach(function(element) {
        element = element.split('').map(Number);
        data.push(element);
    });
    let counter = 0;
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[0].length; y++) {
            if (data[x][y] == 0) {
                let a = search([x,y]).size
                console.log(a);
                counter = counter + a;
            }
        }
    }
    document.getElementById("asd").innerHTML = counter;
}
function search(point) {
    let target_points = new Set();
    let x = point[0];
    let y = point[1];
    let value = data[x][y];
    if (value == 9) {
        let a = new Set();
        a.add(x + '-' + y);
        return a;
    }
    for (let xx = -1; xx <= 1; xx++) {
        for (let yy = -1; yy <= 1; yy++) {
            if ((xx == 0) && (yy == 0)) { continue; }
            if ((xx != 0) && (yy != 0)) { continue; }
            let new_x = x + xx;
            let new_y = y + yy;
            if ((new_x < 0) || (new_x >= data.length)) { continue; }
            if ((new_y < 0) || (new_y >= data[0].length)) { continue; }
            if ((data[new_x][new_y] - value) == 1) {
                target_points = target_points.union(search([new_x,new_y]));
            }
        }
    }
    return target_points;
}