function solve() {
    let data = [];
    inputtext.split("\n").forEach(function(element) {
        data.push(element);
    });
    let positions = new Set();
    let position = find_start(data);
    while (position[0] != -1) {
        positions.add(position[0] + ',' + position[1]);
        position = move(data,position);
    }
    document.getElementById("asd").innerHTML = positions.size;
}

let directions = [
    [-1, 0],         //UP
    [0, 1],          //RIGHT
    [1, 0],          //DOWN
    [0, -1]          //LEFT
];
function find_start(data) {
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[0].length; y++) {
            if (data[x][y] == '^') {
                return [x,y,0];  //UP
            }
        }
    }
}
function is_obstruction(data,x,y) {
    if (data[x] == undefined) { return false;}
    if (data[x][y] == undefined) { return false;}
    if (data[x][y] == '#') { return true;}
    return false;
}
function move(data,position) {
    let x_add = directions[position[2]][0];
    let y_add = directions[position[2]][1];
    while (is_obstruction(data,position[0]+x_add, position[1]+y_add)) {
        position[2] = (position[2] + 1) % 4;
        x_add = directions[position[2]][0];
        y_add = directions[position[2]][1];
    }
    let new_position = [position[0]+x_add, position[1]+y_add, position[2]]
    if ((new_position[0] < 0) || (new_position[0] >= data.length)) {
        return [-1,-1,-1];
    }
    if ((new_position[1] < 0) || (new_position[1] >= data[0].length)) {
        return [-1,-1,-1];
    }
    return new_position;
}