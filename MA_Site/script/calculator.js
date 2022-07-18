/*-------------------- CALCULETE ----------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('button');

    button.onmousedown = function (){

        button.style.opacity = 0.7;
    }

    button.onmouseup = function (){

        button.style.opacity = 1;

        let a = (document.querySelector('.a').value);
        let b = (document.querySelector('.b').value);
        let c = (document.querySelector('.c').value);

        let desk = (b*b) + (4*a*c);
        let dk = Math.sqrt(desk);

        let a2 = 2*a;

        let x1 = (-b+dk)/a2;
        let x2 = (-b-dk)/a2;
        let x = -b/a2;

        if (desk<0 || a2===0){
            document.querySelector('.x_1').innerHTML = 'NON';
            document.querySelector('.x_2').innerHTML = 'NON';
        }else if (desk===0){
            document.querySelector('.x_1').innerHTML = x;
            document.querySelector('.x_2').innerHTML = x;
        }else if (desk>0){
            document.querySelector('.x_1').innerHTML = x1;
            document.querySelector('.x_2').innerHTML = x2;
        }
    }
});

/*-------------------- TIMERS CIRCLE ----------------------------------------------------*/

