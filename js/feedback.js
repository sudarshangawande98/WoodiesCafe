let inpkey = document.getElementById("inpkey");
let inpvalue = document.getElementById("inpvalue");
let btninsert = document.getElementById("btninsert");
let isoutput = document.getElementById("isoutput");

btninsert.onclick = function () {
    let key = inpkey.value;
    let value = inpvalue.value;
    console.log(key);
    console.log(value);
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
}

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    isoutput.innerHTML += `${key}: ${value}<br>`
}