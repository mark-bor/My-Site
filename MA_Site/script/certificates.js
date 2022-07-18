/*------------------------------- CERTIFICATES ---------------------------------------------*/

function blockText1 (el){
	let menu = document.querySelector('.block-text-1');

	if (menu.className === 'block-text-1') {
		menu.className = 'block-text-1-T';
	}
}
function blockText1T (el){
	let menu = document.querySelector('.block-text-1-T');
	
	if (menu.className === 'block-text-1-T') {
		menu.className = 'block-text-1';
	}	
}

function blockText2 (el){
	let menu = document.querySelector('.block-text-2');

	if (menu.className === 'block-text-2') {
		menu.className = 'block-text-2-T';
	}
}
function blockText2T (el){
	let menu = document.querySelector('.block-text-2-T');
	
	if (menu.className === 'block-text-2-T') {
		menu.className = 'block-text-2';
	}	
}

function blockText3 (el){
	let menu = document.querySelector('.block-text-3');

	if (menu.className === 'block-text-3') {
		menu.className = 'block-text-3-T';
	}
}
function blockText3T (el){
	let menu = document.querySelector('.block-text-3-T');
	
	if (menu.className === 'block-text-3-T') {
		menu.className = 'block-text-3';
	}	
}

/*------------------------------- SCROLE RIGHT ---------------------------------------------*/

function right (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === 'translateX(0px)'){
		return slider.style.transform = 'translateX(-950px)';
	}
	if (slider.style.transform === 'translateX(-950px)'){
		return slider.style.transform = 'translateX(-1900px)';
	}
	if (slider.style.transform === 'translateX(-1900px)'){
		return slider.style.transform = 'translateX(-2850px)';
	}
	
}

/*------------------------------- SCROLE LEFT ---------------------------------------------*/

function left (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === 'translateX(-2850px)'){
		return slider.style.transform = 'translateX(-1900px)';
	}
	if (slider.style.transform === 'translateX(-1900px)'){
		return slider.style.transform = 'translateX(-950px)';
	}
	if (slider.style.transform === 'translateX(-950px)'){
		return slider.style.transform = 'translateX(0px)';
	}
}

/*------------------------------- BOTTOM BUTTONS ---------------------------------------------*/

function checkbox1 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(0px)' || 
		slider.style.transform < 'translateX(0px)'){
		return slider.style.transform = 'translateX(0px)';
	}
}
function checkbox2 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(-950px)' || 
		slider.style.transform < 'translateX(-950px)'){
		return slider.style.transform = 'translateX(-950px)';
	}
}
function checkbox3 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(-1900px)' || 
		slider.style.transform < 'translateX(-1900px)'){
		return slider.style.transform = 'translateX(-1900px)';
	}
}
function checkbox4 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(-2850px)' || 
		slider.style.transform < 'translateX(-2850px)'){
		return slider.style.transform = 'translateX(-2850px)';
	}
}

/*------------------------------- BOTTOM BUTTONS STYLE ---------------------------------------------*/

function buttonStyle (el) {
	let slider = document.querySelector('.menu-block-text');
	let check = document.querySelectorAll('.checkbox');
	let len = check.length;

	if (slider.style.transform === 'translateX(0px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('1')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('1')){
				check[i].classList.remove('active');
			}
		}
		return;
	}
	if (slider.style.transform === 'translateX(-950px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('2')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('2')){
				check[i].classList.remove('active');
			}
		}
		return;
	}
	if (slider.style.transform === 'translateX(-1900px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('3')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('3')){
				check[i].classList.remove('active');
			}
		}
		return;
	}
	if (slider.style.transform === 'translateX(-2850px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('4')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('4')){
				check[i].classList.remove('active');
			}
		}
		return;
	}
	
}