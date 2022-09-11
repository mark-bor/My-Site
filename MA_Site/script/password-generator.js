
/*-------------------- CLICK ON BUTTON ANIMATION ------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

        const one = document.querySelector('#one');
        const two =  document.querySelector('#two');
        const three = document.querySelector('#three');
        const four = document.querySelector('#four');
        const five = document.querySelector('#five');
        const six = document.querySelector('#six');
        const seven = document.querySelector('#seven');
        const eight = document.querySelector('#eight');
        const nine = document.querySelector('#nine');
        
        const pswd = document.querySelectorAll('.pswd');
        const but = document.querySelector('.butto');

        const number = document.querySelector('#number');
        const small = document.querySelector('#small');
        const big = document.querySelector('#big');
        const sumbol = document.querySelector('#sumbol');
        const remuv = document.querySelector('#remuv');

        
        // -------------------- SYMBOLS ARRAYS -------------------------- 
        const numers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let lenN = numers.length;
        /*let randNumer = numers[Math.floor(Math.random() * lenN)];*/

        const small_Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let lenSL = small_Letters.length;
        /*let randLetter = small_Letters[Math.floor(Math.random() * lenSL)];*/

        const big_Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                            'U', 'V', 'W', 'X', 'Y', 'Z'];
        let lenBL = big_Letters.length;
        /*let rand_Big_Letter = big_Letters[Math.floor(Math.random() * lenBL)];*/

        const symbols = ['/', '*', '-', '_', ')', '.', '$'];
        let lenS = symbols.length;
        /*let rand_symbol = symbols[Math.floor(Math.random() * lenS)];*/



        // Наведення миші (прозорість та очищення паролів)
        but.onmousedown = function cl (){ 
                but.style.opacity = 0.7;
                pswd.forEach(pswd => { pswd.innerHTML = ''; })
        }

        // Відпускання мищі (відміна прозорості та генерація паролів)
        but.onmouseup = function clM() {
                but.style.opacity = 1;

                // Функція генерує масив символів по чекбоксам та повертає рандомний символ
                function Colaps () {
                        let result = [];

                        if (number.checked === true){
                                result.push(numers[Math.floor(Math.random() * lenN)]);
                        }
                        if (small.checked === true){
                                result.push(small_Letters[Math.floor(Math.random() * lenSL)]);
                        }
                        if (big.checked === true){
                                result.push(big_Letters[Math.floor(Math.random() * lenBL)]);
                        }
                        if (sumbol.checked === true){
                                result.push(symbols[Math.floor(Math.random() * lenS)]);
                        }
                        /*if (remuv.checked === true){}*/

                        let res_len = result.length;
                        if (res_len === 0){
                                return res_len;
                        } else {
                                /*let item = result[Math.floor(Math.random() * res_len)];
                                if (one.innerHTML.)*/
                                return result[Math.floor(Math.random() * res_len)];
                        }
                }

                function CheckedRemuv() {
                        if (remuv.checked){
                                let item = Colaps();
                                if (one.innerHTML.split('').includes(item)){
                                        for (;;){
                                                if (one.innerHTML.split('').includes(item)){
                                                        item = Colaps();
                                                } else {
                                                        return item;
                                                        break
                                                }
                                        }
                                } else {return item;}
                        } else {return Colaps();}
                }

                // Генерація, виводить результат в інтерфейс
                switch (document.querySelector('.kil').value){
                        case '3':
                                for (let i=1; i<=document.querySelector('.dov').value; i++){
                                        one.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        two.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        three.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                }
                                break;
                        case '6':
                                for (let i=1; i<=document.querySelector('.dov').value; i++){
                                        one.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        two.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        three.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        four.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        five.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        six.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                }
                                break;
                        case '9':
                                for (let i=1; i<=document.querySelector('.dov').value; i++){
                                        one.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        two.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        three.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        four.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        five.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        six.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        seven.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        eight.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                        nine.insertAdjacentHTML( "afterBegin", CheckedRemuv() );
                                }
                                break;
                }
        }
});