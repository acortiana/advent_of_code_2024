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
            console.log(tmp1);
            console.log(tmp2);
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
    let n = [{},{},{},{}];
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
                    if (xx == -1) {
                        if (!(new_x in n[2])) { n[2][new_x] = new Set()}
                        n[2][new_x].add(new_y);
                    }
                    if (xx == 1) {
                        if (!(new_x in n[3])) { n[3][new_x] = new Set()}
                        n[3][new_x].add(new_y);
                    }
                    if (yy == -1) {
                        if (!(new_y in n[0])) { n[0][new_y] = new Set()}
                        n[0][new_y].add(new_x);
                    }
                    if (yy == 1) {
                        if (!(new_y in n[1])) { n[1][new_y] = new Set()}
                        n[1][new_y].add(new_x);
                    }  
                }
            }
        }
    }
    for (let i = 0; i < n.length; i++) {
        let tmp = {};
        for (const [key, value] of Object.entries(n[i])) {
            tmp[key] = remove_sequences_and_sort(Array.from(value));
        } 
        n[i] = tmp;
        console.log(tmp);
    }
    for (let i = 0; i < n.length; i++) {
        for (const [key, value] of Object.entries(n[i])) {
            result = result + value.length;
        }
    }
    return result;
}
function remove_sequences_and_sort(myarray) {
    let newarray = [];
    myarray.sort(function(a, b) {return a - b;});
    for (let i = 0; i < myarray.length; i++) {
        if ((myarray[i] - myarray[i-1]) == 1) {continue;}
        newarray.push(myarray[i]);
    }
    return newarray.sort(function(a, b) {return a - b;});;
}