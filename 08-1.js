function solve() {
    data = [];
    antinodes = new Set();
    inputtext.split("\n").forEach(function(element) {
        data.push(element);
    });
    nodes = find_unique_nodes();
    for (const [key, value] of Object.entries(nodes)) {
        exec_for_all_set_permutations(find_antinodes,value);
    }
    document.getElementById("asd").innerHTML = antinodes.size;
}
function find_unique_nodes() {
    let nodes = {};
    for (let x=0; x < data.length; x++) {
        for (let y=0; y < data[0].length; y++) {
            let key = data[x][y];
            if (key == '.') { continue; }
            if (!(key in nodes)) { nodes[key] = new Set(); }
            nodes[key].add(x + ',' + y);
        }
    }
    return nodes;
}
function exec_for_all_set_permutations(myfunc,myset) {
    let myarray = Array.from(myset);
    for (let i=0; i < myarray.length; i++) {
        for (let ii=i+1; ii < myarray.length; ii++) {
            myfunc(myarray[i],myarray[ii]);
        }
    }
}
function find_antinodes(point1,point2) {
    point1=point1.split(',');
    point2=point2.split(',');
    point1 = point1.map(Number);
    point2 = point2.map(Number);
    let xdiff = point1[0] - point2[0];
    let ydiff = point1[1] - point2[1];
    let x1, x2, y1, y2;
    if (xdiff >= 0) {
        x1 = point1[0] + Math.abs(xdiff);
        x2 = point2[0] - Math.abs(xdiff);
    } else {
        x1 = point1[0] - Math.abs(xdiff);
        x2 = point2[0] + Math.abs(xdiff);
    }
    if (ydiff >= 0) {
        y1 = point1[1] + Math.abs(ydiff);
        y2 = point2[1] - Math.abs(ydiff);
    } else {
        y1 = point1[1] - Math.abs(ydiff);
        y2 = point2[1] + Math.abs(ydiff);
    }
    
    if (x1 >= 0 && x1 < data.length && y1 >= 0 && y1 < data[0].length) {
        antinodes.add(x1 + ',' + y1);
    }
    if (x2 >= 0 && x2 < data.length && y2 >= 0 && y2 < data[0].length) {
        antinodes.add(x2 + ',' + y2);
    }
}