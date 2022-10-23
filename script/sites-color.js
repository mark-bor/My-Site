// let sites_color;
// let sun_moon;
let input_in_sites_color;
let titles;

document.addEventListener('DOMContentLoaded', () => {
    // sites_color = document.getElementById('sites_color');
    // sun_moon = document.getElementById('sun_moon');
    input_in_sites_color = document.getElementById('input_in_sites_color');
    titles = document.querySelectorAll('.light_dark');
    
    setColor();
    
    input_in_sites_color.onchange = () => {
        if (input_in_sites_color.checked===false) {
            titles.forEach((el) => el.style.color = '#1E2939')
            localStorage.setItem('color', 'sun');
        } else {
            titles.forEach((el) => el.style.color = '#D9D9D9')
            localStorage.setItem('color', 'moon');
        }
        bodiesColor();
    };
});

function setColor() {
    if (!localStorage.getItem('color')) {
        localStorage.setItem('color', 'sun');
    } else {
        const colorType = localStorage.getItem('color');

        if (colorType==='moon') {
            titles.forEach((el) => el.style.color = '#D9D9D9')
            localStorage.setItem('color', 'moon');
            input_in_sites_color.checked=true;
        } else {
            titles.forEach((el) => el.style.color = '#1E2939')
            localStorage.setItem('color', 'sun');
            input_in_sites_color.checked=false;
        }
    }
}

export function bodiesColor(color='#D9D9D9') {
    const body = document.querySelector('body');
    if (input_in_sites_color.checked===false) {
        body.style.background = color;
    } else {
        body.style.background = '#242F3E';
    }
}
