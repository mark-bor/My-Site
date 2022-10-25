import { certificatesLoaded } from "./certificates.js";
import { birthdayTimer } from "./birthday-timer.js";
import { addSkills } from "./skills.js";
import { bodiesColor } from "./sites-color.js";

// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function() {
    
    getPage();// Перевірка, чи є значення у локальному сховищі, встановити якщо немає
    
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
    let url = window.location.hash.split('');
    url.shift();
    let urlHash = url.join('');

    url.shift();
    url.shift();
    url.shift();
    url.shift();
    url.shift();
    url.shift();
    let urlProjHash = url.join('');
    
    if (!window.location.hash){
        showPage('home');
        localStorage.setItem('section', 'home');

    } else {
        if (urlHash==='resume' | urlHash==='certificates' | urlHash==='works' | urlHash==='contacts') {
            showPage(urlHash);
            localStorage.setItem('section', urlHash);

        } else if (urlHash === 'resume/resume_1') {
            showPage('resume_1');
            localStorage.setItem('section', 'resume_1');

        } else if (urlHash === 'resume/resume_2') {
            showPage('resume_2');
            localStorage.setItem('section', 'resume_2');

        } else {
            showPage(urlProjHash);
            localStorage.setItem('section', urlProjHash);
        }
    }
}

// Показати одну сторінку та приховати інші
function showPage(page) {

    const div_block = document.querySelectorAll('.div');
    const cat = document.querySelector('#cat');
    const footer = document.querySelector('#footer');
    
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