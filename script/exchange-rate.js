// var myHeaders = new Headers();
// myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };

/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
};

function doRequest(have, want, amount, place) {
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
        console.log('error', error);
        place.setAttribute("placeholder", "💸"); 
    });
}

const exchRate = {};

document.addEventListener('DOMContentLoaded', function() {
    exchRate.input_first = document.querySelector(".input_first_block");
    exchRate.input_second = document.querySelector(".input_second_block");
    exchRate.rate_one = document.querySelector(".rates_one");
    exchRate.rate_two = document.querySelector(".rates_two");
    exchRate.massege = document.querySelector("#massege");
    
    exchRate.input_first.oninput = function() {
        getResult(
            exchRate.input_first, 
            exchRate.input_second, 
            exchRate.massege, 
            exchRate.rate_one.value, 
            exchRate.rate_two.value
        );
    }

    exchRate.input_second.oninput = function() {
        getResult(
            exchRate.input_second, 
            exchRate.input_first, 
            exchRate.massege, 
            exchRate.rate_two.value,
            exchRate.rate_one.value 
        );
    }
});

function getResult(inp1, inp2, mass, rate1, rate2) {
    inp2.value = "";
    let val = inp1.value;
    
    if (!val) {
        inp2.setAttribute("placeholder", '💸'); 

    } else if (val == 0) {
        mass.style.display = "none";
        // mass.innerHTML = "Введіть число<br>Input numeric";
        
    } else if (!(val * 1)) {            
        let item = val.split('');
        
        if (item.includes('k') == true) {
            item.pop();
            let num = `${item.join('')}000`;
            doRequest(rate1, rate2, num, inp2);
            
        } else {
            mass.style.display = "block";
            mass.innerHTML = "Введіть число<br>Input numeric";
            inp2.setAttribute("placeholder", '💸'); 
            // mass.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
        }
    } else {
        mass.style.display = "none";
        doRequest(rate1, rate2, val, inp2);
    }
}