let sites_color;
// let sun_moon;
let input_in_sites_color;
let titles;

export function bodiesColor(color='#D9D9D9') {
input_in_sites_color = document.getElementById('input_in_sites_color');
const body = document.querySelector('body');

if (input_in_sites_color.checked===false) {
    if (window.location.hash.includes('#works/')) {
        body.style.background = '#242F3E';
        return;
    }
    body.style.background = color;
} else {
    body.style.background = '#242F3E';
}
}

document.addEventListener('DOMContentLoaded', () => {
    sites_color = document.getElementById('sites_color');
    // sun_moon = document.getElementById('sun_moon');
    input_in_sites_color = document.getElementById('input_in_sites_color');
    titles = document.querySelectorAll('.light_dark');
    
    getOrSetColor();
    
    input_in_sites_color.onchange = () => {
        if (input_in_sites_color.checked===false) {
            setColor('sun');
        } else {
            setColor('moon');
        }
        bodiesColor();
    };
});

function getOrSetColor() {
    if (!localStorage.getItem('color')) {
        const time = new Date;
        const hourNow =  time.getHours();
        if (hourNow>19 | 7>hourNow) {
            setColor('moon');
            input_in_sites_color.checked=true;
        } else {
            setColor('sun');
            input_in_sites_color.checked=false;
        }

    } else {
        const colorType = localStorage.getItem('color');
        if (colorType==='moon') {
            setColor('moon');
            input_in_sites_color.checked=true;
        } else {
            setColor('sun');
            input_in_sites_color.checked=false;
        }
    }
    titles.forEach((el) => el.style.transition = '0.7s');
}

function setColor(colorType) {
    if (colorType==='moon') {
        sites_color.style.background = '#595959';
        titles.forEach((el) => el.style.color = '#D9D9D9')
        localStorage.setItem('color', 'moon');
    } else {
        sites_color.style.background = '#F5F5F5';
        titles.forEach((el) => el.style.color = '#1E2939')
        localStorage.setItem('color', 'sun');
    } 
}
