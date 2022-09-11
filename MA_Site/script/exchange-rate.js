// import language from "sites-language.js";

document.addEventListener('DOMContentLoaded', function() {

    let input_first = document.querySelector(".input_first_block");
    let input_second = document.querySelector(".input_second_block");
    let rates_one = document.querySelector(".rates_one");
    let rates_two = document.querySelector(".rates_two");
    let massege = document.querySelector(".massege");
    let language = document.querySelector(".form_in_head");

    var myHeaders = new Headers();
    myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    /*const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };*/

    /*input_first.oninput = function () {

        fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=UAH&q=${input_first.value}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }*/

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };

    /*fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=UAH&amount=1', options)
        .then(response => response.json())
        .then(response => console.log(response.new_amount))
        .catch(err => console.error(err));*/

    input_first.oninput = function () {
        input_second.value = "";

        if (input_first.value == 0) {
            if (language.value === 'UA') {
                input_first.setAttribute("placeholder", `сума`);
                input_second.setAttribute("placeholder", `сума`);
            } else if (language.value === 'PL') {
                input_first.setAttribute("placeholder", `suma`);
                input_second.setAttribute("placeholder", `suma`);
            } else if (language.value === 'EN') {
                input_first.setAttribute("placeholder", `amount`);
                input_second.setAttribute("placeholder", `amount`);
            }
            massege.style.display = "none";
            // massege.innerHTML = "Введіть число<br>Input numeric";

        } else if (!(input_first.value * 1)) {

            let item = input_first.value.split('');

            if (item.includes('k') == true) {
                item.pop();
                let num = `${item.join('')}000`;
                
                /*(`https://api.apilayer.com/exchangerates_data/convert?to=${rates_two.value}&from=${rates_one.value}&amount=${num}`, requestOptions)*/ 
                /*(`https://currency-exchange.p.rapidapi.com/exchange?from=${rates_one.value}&to=${rates_two.value}&q=${num}`, options)*/
                fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${rates_one.value}&want=${rates_two.value}&amount=${num}`, options) 
                .then(response => response.json())
                .then(result => {
                    input_second.setAttribute("placeholder", `${result.new_amount.toFixed(2)}`); 
                    /*("placeholder", `${result.result.toFixed(2)}`)*/ 
                    /*("placeholder", `${result.toFixed(2)}`)*/
                })
                .catch(error => console.log('error', error));

            } else {
                massege.style.display = "block";
                massege.innerHTML = "Введіть число<br>Input numeric";
                // massege.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";

            }

        } else {
            massege.style.display = "none";
            /*(`https://api.apilayer.com/exchangerates_data/convert?to=${rates_two.value}&from=${rates_one.value}&amount=${input_first.value}`, requestOptions)*/
            /*(`https://currency-exchange.p.rapidapi.com/exchange?from=${rates_one.value}&to=${rates_two.value}&q=${input_first.value}`, options)*/
            fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${rates_one.value}&want=${rates_two.value}&amount=${input_first.value}`, options) 
            .then(response => response.json())
            .then(result => {
                // console.log(result.query.from)
                // console.log(result.result)
                input_second.setAttribute("placeholder", `${result.new_amount.toFixed(2)}`); 
                /*("placeholder", `${result.result.toFixed(2)}`)*/
                /*("placeholder", `${result.toFixed(2)}`)*/
            })
            .catch(error => console.log('error', error));
        }
    }

    input_second.oninput = function () {
        input_first.value = "";

        if (input_second.value == 0) {
            if (language.value === 'UA') {
                input_first.setAttribute("placeholder", `сума`);
                input_second.setAttribute("placeholder", `сума`);
            } else if (language.value === 'PL') {
                input_first.setAttribute("placeholder", `suma`);
                input_second.setAttribute("placeholder", `suma`);
            } else if (language.value === 'EN') {
                input_first.setAttribute("placeholder", `amount`);
                input_second.setAttribute("placeholder", `amount`);
            }
            massege.style.display = "none";
            // massege.innerHTML = "Введіть число<br>Input numeric";

        } else if (!(input_second.value * 1)) {
            
            let item = input_second.value.split('');

            if (item.includes('k') == true) {
                item.pop();
                let num = `${item.join('')}000`;
                
                /*(`https://api.apilayer.com/exchangerates_data/convert?to=${rates_two.value}&from=${rates_one.value}&amount=${num}`, requestOptions)*/ 
                /*(`https://currency-exchange.p.rapidapi.com/exchange?from=${rates_one.value}&to=${rates_two.value}&q=${num}`, options)*/
                fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${rates_two.value}&want=${rates_one.value}&amount=${num}`, options) 
                .then(response => response.json())
                .then(result => {
                    input_first.setAttribute("placeholder", `${result.new_amount.toFixed(2)}`); 
                    /*("placeholder", `${result.result.toFixed(2)}`)*/ 
                    /*("placeholder", `${result.toFixed(2)}`)*/
                })
                .catch(error => console.log('error', error));

            } else {
                massege.style.display = "block";
                massege.innerHTML = "Введіть число<br>Input numeric";
                // massege.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";

            }

        } else {
            massege.style.display = "none";
            /*(`https://api.apilayer.com/exchangerates_data/convert?to=${rates_one.value}&from=${rates_two.value}&amount=${input_second.value}`, requestOptions)*/
            fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${rates_two.value}&want=${rates_one.value}&amount=${input_second.value}`, options)
            .then(response => response.json())
            .then(result => {
                // console.log(result.query.from)
                // console.log(result.result)
                input_first.setAttribute("placeholder", `${result.new_amount.toFixed(2)}`);
            })
            .catch(error => console.log('error', error));
        }
    }

});