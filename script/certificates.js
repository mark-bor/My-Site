let widthCert;
window.innerWidth <= 481 ? widthCert = 370 : widthCert = 850;
const it = { 
	index: 0,
	type: "it"
};
const lang = { 
	index: 0,
	type: "lang"
};

/*----------------------- CERTIFICATES ----------------------------*/
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
				<div class="block0" style="${this.style}">
					<h3 class="data_from_certificate course">
						<span class="ukraine">${this.courseUA}</span>
						<span class="english">${this.courseEN}</span>
						<span class="polish">${this.coursePL}</span>
					</h3>
					<hr class="data_from_certificate line">
					<h4 class="data_from_certificate company">${this.company}</h4>
				</div>
				<object class="text0" type="application/pdf" data="${this.file}"></object>
			</button>
		</li>
		`;
		const crtfc = document.createElement('template');
		crtfc.innerHTML = article;
		return crtfc.content;
	}
}

function getAndCreateCertific(object, url) {
	fetch(url)
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
	});
}



document.addEventListener('DOMContentLoaded', async () => {
	it.slider = document.querySelector('#menu_block_text');
	lang.slider = document.querySelector('#menu_block_text_lang');

	getAndCreateCertific(it, 'script/JSON/cert-IT.json');
	getAndCreateCertific(lang, 'script/JSON/cert-Lang.json');

	/*------------------------------- SCROLL RIGHT ---------------------------------*/
	document.getElementById('right').addEventListener('click', () => right(it));
	document.getElementById('right_lang').addEventListener('click', () => right(lang));
	/*------------------------------- SCROLL LEFT ----------------------------------*/
	document.getElementById('left').addEventListener('click', () => left(it));
	document.getElementById('left_lang').addEventListener('click', () => left(lang));
});



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