function solve() {
    data = [];
    inputtext.split("\n").forEach(function(element) {
        data.push(element);
    });
    document.getElementById("asd").innerHTML = process_all();
}
function process_all() {
    result = 0;
    let neighbors = new Set();
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[0].length; y++) {
            let coords = x + '-' + y;
            if (neighbors.has(coords)) { continue; }
            let tmp1 = find_neighbors([x,y]);
            let tmp2 = find_perimeter_count(tmp1);
            result = result + (tmp2 * tmp1.size);
            neighbors = neighbors.union(tmp1);
        }
    }
    return result;
}

function find_neighbors(point, neighbors = new Set()) {
    let x = point[0];
    let y = point[1];
    neighbors.add(x + '-' + y);
    let value = data[x][y];
    for (let xx = -1; xx <=1; xx++) {
        for (let yy = -1; yy <=1; yy++) {
            if ((xx == 0) && (yy == 0)) { continue; }
            if ((xx != 0) && (yy != 0)) { continue; }
            let new_x = x + xx;
            let new_y = y + yy;
            if ((new_x < 0) || (new_y < 0)) { continue; }
            if ((new_x >= data.length) || (new_y >= data[0].length)) { continue; }
            let new_value = data[new_x][new_y];
            if (new_value == value) {
                let new_coords = new_x + '-' + new_y;
                if (!(neighbors.has(new_coords))) {
                    neighbors.add(new_coords);
                    neighbors = neighbors.union(find_neighbors([new_x,new_y],neighbors));
                }
            }
        }
    }
    return neighbors;
}
function find_perimeter_count(neighbors) {
    let result = 0;
    for (const neighbor of neighbors) {
        let [x,y] = neighbor.split('-').map(Number);
        for (let xx = -1; xx <=1; xx++) {
            for (let yy = -1; yy <=1; yy++) {
                if ((xx == 0) && (yy == 0)) { continue; }
                if ((xx != 0) && (yy != 0)) { continue; }
                let new_x = x + xx;
                let new_y = y + yy;
                let new_neighbor = new_x + '-' + new_y;
                if (!(neighbors.has(new_neighbor))) {
                    result++;
                }
            }
        }
    }
    return result;
}