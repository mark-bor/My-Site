
/*------------------------------- CERTIFICATES ------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
	const certificate = document.querySelectorAll('#block_text_0');

	certificate.forEach((certific) => {
		certific.onfocus = () => {
			if (certific.className === 'block_text_0') {
				certific.className = 'block_text_0_T';
			}
		};
		certific.onblur = () => {
			if (certific.className === 'block_text_0_T') {
				certific.className = 'block_text_0';
			}
		};
	});
});





/*------------------------------- BOTTOM BUTTONS STYLE -----------------------------------*/
function buttonStyle (el) {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');
	let check = document.querySelectorAll('.checkbox');
	let len = check.length;
	let left = document.querySelector('.to_L');
	let right = document.querySelector('.to_R');

	if (slider.style.transform === 'translateX(0px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('1')){
				check[i].classList.add('active');
			} else {
				check[i].classList.remove('active');
			}
		}
		left.style.width = '0';
		right.style.width = '100%';
		return;
	} else if (slider.style.transform === `translateX(-${widthCert}px)`){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('2')){
				check[i].classList.add('active');
			} else {
				check[i].classList.remove('active');
			}
		}
		left.style.width = '100%';
		right.style.width = '100%';
		return;
	} else if (slider.style.transform === `translateX(-${widthCert*2}px)`){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('3')){
				check[i].classList.add('active');
			} else {
				check[i].classList.remove('active');
			}
		}
		left.style.width = '100%';
		right.style.width = '100%';
		return;
	} else if (slider.style.transform === `translateX(-${widthCert*3}px)`){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('4')){
				check[i].classList.add('active');
			} else {
				check[i].classList.remove('active');
			}
		}
		left.style.width = '100%';
		right.style.width = '0px';
		return;
	}
}
/*------------------------------- SCROLE RIGHT ---------------------------------------------*/
document.querySelector('#right').addEventListener('click', () => {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === 'translateX(0px)'){
		slider.style.transform = `translateX(-${widthCert}px)`;
	} else if (slider.style.transform === `translateX(-${widthCert}px)`){
		slider.style.transform = `translateX(-${widthCert*2}px)`;
	} else if (slider.style.transform === `translateX(-${widthCert*2}px)`){
		slider.style.transform = `translateX(-${widthCert*3}px)`;
	}
	buttonStyle();
});
/*------------------------------- SCROLE LEFT ---------------------------------------------*/
document.querySelector('#left').addEventListener('click', () => {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform === `translateX(-${widthCert*3}px)`){
		slider.style.transform = `translateX(-${widthCert*2}px)`;
	} else if (slider.style.transform === `translateX(-${widthCert*2}px)`){
		slider.style.transform = `translateX(-${widthCert}px)`;
	} else if (slider.style.transform === `translateX(-${widthCert}px)`){
		slider.style.transform = 'translateX(0px)';
	}
	buttonStyle();
});

/*------------------------------- BOTTOM BUTTONS ---------------------------------------------*/
document.getElementById('1').addEventListener('click', function () {
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform !== 'translateX(0px)'){
		slider.style.transform = 'translateX(0px)';
	}
	buttonStyle();
});
document.getElementById('2').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform !== `translateX(-${widthCert}px)`){
		slider.style.transform = `translateX(-${widthCert}px)`;
	}
	buttonStyle();
});
document.getElementById('3').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform !== `translateX(-${widthCert*2}px)`){
		slider.style.transform = `translateX(-${widthCert*2}px)`;
	}
	buttonStyle();
});
document.getElementById('4').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu-block-text');

	if (slider.style.transform !== `translateX(-${widthCert*3}px)`){
		slider.style.transform = `translateX(-${widthCert*3}px)`;
	}
	buttonStyle();
});





/*------------------------------- BOTTOM BUTTONS STYLE -----------------------------------*/
function buttonStyle_Lang() {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu_block_text_lang');
	let check = document.querySelectorAll('.checkbox-lang');
	let len = check.length;
	let left = document.querySelector('#to_L-lang');
	let right = document.querySelector('#to_R-lang');

	if (slider.style.transform === 'translateX(0px)'){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('1_lang')){
				check[i].classList.add('active-lang');
			} else {
				check[i].classList.remove('active-lang');
			}
		}
		left.style.width = '0';
		right.style.width = '100%';
		return;
	} else if (slider.style.transform === `translateX(-${widthCert}px)`){
		for (let i=0; i<len; i++){
			if (check[i] === document.getElementById('2_lang')){
				check[i].classList.add('active-lang');
			} else {
				check[i].classList.remove('active-lang');
			}
		}
		left.style.width = '100%';
		right.style.width = '0';
		return;
	}
}
/*------------------------------- SCROLE RIGHT ---------------------------------------------*/
document.getElementById('right_lang').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu_block_text_lang');

	if (slider.style.transform === 'translateX(0px)'){
		slider.style.transform = `translateX(-${widthCert}px)`;
	}
	buttonStyle_Lang();
});
/*------------------------------- SCROLE LEFT ---------------------------------------------*/
document.getElementById('left_lang').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu_block_text_lang');

	if (slider.style.transform === `translateX(-${widthCert}px)`){
		slider.style.transform = `translateX(0px)`;
	}
	buttonStyle_Lang();
});
/*------------------------------- BOTTOM BUTTONS -----------------------------------*/
document.getElementById('1_lang').addEventListener('click', function () {
	let slider = document.querySelector('.menu_block_text_lang');

	if (slider.style.transform > 'translateX(0px)' || 
		slider.style.transform < 'translateX(0px)'){
		slider.style.transform = 'translateX(0px)';
	}
	buttonStyle_Lang();
});
document.getElementById('2_lang').addEventListener('click', function () {
	let widthCert = document.querySelector('.block_menu').clientWidth;
	let slider = document.querySelector('.menu_block_text_lang');

	if (slider.style.transform > `translateX(-${widthCert}px)` || 
		slider.style.transform < `translateX(-${widthCert}px)`){
		slider.style.transform = `translateX(-${widthCert}px)`;
	}
	buttonStyle_Lang();
});
