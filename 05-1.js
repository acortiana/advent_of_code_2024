function solve() {
    const reg1 = /^([0-9]+)\|([0-9]+)$/;
    const reg2 = /[0-9]+/g;
    rules = {};
    updates = [];
    inputtext.split("\n").forEach(function(element) {
        let rule = element.match(reg1);
        if (rule) {
            let a = parseInt(rule[1]);
            let b = parseInt(rule[2]);
            if (rules[b] == undefined) {
                rules[b] = new Set();
            }
            rules[b].add(a);
            return;
        }
        let update = element.match(reg2);
        if (update) {
            update = update.map(Number);
            updates.push(update);
        }
    });
    let counter = 0;
    for (i in updates) {
        let update = updates[i];
        if (verify_correctness(rules,update)) {
            counter = counter + update[parseInt(update.length/2)];
        }
    }
    document.getElementById("asd").innerHTML = counter;
}
function verify_correctness(rules,update) {
    for (let i=0; i < update.length; i++) {
        let a = update[i];
        for (let ii=(i+1); ii < update.length; ii++) {
            let b = update[ii];
            if (rules[a].has(b)) { return false;}
        }
    }
    return true;
}