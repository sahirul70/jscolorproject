let body =document.getElementById('colorGenarator');
let colorButton = document.getElementById('colorButton');
let rgb = document.getElementById('rgb');
let hax = document.getElementById('hax');


colorGenarator()
colorButton.addEventListener('click',colorGenarator);


function colorGenarator(){
    let r = getRandomNumner(0,225);
    let g = getRandomNumner(0,225);
    let b = getRandomNumner(0,225);

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    rgb.innerHTML =  `rgb(${r},${g},${b})`;
    hax.innerHTML =  `#${r.toString(16)}${g.toString(16)}S${b.toString(16)}`;
    return r +' ,'+ g +', '+ b;
}


function getRandomNumner(min,max){
    return Math.floor(Math.random()*(max -min+1)+min)
}
console.log(colorGenarator());