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

function blockText4 (el){
	let menu = document.querySelector('.block-text-4');

	if (menu.className === 'block-text-4') {
		menu.className = 'block-text-4-T';
	}
}
function blockText4T (el){
	let menu = document.querySelector('.block-text-4-T');
	
	if (menu.className === 'block-text-4-T') {
		menu.className = 'block-text-4';
	}	
}

/*------------------------------- SCROLE RIGHT ---------------------------------------------*/

function right (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === 'translateX(0px)'){
		return slider.style.transform = 'translateX(-850px)';
	}
	if (slider.style.transform === 'translateX(-850px)'){
		return slider.style.transform = 'translateX(-1700px)';
	}
	if (slider.style.transform === 'translateX(-1700px)'){
		return slider.style.transform = 'translateX(-2550px)';
	}
	
}

/*------------------------------- SCROLE LEFT ---------------------------------------------*/

function left (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === 'translateX(-2550px)'){
		return slider.style.transform = 'translateX(-1700px)';
	}
	if (slider.style.transform === 'translateX(-1700px)'){
		return slider.style.transform = 'translateX(-850px)';
	}
	if (slider.style.transform === 'translateX(-850px)'){
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

	if (slider.style.transform > 'translateX(-850px)' || 
		slider.style.transform < 'translateX(-850px)'){
		return slider.style.transform = 'translateX(-850px)';
	}
}
function checkbox3 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(-1700px)' || 
		slider.style.transform < 'translateX(-1700px)'){
		return slider.style.transform = 'translateX(-1700px)';
	}
}
function checkbox4 (el) {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform > 'translateX(-2550px)' || 
		slider.style.transform < 'translateX(-2550px)'){
		return slider.style.transform = 'translateX(-2550px)';
	}
}

/*------------------------------- BOTTOM BUTTONS STYLE ---------------------------------------------*/

function buttonStyle (el) {
	let slider = document.querySelector('.menu-block-text');
	let check = document.querySelectorAll('.checkbox');
	let len = check.length;

	let left = document.querySelector('.to_L');
	let right = document.querySelector('.to_R');

	if (slider.style.transform === 'translateX(0px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('1')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('1')){
				check[i].classList.remove('active');
			}
		}
		left.style.height = '0px';
		right.style.height = '100%';
		return;
	}
	if (slider.style.transform === 'translateX(-850px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('2')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('2')){
				check[i].classList.remove('active');
			}
		}
		left.style.height = '100%';
		right.style.height = '100%';
		return;
	}
	if (slider.style.transform === 'translateX(-1700px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('3')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('3')){
				check[i].classList.remove('active');
			}
		}
		left.style.height = '100%';
		right.style.height = '100%';
		return;
	}
	if (slider.style.transform === 'translateX(-2550px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('4')){
				check[i].classList.add('active');
			}
			if (check[i] != document.getElementById('4')){
				check[i].classList.remove('active');
			}
		}
		left.style.height = '100%';
		right.style.height = '0px';
		return;
	}
	
}





/*------------------------------- CERTIFICATES LANGUAGES ---------------------------------------------*/

function blockText1_Lang (el){
	let menu = document.querySelector('.block-text-1-lang');

	if (menu.className === 'block-text-1-lang') {
		menu.className = 'block-text-1-T-lang';
	}
}
function blockText1T_Lang (el){
	let menu = document.querySelector('.block-text-1-T-lang');
	
	if (menu.className === 'block-text-1-T-lang') {
		menu.className = 'block-text-1-lang';
	}	
}

function blockText2_Lang (el){
	let menu = document.querySelector('.block-text-2-lang');

	if (menu.className === 'block-text-2-lang') {
		menu.className = 'block-text-2-T-lang';
	}
}
function blockText2T_Lang (el){
	let menu = document.querySelector('.block-text-2-T-lang');
	
	if (menu.className === 'block-text-2-T-lang') {
		menu.className = 'block-text-2-lang';
	}	
}

/*------------------------------- SCROLE RIGHT ---------------------------------------------*/

function right_Lang (el) {
	let slider = document.querySelector('.menu-block-text-lang');

	if (slider.style.transform === 'translateX(0px)'){
		return slider.style.transform = 'translateX(-850px)';
	}
}

/*------------------------------- SCROLE LEFT ---------------------------------------------*/

function left_Lang (el) {
	let slider = document.querySelector('.menu-block-text-lang');

	if (slider.style.transform === 'translateX(-850px)'){
		return slider.style.transform = 'translateX(0px)';
	}
}

/*------------------------------- BOTTOM BUTTONS ---------------------------------------------*/

function checkbox1_Lang () {
	let slider = document.querySelector('.menu-block-text-lang');

	if (slider.style.transform > 'translateX(0px)' || 
		slider.style.transform < 'translateX(0px)'){
		return slider.style.transform = 'translateX(0px)';
	}
}
function checkbox2_Lang () {
	let slider = document.querySelector('.menu-block-text-lang');

	if (slider.style.transform > 'translateX(-850px)' || 
		slider.style.transform < 'translateX(-850px)'){
		return slider.style.transform = 'translateX(-850px)';
	}
}

/*------------------------------- BOTTOM BUTTONS STYLE ---------------------------------------------*/

function buttonStyle_Lang () {
	let slider = document.querySelector('.menu-block-text-lang');
	let check = document.querySelectorAll('.checkbox-lang');
	let len = check.length;

	let left = document.querySelector('.to_L-lang');
	let right = document.querySelector('.to_R-lang');

	if (slider.style.transform === 'translateX(0px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('1-lang')){
				check[i].classList.add('active-lang');
			}
			if (check[i] != document.getElementById('1-lang')){
				check[i].classList.remove('active-lang');
			}
		}
		left.style.height = '0px';
		right.style.height = '100%';
		return;
	}
	if (slider.style.transform === 'translateX(-850px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('2-lang')){
				check[i].classList.add('active-lang');
			}
			if (check[i] != document.getElementById('2-lang')){
				check[i].classList.remove('active-lang');
			}
		}
		left.style.height = '100%';
		right.style.height = '0px';
		return;
	}
	
}