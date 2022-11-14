import { assemblyTank, tank } from "./game_field/assembly.js";
import { assemblyMainMenu } from "./menu/assembly.js";

export function game() {

    assemblyTank();
    assemblyMainMenu();
    
    const inform = tank.tank.getInformation();
    document.getElementById('increase').onclick = () => {
        document.getElementById('games_body').classList.toggle('increase_game_body');
        
        tank.tank.endW = inform.gameField.clientWidth - inform.components.tank.clientWidth;
        tank.tank.endH = inform.gameField.clientHeight - inform.components.tank.clientHeight / 3 * 4;
    }
    window.onresize = () => {
        tank.tank.endW = inform.gameField.clientWidth-inform.components.tank.clientWidth;
        tank.tank.endH = inform.gameField.clientHeight-inform.components.tank.clientHeight/3*4;
    }
}

// KeyboardEvents
document.addEventListener('keyup', (elem) => {
    const keyName = elem.key;

    switch (keyName) {
        case 'Escape':
            document.getElementById('games_body').classList.remove('increase_game_body');
            const inform = tank.tank.getInformation();
            tank.tank.endW = inform.clientWidth - inform.components.tank.clientWidth;
            tank.tank.endH = inform.clientHeight - inform.components.tank.clientHeight / 3 * 4;
            break;

        default:
            break;
    }
});
