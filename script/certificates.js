// THIS FILE IS CONECTED IN pages.js
// THIS FILE IS CONECTED IN pages.js
// THIS FILE IS CONECTED IN pages.js

let widthCert;
window.innerWidth <= 481 ? widthCert = 370 : widthCert = 850;
const it = { 
	index: 0,
	type: "it",
	url: `${window.location.protocol}//${window.location.host}/script/JSON/cert-IT.json`
};
const lang = { 
	index: 0,
	type: "lang",
	url: `${window.location.protocol}//${window.location.host}/script/JSON/cert-Lang.json`
};

/*------------ CERTIFICATES ----------------------------*/
class Certificate {
	constructor(certificate){
		this.style = certificate.styles;
		this.courseUA = certificate.courseUA;
		this.courseEN = certificate.courseEN;
		this.coursePL = certificate.coursePL;
		this.company = certificate.company;
		this.file = certificate.file;
	}
	createCetificate() {
		const article = `
		<li>
			<button class="block_text_0" name="${this.courseEN}">
				<span class="block0" style="${this.style}">
					<h3 class="data_from_certificate course">
						<span class="ukraine">${this.courseUA}</span>
						<span class="english">${this.courseEN}</span>
						<span class="polish">${this.coursePL}</span>
					</h3>
					<hr class="data_from_certificate line">
					<h4 class="data_from_certificate company">${this.company}</h4>
				</span>
				<object class="text0" type="application/pdf" data="${this.file}"></object>
			</button>
		</li>
		`;
		const crtfc = document.createElement('template');
		crtfc.innerHTML = article;
		return crtfc.content;
	}
}

function getAndCreateCertific(object) {
	fetch(object.url)
	.then((res) => res.json())
	.then((res) => {
		object.len = res.length;
		const fragment = document.createDocumentFragment();
		res.forEach((cert) => {
			fragment.appendChild(new Certificate(cert).createCetificate());
		});
		object.slider.appendChild(fragment);
		return res;
	})
	.then((res) => {
		const place = document.querySelector(`.checkbox_block_${object.type}`);
		for (let i=1; i<=res.length; i++) {
			const checkbox =  `<li><button class="checkbox_${object.type} ${i===1 ? `active` : ``}" id="${i}_${object.type}" name="${res[i-1].courseEN}"></button></li>`;
			place.insertAdjacentHTML('beforeend', checkbox);
		}
	})
	.then(() => {
		document.querySelectorAll('.block_text_0').forEach((certific) => {
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

		for (let i=0; i<object.len; i++) {
			document.getElementById(`${1+i}_${object.type}`).onclick = () => {
				if (object.slider.style.transform !== `translateX(${(-1)*widthCert * i}px)`){
					object.index = i;
					object.slider.style.transform = `translateX(${(-1)*widthCert * object.index}px)`;
					buttonStyle(object, object.type);
				}
			};
		}
	})
	.catch((error) => {		
		document.getElementById(`buttonCert_${object.type}`).insertAdjacentHTML('beforebegin', `
			<article id="error_background" class="window_error">				
				<h2 id="message_error" class="message_error">Failed to load certificates</h2>
				<p class="error_status">
					Error status: 
					<span id="error_code" class="error_code"></span>
				</p>
			</article>
		`);

		console.log(error);

		document.getElementById(`buttonCert_${object.type}`).style.display = 'none';
		document.querySelector(`.checkbox_block_${object.type}`).style.display = 'none';
	});
}

/*------------ BOTTOM BUTTONS STYLE -------------*/
function buttonStyle(object) {
	object.left = document.querySelector(`#to_L_${object.type}`);
	object.right = document.querySelector(`#to_R_${object.type}`);

	document.querySelectorAll(`.checkbox_${object.type}`).forEach((checkbox) => {
		if (checkbox === document.getElementById(`${1+object.index}_${object.type}`)){
			checkbox.classList.add(`active`);
		} else {
			checkbox.classList.remove(`active`);
		}
		object.left.style.width = '100%';
		object.right.style.width = '100%';
	});
	if (object.slider.style.transform === `translateX(${(-1)*widthCert*(object.len - object.len)}px)`) {
		object.left.style.width = '0';
		object.right.style.width = '100%';
	}
	if (object.slider.style.transform === `translateX(${(-1)*widthCert*(object.len-1)}px)`) {
		object.left.style.width = '100%';
		object.right.style.width = '0';
	}
}

/*------------ SKROLL -------------*/
function right(object) {
	if (object.slider.style.transform === `translateX(${(-widthCert*(object.len-1))}px)`){
		buttonStyle(object, object.type);
		return
	} else if (object.slider.style.transform === `translateX(${(-widthCert * object.index)}px)`){
		object.index++;
		object.slider.style.transform = `translateX(${(-widthCert * object.index)}px)`;
		buttonStyle(object, object.type);
	}
}
function left(object) {
	if (object.slider.style.transform === `translateX(${(-1)*widthCert*(object.len - object.len)}px)`) {
		buttonStyle(object, object.type);
		return
	} else if (object.slider.style.transform === `translateX(${(-1)*widthCert * object.index}px)`){
		object.index--;
		object.slider.style.transform = `translateX(${(-1)*widthCert * object.index}px)`;
		buttonStyle(object, object.type);
	}
}

/*------------ CREATE CERTIFICATES AND CHECKBOXES -------------*/
export function certificatesLoaded() {
	it.slider = document.querySelector('#menu_block_text');
	lang.slider = document.querySelector('#menu_block_text_lang');
	
	getAndCreateCertific(it)
	getAndCreateCertific(lang)
	
	/*------------------------------- SCROLL RIGHT ---------------------------------*/
	document.getElementById('right').addEventListener('click', () => right(it));
	document.getElementById('right_lang').addEventListener('click', () => right(lang));
	/*------------------------------- SCROLL LEFT ----------------------------------*/
	document.getElementById('left').addEventListener('click', () => left(it));
	document.getElementById('left_lang').addEventListener('click', () => left(lang));
}