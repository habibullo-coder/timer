let hr = +prompt('Soat')
let m  = +prompt('Min')
let hh = document.getElementById('spanTwo')
let mn = document.getElementById('spanTheree')
let sc = document.getElementById('spanOne')

hh.style.transform = `rotate(${hr * 30}deg)`
mn.style.transform = `rotate( ${m * 6}deg)`;

const timerId = setInterval(frame,60000)

function frame() {
    m=m+1;
    mn.style.transform = `rotate( ${m * 6}deg)`;
    console.log(m);
    if(m == 60){
        m = 0;
        hr=hr+1;
        hh.style.transform = `rotate(${hr * 30}deg)`
        console.log(hr);
    }
}


if(hh.style.transform == 'rotate(360deg)'){
    hh.style.transform = 'rotate(0deg)';
}

if(mn.style.transform == 'rotate(360deg)'){
    mn.style.transform = 'rotate(0deg)';
}

