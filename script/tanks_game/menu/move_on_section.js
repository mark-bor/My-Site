export function moveOnSection() {
    const punctMenuFromList = document.querySelectorAll('.punct_menu_from_list');

    punctMenuFromList.forEach((btn) => {
        
        btn.onclick = (elem) => {
            document.querySelectorAll('.section_in_menu_tank_game').forEach((el) => {
                el.id===elem.target.dataset.section? el.style.display = 'block': el.style.display = 'none';
            });
            
            punctMenuFromList.forEach((el) => el.classList.remove('punct_active'));
            elem.target.classList.add('punct_active');
        }
    });
}