function solve() {
    sum = 0;
    const regexp = /mul\((\d+),(\d+)\)/g;    
    const array = [...inputtext.matchAll(regexp)];
    for (let i=0; i < array.length; i++) {
        sum = sum + (array[i][1] * array[i][2]);
    }
    document.getElementById("asd").innerHTML = sum;
}