var div = document.getElementById("box");

for (var count = 0; count < 9; count++) {
    box.innerHTML += `<div onclick={tick(this)} class="boxes"></div>`;

}

// var isfirstuser = true;

// function tick(box) {
//     if (isfirstuser === true) {
//         box.innerHTML = '<img />'
//         isfirstuser === false
//     }

//     else (isfirstuser === true) {
//         box.innerHTML = '<img />'
//         isfirstuser === false
//     }
// }


