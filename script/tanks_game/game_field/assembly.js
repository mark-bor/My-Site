import { soundStor } from "../menu/options/options.js";
import { Obstacle } from "./Obstacle.js";
import { Abrams } from "./Abrams.js";
import { Leopard } from "./Leopard.js";

const createTank = {
    left: 30,
    top: 170,
    gameField: document.getElementById('game_field'),
}

export const abrams = new Abrams(createTank);
export const leopard = new Leopard(createTank);
export let tank = {tank: abrams};

const createObstacle = {
    left: 530,
    top: 170,
    gameField: document.getElementById('game_field'),
}
const obstacle = new Obstacle(createObstacle);

export function assemblyTank() {

    tank.tank.addTank();
    tank.tank.activation();

    obstacle.addObstacle();

    document.querySelectorAll('.btn_control').forEach((el) => {
        el.onmousedown = (elem) => elem.target.classList.add('btn_control_active');
        el.onmouseup = (elem) => elem.target.classList.remove('btn_control_active');
    });
    
    document.getElementById('move_up').onclick = () => tank.tank.moveUp();
    document.getElementById('move_down').onclick = () => tank.tank.moveDown();
    document.getElementById('move_right').onclick = () => tank.tank.moveRight();
    document.getElementById('move_left').onclick = () => tank.tank.moveLeft();
    
    document.getElementById('rotate_left').onclick = () => tank.tank.rotateLeft();
    document.getElementById('rotate_right').onclick = () => tank.tank.rotateRight();
    
    document.getElementById('fire').onclick = () => tank.tank.fire();
    document.getElementById('fire_frome_MG').onclick = () => tank.tank.fireFromMachineGun();
    
}

// KeyboardEvents
document.addEventListener('keydown', (elem) => {
    const keyName = elem.code;

    switch (keyName) {
        case 'ArrowUp':
            elem.preventDefault();
            document.getElementById('move_up').classList.add('btn_control_active');
            soundStor.tankMove.play();
            tank.tank.moveUp();
            break;
            
        case 'ArrowRight':
            elem.preventDefault();
            document.getElementById('move_right').classList.add('btn_control_active');
            soundStor.tankMove.play();
            tank.tank.moveRight();
            break;
    
        case 'ArrowDown':
            elem.preventDefault();
            document.getElementById('move_down').classList.add('btn_control_active');
            soundStor.tankMove.play();
            tank.tank.moveDown();
            break;
    
        case 'ArrowLeft':
            elem.preventDefault();
            document.getElementById('move_left').classList.add('btn_control_active');
            soundStor.tankMove.play();
            tank.tank.moveLeft();
            break;
    
        case 'KeyD':
            document.getElementById('rotate_right').classList.add('btn_control_active');
            soundStor.towerRotate.play();
            tank.tank.rotateRight();
            break;
    
        case 'KeyA':
            document.getElementById('rotate_left').classList.add('btn_control_active');
            soundStor.towerRotate.play();
            tank.tank.rotateLeft();
        break;
            
        case 'KeyW':
            document.getElementById('fire').classList.add('btn_control_active');
            tank.tank.fire();
            break;
    
        case 'KeyE':
            document.getElementById('fire_frome_MG').classList.add('btn_control_active');
            tank.tank.fireFromMachineGun();
            break;
    
        default:
            break;
    }
});
// document.addEventListener('keypress', (elem) => {
//     const keyName = elem.code;

//     switch (keyName) {
//         case 'ArrowUp':
//             elem.preventDefault();
//             document.getElementById('move_up').classList.add('btn_control_active');
//             soundStor.tankMove.play();
//             tank.tank.moveUp();
//             break;
            
//         case 'ArrowRight':
//             elem.preventDefault();
//             document.getElementById('move_right').classList.add('btn_control_active');
//             soundStor.tankMove.play();
//             tank.tank.moveRight();
//             break;
    
//         case 'ArrowDown':
//             elem.preventDefault();
//             document.getElementById('move_down').classList.add('btn_control_active');
//             soundStor.tankMove.play();
//             tank.tank.moveDown();
//             break;
    
//         case 'ArrowLeft':
//             elem.preventDefault();
//             document.getElementById('move_left').classList.add('btn_control_active');
//             soundStor.tankMove.play();
//             tank.tank.moveLeft();
//             break;
    
//         case 'KeyD':
//             document.getElementById('rotate_right').classList.add('btn_control_active');
//             soundStor.towerRotate.play();
//             tank.tank.rotateRight();
//             break;
    
//         case 'KeyA':
//             document.getElementById('rotate_left').classList.add('btn_control_active');
//             soundStor.towerRotate.play();
//             tank.tank.rotateLeft();
//         break;
            
//         case 'KeyW':
//             document.getElementById('fire').classList.add('btn_control_active');
//             tank.tank.fire();
//             break;
    
//         case 'KeyE':
//             document.getElementById('fire_frome_MG').classList.add('btn_control_active');
//             tank.tank.fireFromMachineGun();
//             break;
    
//         default:
//             break;
//     }
// });
document.addEventListener('keyup', (elem) => {
    const keyName = elem.code;

    switch (keyName) {
        case 'ArrowUp':
            document.getElementById('move_up').classList.remove('btn_control_active');
            stopSaund(soundStor.tankMove);
            break;
            
        case 'ArrowRight':
            document.getElementById('move_right').classList.remove('btn_control_active');
            stopSaund(soundStor.tankMove);
            break;
            
        case 'ArrowDown':
            document.getElementById('move_down').classList.remove('btn_control_active');
            stopSaund(soundStor.tankMove);
            break;
    
        case 'ArrowLeft':
            document.getElementById('move_left').classList.remove('btn_control_active');
            stopSaund(soundStor.tankMove);
            break;
    
        case 'KeyD':
            document.getElementById('rotate_right').classList.remove('btn_control_active');
            stopSaund(soundStor.towerRotate);
            break;
    
        case 'KeyA':
            document.getElementById('rotate_left').classList.remove('btn_control_active');
            stopSaund(soundStor.towerRotate);
            break;
    
        case 'KeyW':
            document.getElementById('fire').classList.remove('btn_control_active');
            break;
    
        case 'KeyE':
            document.getElementById('fire_frome_MG').classList.remove('btn_control_active');
            break;
        
        default:
            break;
    }
});

function stopSaund(sound) {
    setTimeout(() => {
        sound.pause()
        soundStor.tankMove.currentTime=2;
        soundStor.towerRotate.currentTime=2;
    }, 100);
}