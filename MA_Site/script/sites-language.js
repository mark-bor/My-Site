const GEO_CODES = {
	"UA":{code:"UKR", ln:"uk|uk-ua", name:"Україна"},
	"PL":{code:"POL",ln:"pl|pl-pl",name:"Польща"}
};

function getGeolocationDateTimeLocale(){
	try {
		var nf = Intl.DateTimeFormat();
		var local = nf.resolvedOptions().locale.toLowerCase();

		for(var i in GEO_CODES){
			if(GEO_CODES[i].ln.split('|').indexOf(local)>-1) {
				console.log(GEO_CODES[i]);
				return GEO_CODES[i];
			}
		}
		return locale;	
	} catch {
		return 'null';
	}	
}

document.addEventListener('DOMContentLoaded', function() {

	let language = document.querySelector(".form_in_head");
	let ukraine = document.querySelectorAll(".ukraine");
	let english = document.querySelectorAll(".english");
	let polish = document.querySelectorAll(".polish");
	let ua = document.querySelector("#ua");
	let en = document.querySelector("#en");
	let pl = document.querySelector("#pl");
	let input_first = document.querySelector(".input_first_block");
    let input_second = document.querySelector(".input_second_block");

    function Ukraine () {
    	english.forEach((en) => { en.style.display = 'none'; });
		polish.forEach((pl) => { pl.style.display = 'none'; });
		ukraine.forEach((ua) => { ua.style.display = 'block'; });

		pl.removeAttribute("selected");
		en.removeAttribute("selected");
		ua.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, #FFF85C, #457FD6)';
		input_first.setAttribute("placeholder", `сума`);
		input_second.setAttribute("placeholder", `сума`);
    }

    function Poland () {
    	ukraine.forEach((ua) => { ua.style.display = 'none'; });
		english.forEach((en) => { en.style.display = 'none'; });
		polish.forEach((pl) => { pl.style.display = 'block'; });

		ua.removeAttribute("selected");
		en.removeAttribute("selected");
		pl.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, #FF5555, #FFF)';
		input_first.setAttribute("placeholder", `suma`);
		input_second.setAttribute("placeholder", `suma`);
    }

    function English () {
    	ukraine.forEach((ua) => { ua.style.display = 'none'; });
		polish.forEach((pl) => { pl.style.display = 'none'; });
		english.forEach((en) => { en.style.display = 'block'; });

		ua.removeAttribute("selected");
		pl.removeAttribute("selected");
		en.setAttribute("selected", " ");
		language.style.background = 'linear-gradient(45deg, rgba(80, 44, 132, 1), rgba(69, 127, 214, 1))';
		input_first.setAttribute("placeholder", `amount`);
		input_second.setAttribute("placeholder", `amount`);
    }

	

	// Перевірити, чи вже є значення у локальному сховищі
	if (!localStorage.getItem('language')) {

		if (getGeolocationDateTimeLocale()){
			// Якщо ні, встановити у локальному сховищі
			if (getGeolocationDateTimeLocale().name == 'Україна') {
		    	localStorage.setItem('language', 'UA');
				Ukraine();// Встановити мову сайту
				
			} else if (getGeolocationDateTimeLocale().name == 'Польща') {
		    	localStorage.setItem('language', 'PL');
				Poland();// Встановити мову сайту
				
			} else {
		    	localStorage.setItem('language', 'EN');
				English();// Встановити мову сайту
				
			}			
		} else {
			localStorage.setItem('language', 'EN');
		}
	    
	} else {
		// Якщо так, встановити мову сайту
	    let loc_stor = localStorage.getItem('language');

	    if (loc_stor === 'UA') {
			Ukraine();

		} else if (loc_stor === 'PL') {
			Poland();

		} else if (loc_stor === 'EN') {
			English();
		}
	}

	function Language (){

		if (language.value === 'UA') {
			Ukraine();
			localStorage.setItem('language', language.value);
			
		} else if (language.value === 'PL') {
			Poland();
			localStorage.setItem('language', language.value);

		} else if (language.value === 'EN') {
			English();
			localStorage.setItem('language', language.value);
		}
	}

	language.onchange = Language;
});