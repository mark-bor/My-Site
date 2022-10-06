var myHeaders = new Headers();
myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
};
/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};*/

function getRequest(have, want, amount, place) {
    /*(`https://api.apilayer.com/exchangerates_data/convert?to=${rates_two.value}&from=${rates_one.value}&amount=${num}`, requestOptions)*/ 
    /*(`https://currency-exchange.p.rapidapi.com/exchange?from=${rates_one.value}&to=${rates_two.value}&q=${num}`, options)*/
    return fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`, options) 
    .then(response => response.json())
    .then(result => {
        place.setAttribute("placeholder", `${result.new_amount.toFixed(2)}`); 
        /*("placeholder", `${result.result.toFixed(2)}`)*/ 
        /*("placeholder", `${result.toFixed(2)}`)*/
    })
    .catch(error => {
        console.log('error', error)
        place.setAttribute("placeholder", "&#128181;"); 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let input_first = document.querySelector(".input_first_block");
    let input_second = document.querySelector(".input_second_block");
    let rates_one = document.querySelector(".rates_one");
    let rates_two = document.querySelector(".rates_two");
    let massege = document.querySelector("#massege");

    /*input_first.oninput = function () {

        fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=UAH&q=${input_first.value}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }*/

    /*fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=UAH&amount=1', options)
        .then(response => response.json())
        .then(response => console.log(response.new_amount))
        .catch(err => console.error(err));*/


    input_first.oninput = function () {
        input_second.value = "";

        if (input_first.value == 0) {
            massege.style.display = "none";
            // massege.innerHTML = "Введіть число<br>Input numeric";

        } else if (!(input_first.value * 1)) {
            let item = input_first.value.split('');

            if (item.includes('k') == true) {
                item.pop();
                let num = `${item.join('')}000`;
                getRequest( rates_one.value, rates_two.value, num, input_second);

            } else {
                massege.style.display = "block";
                massege.innerHTML = "Введіть число<br>Input numeric";
                // massege.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
            }
        } else {
            massege.style.display = "none";
            getRequest(rates_one.value, rates_two.value, input_first.value, input_second);
        }
    }

    input_second.oninput = function () {
        input_first.value = "";

        if (input_second.value == 0) {
            massege.style.display = "none";
            // massege.innerHTML = "Введіть число<br>Input numeric";

        } else if (!(input_second.value * 1)) {            
            let item = input_second.value.split('');

            if (item.includes('k') == true) {
                item.pop();
                let num = `${item.join('')}000`;
                getRequest(rates_two.value, rates_one.value, num, input_first);

            } else {
                massege.style.display = "block";
                massege.innerHTML = "Введіть число<br>Input numeric";
                // massege.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
            }
        } else {
            massege.style.display = "none";
            getRequest(rates_two.value, rates_one.value, input_second.value, input_first);
        }
    }
});