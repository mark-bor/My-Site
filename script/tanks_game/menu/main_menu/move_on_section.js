

export function swithMeinMenuSection() {
    const buttons = document.querySelectorAll('.button_in_nav_on_main_menu');

    buttons.forEach((el) => el.classList.remove('button_in_nav_on_main_menu_activ'));
    buttons[0].classList.add('button_in_nav_on_main_menu_activ');

    buttons.forEach((btn) => {
        
        btn.onclick = (elem) => {
            document.querySelectorAll('.section_in_main_menu').forEach((el) => {
                el.id===`${elem.target.dataset.section}_in_main_menu_section`? el.style.display = 'block': el.style.display = 'none';
            });
            
            buttons.forEach((el) => el.classList.remove('button_in_nav_on_main_menu_activ'));
            elem.target.classList.add('button_in_nav_on_main_menu_activ');
        }
    });
}