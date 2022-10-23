// THIS FILE IS CONECTED IN exchange-rate.js
// THIS FILE IS CONECTED IN exchange-rate.js
// THIS FILE IS CONECTED IN exchange-rate.js

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

export const language = document.querySelector(".language");
let ukraine, english, polish;
let ua, en, pl;
// let input_first, input_second;

document.addEventListener('DOMContentLoaded', function() {
	ukraine = document.querySelectorAll(".ukraine");
	english = document.querySelectorAll(".english");
	polish = document.querySelectorAll(".polish");
	ua = document.querySelector("#ua");
	en = document.querySelector("#en");
	pl = document.querySelector("#pl");

	ukraine.forEach((ua) => ua.setAttribute("lang", "uk"));
	english.forEach((en) => en.setAttribute("lang", "en"));
	polish.forEach((pl) => pl.setAttribute("lang", "pl"));

	// Перевірити, чи вже є значення у локальному сховищі
	if (!localStorage.getItem('language')) {
		if (getGeolocationDateTimeLocale()){
			Lang(getGeolocationDateTimeLocale().code);// Встановити мову на сайті та у локальному сховищі
		} else {
			Lang('EN');
		}
	} else {
		Lang(localStorage.getItem('language'));// Якщо є, встановити мову сайту
	}
});

//встановити слухач події для перемикача мови
language.addEventListener('change', function Language(){
	Lang(language.value);
});

function Lang(lang) {
	if (lang === 'UA') {
		setLanguage(english, polish, ukraine);
		setAttributesSelected(en, pl, ua);
		language.style.background = 'linear-gradient(45deg, #FFF85C, #457FD6)';
	} else if (lang === 'PL') {
		setLanguage(ukraine, english, polish);
		setAttributesSelected(ua, en, pl);
		language.style.background = 'linear-gradient(45deg, #FF5555, #FFF)';
	} else if (lang === 'EN') {
		setLanguage(ukraine, polish, english);
		setAttributesSelected(ua, pl, en);
		language.style.background = 'linear-gradient(45deg, #502C84, #457FD6)';
	}
	localStorage.setItem('language', lang);
}

function setLanguage(lang1, lang2, lang3) {
	[...lang1, ...lang2].forEach((lng) => lng.style.display = 'none');
	lang3.forEach((lng) => lng.style.display = 'inline-block');
}
function setAttributesSelected(lang1, lang2, lang3) {
	[lang1, lang2].forEach((lng) => lng.removeAttribute("selected"));
	lang3.setAttribute("selected", " ");
}