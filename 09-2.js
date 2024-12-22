function solve() {
    inputtext = inputtext.split('');
    inputtext = inputtext.map(Number);
    data = [];
    for (let i=0; i < inputtext.length; i++) {
        let fileid = -1;        //space
        if ((i % 2) == 0) {
            fileid = i/2;       //block
        }
        for (let ii=0; ii < inputtext[i]; ii++) {
                data.push(fileid);
        }
    }
    last_pointer = data.length - 1;
    while (1) {
        a = get_last_block();
        if (a == null) { break;}
        put_block(a);
    }
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == -1) { continue; }
        result = result + (data[i] * i);
    }
    document.getElementById("asd").innerHTML = result;
}
function get_last_block() {
    if (last_pointer <= -1) { return null }
    while (data[last_pointer] == -1) {
        last_pointer--;
        if (last_pointer <= -1) { return null }
    }
    let end = last_pointer;
    let fileid = data[last_pointer];
    let filesize = 0;
    while (data[last_pointer] == fileid) {
        filesize++;
        last_pointer--;
        if (last_pointer <= -1) { break; }
    }
    let start = last_pointer + 1;
    return [fileid, filesize, start, end];
}
function delete_block(myblock) {
    let start = myblock[2];
    let end = myblock[3];
    for (; start <= end; start++) {
        data[start] = -1;
    }
}
function put_block(myblock) {
    let fileid = myblock[0];
    let filesize = myblock[1];
    let start = myblock[2];
    let mysize = 0;
    let i;
    for (i = 0; i < data.length; i++ ) {
        if (data[i] == -1) {
            mysize++;
        } else {
            mysize = 0;
        }
        if (mysize == filesize) {
            if (i >= start ) { return; }
            for (; mysize > 0; mysize--) {
                data[i] = fileid;
                i--;
            }
            delete_block(myblock);
            return;
        }
    }
}