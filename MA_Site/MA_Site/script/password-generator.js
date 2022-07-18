
/*-------------------- CLICK ON BUTTON ANIMATION ----------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
        
        const but = document.querySelector('button');

        but.onmousedown = function cl (){
                but.style.opacity = 0.7;
        }

        but.onmouseup = function clM() {

                but.style.opacity = 1;

                /*-------------------- TIMERS CIRCLE ----------------------------------------------------*/

                const numers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                let lenN = numers.length;
                let randNumer = numers[Math.floor(Math.random() * lenN)];


                const small_Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                                        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                                        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                let lenSL = small_Letters.length;
                let randLetter = small_Letters[Math.floor(Math.random() * lenSL)];


                const big_Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                                    'U', 'V', 'W', 'X', 'Y', 'Z'];
                let lenBL = big_Letters.length;
                let rand_Big_Letter = big_Letters[Math.floor(Math.random() * lenBL)];


                const symbols = ['/', '*', '-', '+', '_', ')', '.', '%', '$'];
                let lenS = symbols.length;
                let rand_symbol = symbols[Math.floor(Math.random() * lenS)];


                const colaps = [numers[Math.floor(Math.random() * lenN)], 
                                small_Letters[Math.floor(Math.random() * lenSL)], 
                                big_Letters[Math.floor(Math.random() * lenBL)], 
                                symbols[Math.floor(Math.random() * lenS)]];
                let lenC = colaps.length;
                
                let col_0 = colaps[Math.floor(Math.random() * lenC)];
                var col_1;
                var col_2;
                var col_3;
                var col_4;


                const one = document.querySelector('#one');
                
                const two =  document.querySelector('#two');

                const three = document.querySelector('#three');

                const four = document.querySelector('#four');

                const five = document.querySelector('#five');

                const six = document.querySelector('#six');

                const seven = document.querySelector('#seven');

                const eight = document.querySelector('#eight');

                const nine = document.querySelector('#nine');

            
            
                switch (document.querySelector('.kil').value){
                        case document.querySelector('#kil_3').value:
                                switch (document.querySelector('.dov').value){
                                        case document.querySelector('#dov_4').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_6').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_8').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_10').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] +
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                }
                                break;
                        case document.querySelector('#kil_6').value:
                                switch (document.querySelector('.dov').value){
                                        case document.querySelector('#dov_4').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];

                                                break;
                                        case document.querySelector('#dov_6').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_8').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_10').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                }
                                break;
                        case document.querySelector('#kil_9').value:
                                switch (document.querySelector('.dov').value){
                                        case document.querySelector('#dov_4').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                seven.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                eight.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                nine.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];

                                                break;
                                        case document.querySelector('#dov_6').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                seven.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                eight.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                nine.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_8').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                seven.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                eight.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                nine.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                        case document.querySelector('#dov_10').value:
                                                one.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                two.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                three.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                four.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                five.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                six.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                seven.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                eight.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                nine.innerHTML = colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)] + 
                                                                colaps[Math.floor(Math.random() * lenC)];
                                                break;
                                }
                                break;
                }
            



        }

        let a = document.querySelector('#number');
        console.log(a.getAttribute(checked));
        

});