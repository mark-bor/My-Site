/*-------------------- CALCULETE ----------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('#btn_for_calc');
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const x_1 = document.querySelector('#x_1')
    const x_2 = document.querySelector('#x_2')

    button.onmousedown = function (){
        // button.style.opacity = 1;
        button.style.boxShadow = 'inset 0 0 10px #1E2939';
    }

    button.onmouseup = function (){
        // button.style.opacity = 1;
        button.style.boxShadow = 'none';
        let a_vel = a.value;
        let b_vel = b.value;
        let c_vel = c.value;
        
        if (!a_vel | !b_vel | !c_vel) {
            if (!a_vel) {
                a.value = 1;
            }
            if (!b_vel) {
                b.value = 1;
            }
            if (!c_vel) {
                c.value = 1;
            }
            a_vel = a.value;
            b_vel = b.value;
            c_vel = c.value;
        }

        let desk = (b_vel*b_vel) + (4*a_vel*c_vel);
        let dk = Math.sqrt(desk);
        let a2 = 2*a_vel;
        let x1 = ((-b_vel+dk)/a2).toFixed(1);
        let x2 = ((-b_vel-dk)/a2).toFixed(1);
        let x = (-b_vel/a2).toFixed(1);

        if (desk<0 || a2===0){
            x_1.innerHTML = 'NON';
            x_2.innerHTML = 'NON';
        }else if (desk===0){
            x_1.innerHTML = x;
            x_2.innerHTML = x;
        }else if (desk>0){
            x_1.innerHTML = x1;
            x_2.innerHTML = x2;
        }
    }
});
