console.log('picker_color.js charge');

let root = document.querySelector(':root');
let picker_color = document.getElementById('picker_color');
const root_style = getComputedStyle(root);

let color_pick_princ = document.getElementById('color_pick_princ');
let color_pick_second = document.getElementById('color_pick_second');
let color_pick_third = document.getElementById('color_pick_third');
let color_pick_white = document.getElementById('color_pick_white');

// color_pick_princ.value = root_style.getPropertyValue('--main-dark-grey');
// color_pick_second.value = root_style.getPropertyValue('--main-second-color');
// color_pick_third.value = root_style.getPropertyValue('--main-third-color');

color_pick_princ.addEventListener('input', ()=> {
    root.style.setProperty('--main-dark-grey', color_pick_princ.value)
})

color_pick_second.addEventListener('input', ()=> {
    root.style.setProperty('--main-second-color', color_pick_second.value)
})

color_pick_third.addEventListener('input', ()=> {
    root.style.setProperty('--main-third-color', color_pick_third.value)
})

color_pick_white.addEventListener('input', ()=> {
    root.style.setProperty('--main-texte', color_pick_white.value)
})

const container_color = document.getElementById('container_color');
const close_cross = document.getElementById('close_cross_picker');

container_color.addEventListener('click', ()=> {
    container_color.classList.add('active');
})

close_cross.addEventListener('click', ()=> {
    container_color.classList.remove('active');
})