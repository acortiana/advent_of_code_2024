function solve() {
    inputtext = inputtext.split('');
    inputtext = inputtext.map(Number);
    let max_i = 0;
    for (let i=0; i < inputtext.length; i=i+2) {
        max_i = max_i + inputtext[i];
    }
    let checksum = 0;
    let f_index = 0;
    let b_index = inputtext.length - 2;
    if (inputtext.length % 2) { b_index = inputtext.length - 1; }
    let f_counter = inputtext[f_index];
    let b_counter = inputtext[b_index];
    let i = 0;
    while (1) {
        if (i >= max_i) { break; }
        if (f_counter == 0) {
            f_index++;
            f_counter = inputtext[f_index];
            continue;
        }
        if (b_counter == 0) {
            b_index = b_index - 2;
            b_counter = inputtext[b_index];
        }
        if (f_index % 2) {
            //space
            let fileid = b_index / 2;
            checksum = checksum + (fileid * i);
            b_counter--;
        } else {
            //block
            let fileid = f_index / 2;
            checksum = checksum + (fileid * i);
        }
        f_counter--;
        i++;
    }
    document.getElementById("asd").innerHTML = checksum;
}