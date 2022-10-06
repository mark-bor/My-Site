const GEO_CODES = {
	"UA":{code:"UA", ln:"uk|uk-ua", name:"Україна"},
	"PL":{code:"PL", ln:"pl|pl-pl", name:"Польща"}
};

function getGeolocationDateTimeLocale(){
	try {
		// var nf = Intl.DateTimeFormat();
		// var local = nf.resolvedOptions().locale.toLowerCase();
		let local = navigator.language;
		// console.log(local);

		for(var i in GEO_CODES){
			if(GEO_CODES[i].ln.split('|').indexOf(local)>-1) {
				// console.log(GEO_CODES[i].code);
				return GEO_CODES[i];
			}
		}
		return local;	
	} catch {
		return 'null';
	}	
}
// getGeolocationDateTimeLocale();

let language;
let ukraine, english, polish;
let ua, en, pl;
let input_first, input_second;
// let html;

document.addEventListener('DOMContentLoaded', function() {

	language = document.querySelector(".form_in_head");
	ukraine = document.querySelectorAll(".ukraine");
	english = document.querySelectorAll(".english");
	polish = document.querySelectorAll(".polish");
	ua = document.querySelector("#ua");
	en = document.querySelector("#en");
	pl = document.querySelector("#pl");
	input_first = document.querySelector(".input_first_block");
	input_second = document.querySelector(".input_second_block");
	// html = document.getElementsByTagName('html');

	// Перевірити, чи вже є значення у локальному сховищі
	if (!localStorage.getItem('language')) {
		if (getGeolocationDateTimeLocale()){
			// Встановити мову на сайті та у локальному сховищі
			Lang(getGeolocationDateTimeLocale().code);

		} else {
			Lang('EN');
		}
	} else {
		// Якщо так, встановити мову сайту
		Lang(localStorage.getItem('language'))
	}

	language.addEventListener('change', function Language(){
		Lang(language.value);
	});
});

function Lang(lang) {
	if (lang === 'UA') {
		english.forEach((en) => { en.style.display = 'none'; });
		polish.forEach((pl) => { pl.style.display = 'none'; });
		ukraine.forEach((ua) => { 
			ua.style.display = 'inline-block'; 
			ua.setAttribute("lang", "uk");
		});
	
		pl.removeAttribute("selected");
		en.removeAttribute("selected");
		ua.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, #FFF85C, #457FD6)';
		// input_first.setAttribute("placeholder", `сума`);
		// input_second.setAttribute("placeholder", `сума`);

	} else if (lang === 'PL') {

		ukraine.forEach((ua) => { ua.style.display = 'none'; });
		english.forEach((en) => { en.style.display = 'none'; });
		polish.forEach((pl) => { 
			pl.style.display = 'inline-block'; 
			pl.setAttribute("lang", "pl");
		});

		ua.removeAttribute("selected");
		en.removeAttribute("selected");
		pl.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, #FF5555, #FFF)';
		// input_first.setAttribute("placeholder", `suma`);
		// input_second.setAttribute("placeholder", `suma`);

	} else if (lang === 'EN') {
		
		ukraine.forEach((ua) => { ua.style.display = 'none'; });
		polish.forEach((pl) => { pl.style.display = 'none'; });
		english.forEach((en) => { 
			en.style.display = 'inline-block'; 
			en.setAttribute("lang", "en");
		});

		ua.removeAttribute("selected");
		pl.removeAttribute("selected");
		en.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, rgba(80, 44, 132, 1), rgba(69, 127, 214, 1))';
		// input_first.setAttribute("placeholder", `amount`);
		// input_second.setAttribute("placeholder", `amount`);
	}

	localStorage.setItem('language', lang);
}
