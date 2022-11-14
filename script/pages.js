import { bodiesColor } from "./sites-color.js";
import { addSkills } from "./skills.js";
import { certificatesLoaded } from "./certificates.js";
import { birthdayTimer } from "./birthday-timer.js";
import { game } from "./tanks_game/game.js";
import { music } from "./tanks_game/menu/assembly.js";
import { soundStor } from "./tanks_game/menu/options/options.js";


// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function() {
    
    getPage();// Показати сторінку
    
    // Обрати всі кнопки
    document.querySelectorAll('.but').forEach(link => {

        // Коли кнопку натиснуто, перейти на сторінку
        link.onclick = function (e) {
            e.preventDefault();
            let section = this.dataset.page;
            localStorage.setItem('section', section);// Зберегти у локальному сховищі
            createURL(section);// Додати поточний стан до історії
            showPage(section);// Отримати значення лічильника з локального сховища
        }
    })
});

// Отримати сторінку
function getPage() {
    if (!window.location.hash) {
        showPage('home');
        localStorage.setItem('section', 'home');
        return;
    }

    let url = deleteElement(deleteElement(window.location.hash.split(''), '#').split(''), '/');
    const urlHead = deleteElement(url.split(' '), ' ');
    const urlResume = deleteElement(deleteElement(url.split(' '), 'resume').split(' '), ' ');
    const urlWorks = deleteElement(deleteElement(url.split(' '), 'works').split(' '), ' ');
    
    if (urlHead === 'Home.html') {
        showPage('home');
        localStorage.setItem('section', 'home');

    } else if (url===' ' | url==='') {
        showPage('home');
        localStorage.setItem('section', 'home');

    } else if (!window.location.hash) {
        showPage('home');
        localStorage.setItem('section', 'home');

    } else {
        if (urlHead==='resume' | urlHead==='certificates' | urlHead==='works' | urlHead==='contacts') {
            showPage(urlHead);
            localStorage.setItem('section', urlHead);

        } else if (urlResume === 'resume_1' | urlResume === 'resume_2') {
            showPage(urlResume);
            localStorage.setItem('section', urlResume);

        } else {
            showPage(urlWorks);
            localStorage.setItem('section', urlWorks);
        }
    }
}

function deleteElement(arr, elem) {
    let array = [...arr];
    if (array.length>0) {
        array.forEach((e) => {
            if (e===elem) {
                const elemIndex = array.indexOf(e);
                array.splice(elemIndex, 1, ' ');
            }
        });
        return array.join('');
    }
}

// Показати одну сторінку та приховати інші
function showPage(page) {

    const div_block = document.querySelectorAll('.div');
    const cat = document.querySelector('#cat');
    const footer = document.querySelector('#footer');

    document.getElementById('menu_in_tank_game').style.display='block';
    // document.getElementById('open_menu').click();
    music?.pause();
    soundStor.tankMotor?.pause();
    
    if (page === 'home' | page === 'resume' | page === 'certificates' | page === 'works' | page === 'contacts'){
        punctOfMenuWindow(div_block, page);// Позначити вибраний пункт у вспливаючому меню
        showSection(div_block, page);// Роказати секцію
        
        bodiesColor();
        page === 'home'? cat.style.display = 'block': cat.style.display = 'none';
        page === 'contacts'? footer.style.display = 'none': footer.style.display = 'block';        
        if  (page === 'certificates') {
            if (document.querySelector('#menu_block_text').children.length===0 & 
                document.querySelector('#menu_block_text_lang').children.length===0) { 
                certificatesLoaded();
            }
        }

    } else {
        showSection(div_block, page);
        // body.style.background = '#242F3E';
        bodiesColor('#242F3E');
        cat.style.display = 'none';
        footer.style.display = 'none';
        
        if (page === 'resume_1' | page === 'resume_2') { 
            bodiesColor('#F5F7FA');
            if (page === 'resume_2') {
                if (document.querySelector('#tech_skills').children.length===0 & 
                    document.querySelector('#soft_skills').children.length===0) { 
                    addSkills();
                }
            }
        }
        
        if (page === 'birthday-timer') { birthdayTimer(); }
        if (page === 'game') { document.getElementById('game_field').children.length===0? game(): null; }
    }

    document.querySelector('#link').className = 'link';
    document.querySelector('#menu_window').className = 'transMenu_S';
}

function showSection(divBlock, page) {
    divBlock.forEach(div => div.style.display = 'none');// Сховати всі div:
    document.querySelector(`#${page}`).style.display = 'block';// Показати div, переданий у аргументі функції
}

function punctOfMenuWindow(divBlock, page) {
    divBlock.forEach(div => {
        if (div.style.display === 'block') {
            const men_win = document.querySelectorAll('.men_win');
            const cv = men_win[0].innerHTML;
            const project = men_win[1].innerHTML;
            const certificate = men_win[2].innerHTML;
            const contact = men_win[3].innerHTML;
            
            men_win.forEach(win => {
                if (page === 'resume' & win.innerHTML === cv){
                    win.classList.add('act');
                } else if (page === 'works' & win.innerHTML === project){
                    win.classList.add('act');
                } else if (page === 'certificates' & win.innerHTML === certificate){
                    win.classList.add('act');
                } else if (page === 'contacts' & win.innerHTML === contact){
                    win.classList.add('act');
                } else {
                    win.classList.remove('act');
                }
            });
        }
    });
}

function createURL(page) {
    if (page === 'home'){
        history.pushState({page: page}, '', ' ');
    } else if (page==='resume' | page==='certificates' | page==='works' | page==='contacts') {
        history.pushState({page: page}, '', `#${page}`);
    } else if (page === 'resume_1' | page === 'resume_2') {
        history.pushState({page: page}, '', `#resume/${page}`);
    } else {
        history.pushState({page: page}, '', `#works/${page}`);
    }
}

// Коли натиснута стрілка назад, показати попередній розділ
window.onpopstate = function(event) {
    let eve = event.state.page;
    showPage(eve);
}