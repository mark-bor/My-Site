import { tank, abrams, leopard } from "../../game_field/assembly.js";
import { getMachineGun } from "./select_machine_gun.js";

let tankName;

export function selectTank() {
    const confirmSelection = document.getElementById('confirm_selection');

    fetch('./script/JSON/tanks.json')
    .then((res) => res.json())
    .then((res) => checkConfirm(res.abrams, confirmSelection));

    document.getElementById('select_tank_abrams').onclick = () => {
        getTank('M1 Abrams', confirmSelection);
        getMachineGun('M2 Browning');
    };
    document.getElementById('select_tank_leopard').onclick = () => {
        getTank('Leopard 2', confirmSelection);
        getMachineGun('MG-42');
    };
    
    confirmSelection.onclick = () => {
        substituteTank();
        confirmSelection.style.display = 'none';
    }
}

function getTank(params, button) {
    fetch('./script/JSON/tanks.json')
    .then((res) => res.json())
    .then((res) => {
        if (params==='M1 Abrams') {
            setTank(res.abrams)
            checkConfirm(res.abrams, button);
            tankName='M1 Abrams';
        } else if (params==='Leopard 2') {
            setTank(res.leopard)
            checkConfirm(res.leopard, button);
            tankName='Leopard 2';
        }
    });
}

function checkConfirm(object, button) {
    tank.tank.getInformation().name!=object.name? button.style.display = 'block': button.style.display = 'none';
}

function setTank(object) {
    document.getElementById('tank_image').src = object.url;
    document.getElementById('tank_name').innerText = object.name;
    document.getElementById('tank_number_of_bullets').innerText = object.numberOfBullets;
    document.getElementById('tank_rate_of_fire').innerText = object.rateOfFire;
    document.getElementById('tank_recharge_speed').innerText = object.rechargeSpeed;
    [
        ...document.querySelectorAll('.characteristic_name'), 
        ...document.querySelectorAll('.characteristic')
    ].forEach((element) => element.style.borderColor = object.color);
}

function substituteTank() {
    if (tankName==='M1 Abrams') {
        if (tank.tank.getInformation().name!='M1 Abrams') {
            tank.tank.removeTank();
            tank.tank = abrams;
            tank.tank.indX = leopard.indX;
            tank.tank.indY = leopard.indY;
            tank.tank.tankR = leopard.tankR;
            tank.tank.towerR = leopard.towerR;
            tank.tank.addTank();
            tank.tank.activation();
        }
    } else if (tankName==='Leopard 2') {
        if (tank.tank.getInformation().name!='Leopard 2') {
            tank.tank.removeTank();
            tank.tank = leopard;
            tank.tank.indX = abrams.indX;
            tank.tank.indY = abrams.indY;
            tank.tank.tankR = abrams.tankR;
            tank.tank.towerR = abrams.towerR;
            tank.tank.addTank();
            tank.tank.activation();
        }
    }
}