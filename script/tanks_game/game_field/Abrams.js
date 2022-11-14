import { Tank } from "./Tank.js";

export class Abrams extends Tank {
    constructor(position) {
        super();

        this.indX = position.left;
        this.indY = position.top;
        this.gameField = position.gameField;

        this.endW;
        this.endH;
        
        this.name = 'M1 Abrams';
        this.width = 100;
        this.height = 60;
        this.colorLight = '#E3D1AD';
        this.colorDark = '#C9B897';

        this.mgFireTime = 90;
    }
        
    addTank() {
        const tank = `
            <div id="tank${this.tankId}" class="tank tank_abrams" 
            style="
                left: ${this.indX}px; 
                top: ${this.indY}px;
                transform: rotate(${this.tankR}deg);
            ">
                <audio id="tank_motor_sound${this.tankId}" src="./Sounds/tank_motor.mp3" loop volume="0.3"></audio>
                <audio id="tank_move_sound${this.tankId}" src="./Sounds/tank_move.mp3" loop volume="0.3"></audio>

                <span id="tower${this.tankId}" class="rotate_tower rotate_tower_abrams"
                    style="
                    transform: rotate(${this.towerR}deg);
                ">
                    <audio id="tower_rotate_sound${this.tankId}" src="./Sounds/tower_rotate.mp3" loop volume="0.3"></audio>
                    
                    <span id="tower_image${this.tankId}" class="tower tower_abrams">
                        <span id="weapon${this.tankId}" class="weapon weapon_abrams">
                            <audio id="tank_fire_sound${this.tankId}" src="./Sounds/tank_fire.mp3" loop volume="0.3"></audio>

                            <span id="arm${this.tankId}" class="armor"></span>
                            <span id="fire_smoke${this.tankId}" class="fire_smoke"></span>
                        </span>

                        <span class="trapdoor trapdoor_abrams"></span>
                        
                        <span class="machine_gun machine_gun_abrams">
                            <span id="cartridge_case_from_MG${this.tankId}" class="cartridge_case_from_MG"></span>
                            <span id="armors_from_MG${this.tankId}" class="armors_from_MG"></span>
                            <span id="fire_smoke_frome_MG${this.tankId}" class="fire_smoke_frome_MG"></span>
                        </span>
                    </span>
                </span>
            </div>
        `;
        
        this.gameField.insertAdjacentHTML('beforeend', tank);
        this.personalTankId = this.tankId;
        this.tankId = this.tankId+1;

        // return tank;
    }
    removeTank() {
        this.gameField.removeChild(this.tank);
    }
    
    activation() {
        this.tank = document.getElementById(`tank${this.personalTankId}`);
        this.tower = document.getElementById(`tower${this.personalTankId}`);
        
        this.endW = this.gameField.clientWidth-this.tank.clientWidth;
        this.endH = this.gameField.clientHeight-this.tank.clientHeight/3*4;
        
        this.towerImage = document.getElementById(`tower_image${this.personalTankId}`);
        this.weapon = document.getElementById(`weapon${this.personalTankId}`);
        this.armor = document.getElementById(`arm${this.personalTankId}`);
        // console.log(this.armor);
        // console.log(this.armor);
        this.fireSmoke = document.getElementById(`fire_smoke${this.personalTankId}`);
        
        this.cartridgeCaseFromMG = document.getElementById(`cartridge_case_from_MG${this.personalTankId}`);
        this.armorsFromMG = document.getElementById(`armors_from_MG${this.personalTankId}`);
        this.fireSmokeFromMG = document.getElementById(`fire_smoke_frome_MG${this.personalTankId}`);
        
        this.fireSound = document.getElementById(`tank_fire_sound${this.personalTankId}`);

    //     console.log(this.tank.clientWidth);
    //     console.log(this.tower.clientWidth);
    //     console.log(this.towerImage.clientWidth);

    //     this.bulletPosition = Math.floor(this.indX+(this.tank.clientWidth-(this.tower.clientWidth+10))/2-1+(this.towerImage.clientWidth/9+1));
        
    //     console.log(this.bulletPosition);
    }
    
    getInformation() {
        return {
            gameField: this.gameField,
            name: this.name,
            left: this.indX,
            top: this.indY,
            colorLight: this.colorLight,
            colorDark: this.colorDark,
            components: {
                tank: this.tank,
                tower: this.tower,
                armor: this.armor,
                fireSmoke: this.fireSmoke,
                cartridgeCaseFromMG: this.cartridgeCaseFromMG,
                armorsFromMG: this.armorsFromMG,
                fireSmokeFromMG: this.fireSmokeFromMG,
            },
            sounds: {
                tankMotor: document.getElementById(`tank_motor_sound${this.personalTankId}`),
                tankMove: document.getElementById(`tank_move_sound${this.personalTankId}`),
                towerRotate: document.getElementById(`tower_rotate_sound${this.personalTankId}`),
                fireFromG: this.fireSound,
            }
        };
    }
}