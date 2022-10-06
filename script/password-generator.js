// -------------------- SYMBOLS ARRAYS -------------------------- 
const arrays = {
        numers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        small_Letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        big_Letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        symbols: ['/', '*', '-', '_', ')', '.', '$'],
};
/*const randNumer = numers[Math.floor(Math.random() * numers.length)];*/
/*const randLetter = small_Letters[Math.floor(Math.random() * small_Letters.length)];*/
/*const rand_Big_Letter = big_Letters[Math.floor(Math.random() * big_Letters.length)];*/
/*const rand_symbol = symbols[Math.floor(Math.random() * symbols.length)];*/

const puncts = {};

/*-------------------- CLICK ON BUTTON ANIMATION ------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {        
        const pswd = document.querySelectorAll('.pswd');
        const but = document.querySelector('.butto');
        
        puncts.number = document.getElementById('number');
        puncts.small = document.getElementById('small');
        puncts.big = document.getElementById('big');
        puncts.sumbol = document.getElementById('sumbol');
        puncts.remuv = document.getElementById('remuv');
        
        // Наведення миші (прозорість та очищення паролів)
        but.onmousedown = function(){ 
                but.style.opacity = 0.7;
                pswd.forEach(pswd => pswd.innerHTML = '')
                
                // Відпускання мищі (відміна прозорості та генерація паролів)
                but.onmouseup = function() {
                        but.style.opacity = 1;
                        // Генерація, виводить результат в інтерфейс
                        for (let j=1; j<=document.querySelector('.kil').value; j++) {
                                for (let i=1; i<=document.querySelector('.dov').value; i++){
                                        const numPass = document.getElementById(`${j}_pass`);
                                        numPass.insertAdjacentHTML( "afterBegin", CheckedRemuv(numPass));
                                }
                        }
                }
        }
});
                        
// Функція генерує масив символів по чекбоксам та повертає рандомний символ
function Colaps () {
        let result = [];

        if (puncts.number.checked === true){ result.push(arrays.numers[Math.floor(Math.random() * arrays.numers.length)]); }
        if (puncts.small.checked === true){ result.push(arrays.small_Letters[Math.floor(Math.random() * arrays.small_Letters.length)]); }
        if (puncts.big.checked === true){ result.push(arrays.big_Letters[Math.floor(Math.random() * arrays.big_Letters.length)]); }
        if (puncts.sumbol.checked === true){ result.push(arrays.symbols[Math.floor(Math.random() * arrays.symbols.length)]); }

        const res_len = result.length
        if (res_len === 0){
                return res_len;
        } else {
                return result[Math.floor(Math.random() * res_len)];
        }
}
function CheckedRemuv(place) {
        if (puncts.remuv.checked){
                let item = Colaps();
                if (place.innerHTML.split('').includes(item)){
                        for (;;){
                                if (place.innerHTML.split('').includes(item)){
                                        item = Colaps();
                                } else {
                                        return item;
                                        break
                                }
                        }
                } else {return item;}
        } else { return Colaps(); }
}