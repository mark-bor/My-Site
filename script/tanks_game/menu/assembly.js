import { moveOnSection } from "./move_on_section.js";
import { soundStor, checkVolume } from "./options/options.js";
import { swithMeinMenuSection } from "./main_menu/move_on_section.js";
import { selectTank } from "./main_menu/select_tank.js";
import { selectMachineGun } from "./main_menu/select_machine_gun.js";

let musicNumber = 1;
export let music;

export function assemblyMainMenu() {
    moveOnSection();
    checkVolume();
    swithMeinMenuSection();
    selectTank();
    selectMachineGun();

    startMusic();
    checkMusicInterval();

    const menuInTankGame = document.getElementById('menu_in_tank_game');
    
    document.getElementById('open_menu').onclick = () => {
        menuInTankGame.style.display==='none'? menuInTankGame.style.display='block': menuInTankGame.style.display='none';
        if (musicNumber===1) { music=soundStor.musicOne }
        else if (musicNumber===2) { music=soundStor.musicTwo }
        else if (musicNumber===3) { music=soundStor.musicThree }
        music.play();
        soundStor.tankMotor.pause();
        soundStor.tankMotor.currentTime = 0;
    }
    
    const stopMusicAndCloseMenu = () => {
        menuInTankGame.style.display==='block'? menuInTankGame.style.display='none': null;
        music.pause();
        music.currentTime = 0;
        musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
        localStorage.setItem('music', musicNumber);
        soundStor.tankMotor.play();
    }
    document.getElementById('close_menu').onclick = () => stopMusicAndCloseMenu();
    document.getElementById('start_game').onclick = () => stopMusicAndCloseMenu();

    // menuInTankGame.style.display==='none'? soundStor.tankMotor.play(): null;
}

function startMusic() {
    !localStorage.getItem('music')? localStorage.setItem('music', musicNumber): null;

    musicNumber=Number(localStorage.getItem('music'));

    if (musicNumber===1) { music=soundStor.musicOne }
    else if (musicNumber===2) { music=soundStor.musicTwo }
    else if (musicNumber===3) { music=soundStor.musicThree }

    music.currentTime = 0;
    musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
    localStorage.setItem('music', musicNumber);
    music.play();
}

function checkMusicInterval() {
    setInterval(() => {
        if (musicNumber===1) { 
            if (music.currentTime>=soundStor.musicOneCurrTime) {
                music.currentTime = 0;
                music=soundStor.musicTwo;
                musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
                music.play();
            }
        } else if (musicNumber===2) { 
            if (music.currentTime>=soundStor.musicTwoCurrTime) {
                music.currentTime = 0;
                music=soundStor.musicThree;
                musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
                music.play();
             }
        } else if (musicNumber===3) { 
            if (music.currentTime>=soundStor.musicThreeCurrTime) {
                music.currentTime = 0;
                music=soundStor.musicOne; 
                musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
                music.play();
             }
        }
    }, 7000);
}

document.addEventListener('keyup', (elem) => {
    const keyName = elem.code;

    switch (keyName) {
        case 'KeyF':
            const menuInTankGame = document.getElementById('menu_in_tank_game');
            if (menuInTankGame.style.display==='none') {
                menuInTankGame.style.display='block'
                if (musicNumber===1) { music=soundStor.musicOne }
                else if (musicNumber===2) { music=soundStor.musicTwo }
                else if (musicNumber===3) { music=soundStor.musicThree }
                music.play();
            } else {
                menuInTankGame.style.display='none';
                music.pause();
                music.currentTime = 0;
                musicNumber===3? musicNumber=1: musicNumber = musicNumber+1;
                localStorage.setItem('music', musicNumber);
            }
            break;
        
        default:
            break;
    }
});