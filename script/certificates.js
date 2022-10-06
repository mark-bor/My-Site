let widthCert;
window.innerWidth <= 481 ? widthCert = 370 : widthCert = 850;
const it = { index: 0, };
const lang = { index: 0, };

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

async function getAndCreateCertific(object, url) {
	fetch(url)
	.then((res) => res.json())
	.then((res) => {
		object.srtfcs = res.length;
		const fragment = document.createDocumentFragment();
		res.forEach((cert) => {
			fragment.appendChild(new Certificate(cert).createCetificate());
		});
		object.slider.appendChild(fragment);
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
	});
}

function createChackboxes(place, objectType, type, url) {
	fetch(url)
	.then((res) => res.json())
	.then((res) => {
		objectType.len = res.length;
		for (let i=1; i<=res.length; i++) {
			const checkbox =  `<li><button class="checkbox${type} ${i===1 ? `active` : ``}" id="${i}${type}" name="${res[i-1].courseEN}"></button></li>`;
			place.insertAdjacentHTML('beforeend', checkbox);
		}
	})
	.then(() => {
		for (let i=0; i<objectType.len; i++) {
			document.getElementById(`${1+i}` + `${type}`).onclick = () => {
				if (objectType.slider.style.transform !== `translateX(${(-1)*widthCert * i}px)`){
					objectType.index = i;
					objectType.slider.style.transform = `translateX(${(-1)*widthCert * objectType.index}px)`;
					buttonStyle(objectType, type);
				}
			};
		}
	});
}



/*------------------------------- CERTIFICATES ------------------------------------------*/
document.addEventListener('DOMContentLoaded', async () => {
	it.slider = document.querySelector('#menu_block_text');
	lang.slider = document.querySelector('#menu_block_text_lang');

	await getAndCreateCertific(it, 'script/JSON/cert-IT.json');
	await getAndCreateCertific(lang, 'script/JSON/cert-Lang.json');

	it.left = document.querySelector('#to_L');
	it.right = document.querySelector('#to_R');
	
	lang.left = document.querySelector('#to_L-lang');
	lang.right = document.querySelector('#to_R-lang');
	
	/*------------------------------- BOTTOM BUTTONS -----------------------------------*/
	createChackboxes(document.querySelector('.checkbox_block'), it, '', 'script/JSON/cert-IT.json');
	createChackboxes(document.querySelector('.checkbox_block_lang'), lang, '_lang', 'script/JSON/cert-Lang.json');
});



/*------------------------------- BOTTOM BUTTONS STYLE -----------------------------------*/
function buttonStyle(object, type) {
	document.querySelectorAll(`.checkbox${type}`).forEach((checkbox) => {
		if (checkbox === document.getElementById(`${1+object.index}` + `${type}`)){
			checkbox.classList.add(`active`);
		} else {
			checkbox.classList.remove(`active`);
		}
		object.left.style.width = '100%';
		object.right.style.width = '100%';
	});
	if (object.slider.style.transform === `translateX(${(-1)*widthCert*(object.srtfcs - object.srtfcs)}px)`) {
		object.left.style.width = '0';
		object.right.style.width = '100%';
	}
	if (object.slider.style.transform === `translateX(${(-1)*widthCert*(object.srtfcs-1)}px)`) {
		object.left.style.width = '100%';
		object.right.style.width = '0';
	}
}

/*------------------------------- SCROLL RIGHT ---------------------------------------------*/
document.getElementById('right').addEventListener('click', () => {
	if (it.slider.style.transform === `translateX(${(-widthCert*(it.srtfcs-1))}px)`){
		buttonStyle(it, '');
		return
	} else if (it.slider.style.transform === `translateX(${(-widthCert * it.index)}px)`){
		it.index++;
		it.slider.style.transform = `translateX(${(-widthCert * it.index)}px)`;
	}
	buttonStyle(it, '');
});
/*------------------------------- SCROLL LEFT ---------------------------------------------*/
document.getElementById('left').addEventListener('click', () => {
	if (it.slider.style.transform === `translateX(${(-1)*widthCert*(it.srtfcs - it.srtfcs)}px)`) {
		buttonStyle(it, '');
		return
	} else if (it.slider.style.transform === `translateX(${(-1)*widthCert * it.index}px)`){
		it.index--;
		it.slider.style.transform = `translateX(${(-1)*widthCert * it.index}px)`;
	}
	buttonStyle(it, '');
});

/*------------------------------- SCROLE RIGHT ---------------------------------------------*/
document.getElementById('right_lang').addEventListener('click', function () {
	if (lang.slider.style.transform === `translateX(${(-1)*widthCert*(lang.srtfcs-1)}px)`){
		buttonStyle(lang, '_lang');
		return
	} else if (lang.slider.style.transform === `translateX(${(-1)*widthCert * lang.index}px)`){
		lang.index++;
		lang.slider.style.transform = `translateX(${(-1)*widthCert * lang.index}px)`;
	}
	buttonStyle(lang, '_lang');
});
/*------------------------------- SCROLE LEFT ---------------------------------------------*/
document.getElementById('left_lang').addEventListener('click', function () {
	if (lang.slider.style.transform === `translateX(${(-1)*widthCert*(lang.srtfcs - lang.srtfcs)}px)`){
		buttonStyle(lang, '_lang');
		return
	} else if (lang.slider.style.transform === `translateX(${(-1)*widthCert * lang.index}px)`){
		lang.index--;
		lang.slider.style.transform = `translateX(${(-1)*widthCert * lang.index}px)`;
	}
	buttonStyle(lang, '_lang');
});
