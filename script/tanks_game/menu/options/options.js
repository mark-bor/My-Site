import { tank } from "../../game_field/assembly.js";

export let volume, moreSounds, detailedSounds, volumeNumber, hideControllers;

export const soundStor = {
    getSounds() {
        const sounds = tank.tank.getInformation().sounds;
    
        this.tankMotor = sounds.tankMotor;
        this.tankMove = sounds.tankMove;
        this.towerRotate = sounds.towerRotate;

        this.tankMotor.currentTime=2;
        this.tankMove.currentTime=2;
        this.towerRotate.currentTime=2;

        this.musicOne = document.getElementById('music_one');
        this.musicTwo = document.getElementById('music_two');
        this.musicThree = document.getElementById('music_three');

        this.musicOneCurrTime = 138;
        this.musicTwoCurrTime = 180;
        this.musicThreeCurrTime = 166;
    }
};
export const volumeStor = {
    getVolumRegulators() {
        volumeStor.volumeMotor = document.getElementById('volume_motor');
        volumeStor.volumeMove = document.getElementById('volume_move');
        volumeStor.volumeRotateTower = document.getElementById('volume_rotate_tower');
        volumeStor.volumeForeG = document.getElementById('volume_fire_from_g');
        volumeStor.volumeForeMG = document.getElementById('volume_fire_from_mg');

        volumeStor.volumeMusic = document.getElementById('volume_music');

        this.volumeMotor.onchange = (element) => soundStor.tankMotor.volume = element.target.value/100/5*1;
        this.volumeMove.onchange = (element) => soundStor.tankMove.volume = element.target.value/100;
        this.volumeRotateTower.onchange = (element) => soundStor.towerRotate.volume = element.target.value/100;
        
        this.volumeMusic.onchange = (element) => {
            soundStor.musicOne.volume = element.target.value/100;
            soundStor.musicTwo.volume = element.target.value/100;
            soundStor.musicThree.volume = element.target.value/100;
        }
        
        soundStor.tankMotor.volume>0.07? soundStor.tankMotor.volume-0.05: null;
    }
};

export function checkVolume() {

    soundStor.getSounds();
    volumeStor.getVolumRegulators();

    volume = document.getElementById('volume');
    moreSounds = document.getElementById('more_sounds');
    detailedSounds = document.getElementById('detailed_sounds');
    volumeNumber = document.getElementById('volume_number');

    showSoundVolume(volume.value);
    setVolume(soundStor, volumeStor, volume.value);

    document.getElementById('hide_controllers').onchange = (element) => {
        const positionLeft = document.querySelector('.position_left');
        const positionRigth = document.querySelector('.position_right');
        if (element.target.checked) {
            positionLeft.classList.add('position_left_hidden')
            positionRigth.classList.add('position_right_hidden')
        } else {
            positionLeft.classList.remove('position_left_hidden')
            positionRigth.classList.remove('position_right_hidden')
        }
    }

    volume.oninput = (element) => {
        showSoundVolume(element.target.value);
        setVolume(soundStor, volumeStor, element.target.value);
    }

    moreSounds.onclick = (element) => {
        element.target.classList.toggle('more_sounds_active');
        detailedSounds.classList.toggle('detailed_sounds_show');
    }
}

function showSoundVolume(num) {
    volumeNumber.innerHTML = `${num}%`;
}

function setVolume(sounds, regulators, globalVol) {

    const { 
        volumeMotor, 
        volumeMove, 
        volumeRotateTower, 
        volumeForeG, 
        volumeForeMG, 
        volumeMusic
    } = regulators;

    volumeMotor.value = Number(volumeMotor.value) + (globalVol - volumeMotor.value);
    volumeMove.value = Number(volumeMove.value) + (globalVol - volumeMove.value);
    volumeRotateTower.value = Number(volumeRotateTower.value) + (globalVol - volumeRotateTower.value);
    volumeForeG.value = Number(volumeForeG.value) + (globalVol - volumeForeG.value);
    volumeForeMG.value = Number(volumeForeMG.value) + (globalVol - volumeForeMG.value);

    volumeMusic.value = Number(volumeMusic.value) + (globalVol - volumeMusic.value);

    sounds.tankMotor.volume=volumeMotor.value/100/5*1;
    sounds.tankMove.volume=volumeMove.value/100;
    sounds.towerRotate.volume=volumeRotateTower.value/100;

    sounds.musicOne.volume=volumeMusic.value/100;
    sounds.musicTwo.volume=volumeMusic.value/100;
    sounds.musicThree.volume=volumeMusic.value/100;

}