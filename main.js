function text() {
    document.getElementById('text').innerText = "lama's file";
}

function incresize() {
    let text = document.getElementById('text');

    let cuu = window.getComputedStyle(text).fontSize;
    let newSize = parseFloat(cuu) + 2 + 'px';
    text.style.fontSize = newSize;
}

function defontsize() {
    let text = document.getElementById('text');
    let c = window.getComputedStyle(text).fontSize;
    let newSize = parseFloat(c) - 2 + 'px';
    text.style.fontSize = newSize;
}

function txtcolor() {
    document.getElementById('text').style.color = 'red';
}

function background() {
    document.getElementById('text').style.backgroundColor = 'yellow';
}


function changeImage() {
    document.getElementById('image').src = 'img8.png';
}