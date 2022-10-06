/*------------------------------- MENU BURGER ---------------------------------------------*/
const link = document.querySelector('#link');
const menu = document.querySelector('#menu_window');

link.onclick = function () {
	link.classList.toggle('link_active');
	menu.classList.toggle('transMenu');
	menu.classList.toggle('transMenu_S');
}
// other code part in ./script/pages.js