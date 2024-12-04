function solve() {
    sum = 0;
    inputtext = inputtext.replace(/(\r\n|\n|\r)/gm,"");
    while (true) {
        let tmp = inputtext.replace(/don't\(\).*?do\(\)/,"");
        if (tmp === inputtext) { break; }
        inputtext = tmp;
    }
    inputtext = inputtext.replace(/don't\(\).*?$/,"");
    const regexp = /mul\((\d+),(\d+)\)/g;    
    const array = [...inputtext.matchAll(regexp)];
    for (let i=0; i < array.length; i++) {
        sum = sum + (array[i][1] * array[i][2]);
    }
    document.getElementById("asd").innerHTML = sum;
}