import { language } from "./sites-language.js";

var myHeaders = new Headers();
myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

let url;
let head;
let exchRate = {};

document.addEventListener('DOMContentLoaded', function() {
    exchRate = {
        radio1: document.getElementById('radio1'),
        radio2: document.getElementById('radio2'),
        radio3: document.getElementById('radio3'),
        input_first: document.querySelector(".input_first_block"),
        input_second: document.querySelector(".input_second_block"),
        rate_one: document.querySelector(".rates_one"),
        rate_two: document.querySelector(".rates_two"),
        massege: document.querySelector("#massege")
    }

    exchRate.rate_one.onchange = () => {
        getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    }
    exchRate.rate_two.onchange = () => {
        getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    }
    
    exchRate.input_first.oninput = () => getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    exchRate.input_second.oninput = () => getValues(exchRate.input_second, exchRate.input_first, exchRate.massege, exchRate.rate_two.value,exchRate.rate_one.value);

    radioButtons();
});

function getValues(inp1, inp2, mass, rate1, rate2) {
    inp2.value = "";
    let val = inp1.value;
    
    if (!val) {
        inp2.setAttribute("placeholder", '💸'); 
        inp2.value = '';
        // exchRate.input_second.value = '';

    } else if (val == 0) {
        mass.style.display = "none";
        inp2.setAttribute("placeholder", '💸');
        inp2.value = '';
        // mass.innerHTML = "Введіть число<br>Input numeric";
        
    } else if (!(val * 1)) {            
        let item = val.split('');
        
        if (item.includes('k') == true) {
            item.pop();
            let num = `${item.join('')}000`;
            checkRadioButtons(rate1, rate2, num, inp2);
            
        } else {
            mass.style.display = "block";
            mass.innerHTML = "Введіть число<br>Input numeric";
            inp2.setAttribute("placeholder", '💸'); 
            // mass.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
        }
    } else {
        mass.style.display = "none";
        checkRadioButtons(rate1, rate2, val, inp2);
    }
}

function radioButtons() {
    exchRate.radio1.onclick = (el) => {
        [exchRate.radio2, exchRate.radio3].forEach((elem) => elem.checked = false);
        getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    };
    exchRate.radio2.onclick = (el) => {
        [exchRate.radio1, exchRate.radio3].forEach((elem) => elem.checked = false);
        getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    };
    exchRate.radio3.onclick = (el) => {
        [exchRate.radio1, exchRate.radio2].forEach((elem) => elem.checked = false);
        getValues(exchRate.input_first, exchRate.input_second, exchRate.massege, exchRate.rate_one.value, exchRate.rate_two.value);
    };
}

function checkRadioButtons(have, want, amount, place) {
    if (exchRate.radio1.checked===true) {
        url = `https://api.apilayer.com/exchangerates_data/convert?to=${want}&from=${have}&amount=${amount}`;
        head = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        
        doRequest(place);
        
    } else if (exchRate.radio2.checked===true) {
        url = `https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}&q=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        
        doRequest(place);
        
    } else if (exchRate.radio3.checked===true) {
        url = `https://urrency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        doRequest(place);
    }
}

function doRequest(place) {
    fetch(url, head) 
    .then(response => response.json())
    .then(result => {
        if (exchRate.radio1.checked===true) {
            place.value = result.result.toFixed(2);
        } else if (exchRate.radio2.checked===true) {
            place.value = result.toFixed(2);
        } else if (exchRate.radio3.checked===true) {
            place.value = result.new_amount.toFixed(2);
        }
    })
    .catch(error => {
        console.log('ERROR ==>', error);

        // const language = document.querySelector(".form_in_head");
        const windowError = document.getElementById('error_background');
        const messageError = document.getElementById('message_error');
        // const errorCode = document.getElementById('error_code');

        exchRate.input_first.value = '';
        exchRate.input_second.value = '';
        windowError.style.display = 'flex';
        if (language.value==="UA") {
            messageError.innerHTML = 'Щось трапилось, <br>спробуйте інший сервіс із 3 запропонованих';
        } else if (language.value==="EN") {
            messageError.innerHTML = 'Something happened, <br>try another service among the 3 offered';
        } else if (language.value==="PL") {
            messageError.innerHTML = 'Coś się stało, <br>wypróbuj inną usługę z 3 oferowanych';
        }
        // errorCode.innerText = error;
        
        document.getElementById('close_error').addEventListener('click', () => {
            // errorCode.innerText = '';
            messageError.innerText = '';
            windowError.style.display = 'none';
        });
    });
}
