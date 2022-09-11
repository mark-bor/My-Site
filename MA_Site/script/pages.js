


// Коли натиснута стрілка назад, показати попередній розділ
window.onpopstate = function(event) {
    let eve = event.state.page;
    showPage(eve);
}

/*
function showSection(section) {
    fetch(`/sections/${section}`)
    .then(response => response.text())
    .then(text => {
        console.log(text);
    });
}
*/


// Показати одну сторінку та приховати інші
function showPage(page) {
    
    if (page === 'home' | 
        page === 'resume' | 
        page === 'certificates' | 
        page === 'projects' | 
        page === 'contacts'){

        const men_win = document.querySelectorAll('.men_win');
        const div_block = document.querySelectorAll('.div');
        let len = men_win.length;
        let len_div = div_block.length;

        // Позначити вибраний пункт
        div_block.forEach(div_block => {
            if (div_block.style.display === 'block') {
                for (let j=0; j<len; j++) {
                    let cv = men_win[0].innerHTML;
                    let project = men_win[1].innerHTML;
                    let certificate = men_win[2].innerHTML;
                    let contact = men_win[3].innerHTML;
                    
                    if (page === 'resume' & men_win[j].innerHTML === cv){
                        men_win[j].classList.add('act');
                    } else if (page === 'projects' & men_win[j].innerHTML === project){
                        men_win[j].classList.add('act');
                    } else if (page === 'certificates' & men_win[j].innerHTML === certificate){
                        men_win[j].classList.add('act');
                    } else if (page === 'contacts' & men_win[j].innerHTML === contact){
                        men_win[j].classList.add('act');
                    } else {
                        men_win[j].classList.remove('act');
                    }
                }
            }
        });

        // Сховати всі div:
        document.querySelectorAll('.div').forEach(div => {
            div.style.display = 'none';
        });

        document.querySelector('body').style.background = '#D9D9D9';

        if (page === 'home') {
            document.querySelector('#cat').style.display = 'block';
        } else {
            document.querySelector('#cat').style.display = 'none';
        }

        if (page === 'contacts'){
            document.querySelector('#footer').style.display = 'none';
        } else {
            document.querySelector('#footer').style.display = 'block';
        }

        // Показати div, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';

    } else if (page === 'resume_1' | page === 'resume_2'){

        // Сховати всі div:
        document.querySelectorAll('.div').forEach(div => {
            div.style.display = 'none';
        });

        document.querySelector('#footer').style.display = 'none';
        document.querySelector('body').style.background = '#F5F7FA';
        document.querySelector('#cat').style.display = 'none';

        // Показати div_P, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';

    } else {

        // Сховати всі div:
        document.querySelectorAll('.div').forEach(div => {
            div.style.display = 'none';
        });

        document.querySelector('#footer').style.display = 'none';
        document.querySelector('body').style.background = '#242F3E';
        document.querySelector('#cat').style.display = 'none';

        // Показати div_P, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';
    }

    document.querySelector('button').className = 'link';
    document.querySelector('#transMenu').className = 'transMenu';
}

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
    url.shift();
    url.shift();
    url.shift();
    let urlProjHash = url.join('');
    
    if (!window.location.hash){
        showPage('home');
        localStorage.setItem('section', 'home');

    } else if (urlHash==='resume' | urlHash==='certificates' | 
                urlHash==='projects' | urlHash==='contacts') {
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

// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function() {

    // Перевірити, чи вже є значення у локальному сховищі
    if (!localStorage.getItem('section')){
        // Якщо ні, встановити у локальному сховищі
        getPage();
    } else {
        // showPage(localStorage.getItem('section'));
        getPage();
    }   
    
    
    // Обрати всі кнопки
    document.querySelectorAll('.but').forEach(button => {

        // Коли кнопку натиснуто, перейти на сторінку
        button.onclick = function () {
            let section = this.dataset.page;

            // Зберегти у локальному сховищі
            localStorage.setItem('section', section);

            // Отримати значення лічильника з локального сховища
            showPage(section);

            // Додати поточний стан до історії
            if (section === 'home'){
                history.pushState({page: section}, '', ' ');
            } else if (section==='resume' | section==='certificates' | 
                        section==='projects' | section==='contacts') {
                history.pushState({page: section}, '', `#${section}`);
            } else if (section === 'resume_1' | section === 'resume_2') {
                history.pushState({page: section}, '', `#resume/${section}`);
            } else {
                history.pushState({page: section}, '', `#progects/${section}`);
            }            
        }
    })
});