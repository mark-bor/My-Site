/*------------------------------- MENU BURGER ---------------------------------------------*/

function even (el){
	let element = document.querySelector('button');

	if (element.className === 'link') {
		element.className = 'link_active';
	}		
}
function evenT (el){
	let element = document.querySelector('button');

	if (element.className === 'link_active') {
		element.className = 'link';
	}
}

/*------------------------------- TRANS MENU ---------------------------------------------*/

function ev (el){
	let menu = document.querySelector('.transMenu');

	if (menu.className === 'transMenu') {
		menu.className = 'transMenu_2';
	}
}
function evT (el){
	let menu = document.querySelector('.transMenu_2');
	
	if (menu.className === 'transMenu_2') {
		menu.className = 'transMenu';
	}	
}