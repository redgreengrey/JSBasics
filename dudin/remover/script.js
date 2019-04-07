function charRemover() {
    let str = document.getElementById("inputString").value.toLocaleLowerCase();
    const ignore = ["?", "!", ":", ";", ",", ".", " ", "\t", "\r"];
    let letters = {}, result;
    let words = str.split(' ');

    words.forEach(function (word){
        word.split('').forEach(function (char, index) {
            let lower = char.toLocaleLowerCase();
            if (!letters[lower] && ignore.indexOf(lower) === -1 && word.indexOf(lower, index + 1) !== -1) {
                letters[lower] = 1;
            }
        });
    });

    result = str.split('').filter(function (v) {
        return !letters[v.toLocaleLowerCase()];
    }).join('');
    document.getElementById("outString").value = result.trim();
}
