// Коли натиснута стрілка назад, показати попередній розділ
window.onpopstate = function(event) {
    let eve = event.state.page;
    showPage(eve);
}

// Показати одну сторінку та приховати інші
function showPage(page) {

    const div_block = document.querySelectorAll('.div');
    
    if (page === 'home' | page === 'resume' | page === 'certificates' | page === 'works' | page === 'contacts'){
            
        // Позначити вибраний пункт
        div_block.forEach(div => {
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
        
        // Сховати всі div:
        div_block.forEach(div => div.style.display = 'none');
        // Показати div, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';
        
        document.querySelector('body').style.background = '#D9D9D9';
        page === 'home'? document.querySelector('#cat').style.display = 'block': document.querySelector('#cat').style.display = 'none';
        page === 'contacts'? document.querySelector('#footer').style.display = 'none': document.querySelector('#footer').style.display = 'block';
        
    } else if (page === 'resume_1' | page === 'resume_2'){
        
        // Сховати всі div:
        div_block.forEach(div => div.style.display = 'none');
        // Показати div_P, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';

        document.querySelector('#footer').style.display = 'none';
        document.querySelector('body').style.background = '#F5F7FA';
        document.querySelector('#cat').style.display = 'none';

    } else {
        // Сховати всі div:
        div_block.forEach(div => div.style.display = 'none');
        // Показати div_P, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'block';

        document.querySelector('#footer').style.display = 'none';
        document.querySelector('body').style.background = '#242F3E';
        document.querySelector('#cat').style.display = 'none';
    }

    document.querySelector('button').className = 'link';
    document.querySelector('#menu_window').className = 'transMenu_S';
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
    let urlProjHash = url.join('');
    
    if (!window.location.hash){
        showPage('home');
        localStorage.setItem('section', 'home');

    } else if (urlHash==='resume' | urlHash==='certificates' | urlHash==='works' | urlHash==='contacts') {
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
    // Bстановити значення у локальному сховищі
    getPage();
    
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
                        section==='works' | section==='contacts') {
                history.pushState({page: section}, '', `#${section}`);
            } else if (section === 'resume_1' | section === 'resume_2') {
                history.pushState({page: section}, '', `#resume/${section}`);
            } else {
                history.pushState({page: section}, '', `#works/${section}`);
            }            
        }
    })
});