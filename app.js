let body = document.getElementById('colorGenarator')
let rgb = document.getElementById('rgb');
let hax = document.getElementById('hax');
let buttonCon = document.getElementById('colorButton');

colorGenarator()

buttonCon.addEventListener('click',colorGenarator);

function colorGenarator(){
    let r = getRandomNumber(0,255);
    let g = getRandomNumber(0,255);
    let b = getRandomNumber(0,255);
    body.style.background =`rgb(${r},${g},${b})`;
    rgb.innerHTML = `rgb(${r},${g},${b})`;
    hax.innerHTML = `#${r.toString(16)}${g.toString(16)}${b.toString(16)})`;
    return r + ' ,'+ g +' ,'+ b
}

function getRandomNumber(max,min){
    return Math.floor(Math.random()*(max-min+1)+min)
}