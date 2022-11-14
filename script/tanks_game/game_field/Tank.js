import { volumeStor } from "../menu/options/options.js";

export class Tank {
    constructor() {
        this.tankId = 0;
        this.personalTankId;
        
        this.move = 2;
        this.tankR = 0;
        this.tankDeg = 0;
        this.degId = 0;
        
        this.towerR = 0;

        this.gFireId = 0;
        this.gCartrCaseId = 20;

        this.mgFireId = 0;
        this.mgCartrCaseId = 200;
        this.deviation = 0;
        this.d = 10;

        this.bulletPosition

        this.tank;
        this.tower;
        this.armor;
        this.fireSmoke;

        this.fireMGunTimer = document.getElementById('fire_MG_timer');
        this.informationAboutMG = document.getElementById('information_about_mg');
        this.remainderMG = document.getElementById('mg_remainder');
        this.informationAboutG = document.getElementById('information_about_gun');
        this.remainderG = document.getElementById('g_remainder');
    }

    at(params) {
        switch (params) {
            case '1:30':
                if (this.indY>20 & this.indX<this.endW) {
                    this.indX = this.indX + this.move/2;
                    this.tank.style.left = `${this.indX}px`;
            
                    this.indY = this.indY - this.move/2;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;

            case '3':
                if (this.indX<this.endW) {
                    this.indX = this.indX + this.move;
                    this.tank.style.left = `${this.indX}px`;
                }
                break;
        
            case '4:30':
                if (this.indX<this.endW & this.indY<this.endH) {
                    this.indX = this.indX + this.move/2;
                    this.tank.style.left = `${this.indX}px`;
            
                    this.indY = this.indY + this.move/2;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;
        
            case '6':
                if (this.indY<this.endH) {
                    this.indY = this.indY + this.move;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;
        
            case '7:30':
                if (this.indX>0 & this.indY<this.endH) {
                    this.indX = this.indX - this.move/2;
                    this.tank.style.left = `${this.indX}px`;
            
                    this.indY = this.indY + this.move/2;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;
        
            case '9':
                if (this.indX>0) {
                    this.indX = this.indX - this.move;
                    this.tank.style.left = `${this.indX}px`;
                }
                break;
        
            case '10:30':
                if (this.indY>20 & this.indX>0) {
                    this.indX = this.indX - this.move/2;
                    this.tank.style.left = `${this.indX}px`;
            
                    this.indY = this.indY - this.move/2;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;
        
            case '12':
                if (this.indY>20) {
                    this.indY = this.indY - this.move;
                    this.tank.style.top = `${this.indY}px`;
                }
                break;
        
            default:
                break;
        }
    }
    
    moveUp() {
        if (this.tankDeg===this.tankR) {
            this.at('3');
            
        } else if (this.tankDeg+45===this.tankR | this.tankDeg+(-315)===this.tankR) {
            this.at('4:30');
    
        } else if (this.tankDeg+90===this.tankR | this.tankDeg+(-270)===this.tankR) {
            this.at('6');
    
        } else if (this.tankDeg+135===this.tankR | this.tankDeg+(-225)===this.tankR) {
            this.at('7:30');
    
        } else if (this.tankDeg+180===this.tankR | this.tankDeg+(-180)===this.tankR) {
            this.at('9');
    
        } else if (this.tankDeg+225===this.tankR | this.tankDeg+(-135)===this.tankR) {
            this.at('10:30');
    
        } else if (this.tankDeg+270===this.tankR | this.tankDeg+(-90)===this.tankR) {
            this.at('12');
    
        } else if (this.tankDeg+315===this.tankR | this.tankDeg+(-45)===this.tankR) {
            this.at('1:30');
            
        }
    }
    moveDown() {
        if (this.tankDeg===this.tankR) {
            this.at('9');
            
        } else if (this.tankDeg+45===this.tankR | this.tankDeg+(-315)===this.tankR) {
            this.at('10:30');
    
        } else if (this.tankDeg+90===this.tankR | this.tankDeg+(-270)===this.tankR) {
            this.at('12');
    
        } else if (this.tankDeg+135===this.tankR | this.tankDeg+(-225)===this.tankR) {
            this.at('1:30');
    
        } else if (this.tankDeg+180===this.tankR | this.tankDeg+(-180)===this.tankR) {
            this.at('3');
    
        } else if (this.tankDeg+225===this.tankR | this.tankDeg+(-135)===this.tankR) {
            this.at('4:30');
    
        } else if (this.tankDeg+270===this.tankR | this.tankDeg+(-90)===this.tankR) {
            this.at('6');
    
        } else if (this.tankDeg+315===this.tankR | this.tankDeg+(-45)===this.tankR) {
            this.at('7:30');
            
        }
    }
    
    tankShadow() {
        if (this.tankDeg===this.tankR) {
            this.tank.style.boxShadow = '-2px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+45===this.tankR | this.tankDeg+(-315)===this.tankR) {
            this.tank.style.boxShadow = '0px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+90===this.tankR | this.tankDeg+(-270)===this.tankR) {
            this.tank.style.boxShadow = '2px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+135===this.tankR | this.tankDeg+(-225)===this.tankR) {
            this.tank.style.boxShadow = '2px 0px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+180===this.tankR | this.tankDeg+(-180)===this.tankR) {
            this.tank.style.boxShadow = '2px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+225===this.tankR | this.tankDeg+(-135)===this.tankR) {
            this.tank.style.boxShadow = '0px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+270===this.tankR | this.tankDeg+(-90)===this.tankR) {
            this.tank.style.boxShadow = '-2px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        } else if (this.tankDeg+315===this.tankR | this.tankDeg+(-45)===this.tankR) {
            this.tank.style.boxShadow = '-2px 0px 6px -1px rgba(97, 105, 116, 0.3)';
        }
    }
    moveLeft() {
        if (this.degId===0) {

            this.tankR = this.tankR - 45;
            this.tank.style.transform = `rotate(${this.tankR}deg)`;
            
            this.towerR<90? this.towerR = this.towerR + 45: null;
            this.tower.style.transform = `rotate(${this.towerR}deg)`;

            this.degId=1;
            setTimeout(() => this.degId=0, 200);

            if (this.tankR%360===0) {this.tankDeg = this.tankR;}

            this.tankShadow();
        }
    }
    moveRight() {
        if (this.degId===0) {

            this.tankR = this.tankR + 45;
            this.tank.style.transform = `rotate(${this.tankR}deg)`;
            
            this.towerR>-90? this.towerR = this.towerR - 45: null;
            this.tower.style.transform = `rotate(${this.towerR}deg)`;
            
            this.degId=1;
            setTimeout(() => this.degId=0, 199);

            if (this.tankR%360===0) {this.tankDeg = this.tankR;}

            this.tankShadow();
            
        }
    }

    rotateLeft() {
        this.towerR = this.towerR - 2;
        this.tower.style.transform = `rotate(${this.towerR}deg)`;
    }
    rotateRight() {
        this.towerR = this.towerR + 2;
        this.tower.style.transform = `rotate(${this.towerR}deg)`;
    }

    tankJolt() {
        if ((-45+this.tankDeg<=this.towerR & this.towerR<this.tankDeg+45) | 
            (315+this.tankDeg<=this.towerR & this.towerR<this.tankDeg+405) | 
            (-405+this.tankDeg<=this.towerR & this.towerR<this.tankDeg-315)) {
    
            this.tank.style.left = `${this.indX-10}px`;
    
        } else if ((45+this.tankDeg<=this.towerR & this.towerR<this.tankDeg+135) | 
                    (-315+this.tankDeg<=this.towerR & this.towerR<this.tankDeg-225)) {
    
            this.tank.style.top = `${this.indY-10}px`;
            
        } else if ((135+this.tankDeg<=this.towerR & this.towerR<this.tankDeg+225) | 
                    (-225+this.tankDeg<=this.towerR & this.towerR<this.tankDeg-135)) {
    
            this.tank.style.left = `${this.indX+10}px`;
            
        } else if ((225+this.tankDeg<=this.towerR & this.towerR<this.tankDeg+315) | 
                    (-135+this.tankDeg<=this.towerR & this.towerR<this.tankDeg-45)) {
    
            this.tank.style.top = `${this.indY+10}px`;
        }
    }
    fire() {
        if (this.gCartrCaseId===0) {

            this.gCartrCaseId = this.gCartrCaseId-1;
            for (let i=0; i<=10000; i++) {
                setTimeout(() => {
                    this.remainderG.style.width = `${0 + ((100/10000)*i)}%`;
                    if (i===10000) {
                        this.gCartrCaseId=20;
                        this.informationAboutG.innerHTML = `${this.gCartrCaseId}/20`;
                    }
                }, i)
            }
            
        } else {
            
            if (this.gFireId===0) {

                const fire_timer = document.getElementById('fire_timer');
                
                this.gFireId = 1;
                this.gCartrCaseId = this.gCartrCaseId-1;
                this.informationAboutG.innerHTML = `${this.gCartrCaseId}/20`;
                this.remainderG.style.width = `${100 - ((100/20)*(20-this.gCartrCaseId))}%`;
    
                this.tankJolt();
                this.fireSound.volume=volumeStor.volumeForeG.value/100;
                this.fireSound.play();
    
                for (let i=0; i<=3000; i++) {
                    setTimeout(() => {
                        this.armor.style.left = `${i}px`;
                        // this.bulletPosition = Math.floor(i + (this.indX+(this.tank.clientWidth-(this.tower.clientWidth+10))/2-1+(this.towerImage.clientWidth/9+1)) + 50);
                        // if (this.bulletPosition<=530) {
                        //     console.log('Targret!!');
                        //     console.log(this.bulletPosition);
                        // }
                        fire_timer.style.strokeDasharray = 145 - ((145/3000)*i);
                        fire_timer.style.strokeDasharray<145/3? fire_timer.style.stroke = '#FFF85C': fire_timer.style.stroke = '#FF5555'
                        if (i===3000) {
                            fire_timer.style.strokeDasharray = 145;
                            fire_timer.style.stroke = '#8FD855';
                            this.fireSound.pause();
                            this.fireSound.currentTime=0;
                            this.gFireId = 0;
                        }
                    }, i)
                }
        
                this.fireSmoke.className = 'fire_smoke_active';
                setTimeout(() => {
                    this.fireSmoke.className = 'fire_smoke';
                    this.tank.style.left = `${this.indX}px`;
                    this.tank.style.top = `${this.indY}px`;
                }, 10);
            }
        }
    }

    fireFromMachineGun() {
        if (this.mgCartrCaseId===0) {
            
            this.mgCartrCaseId=this.mgCartrCaseId-1;
    
            for (let i=0; i<=7000; i++) {
                setTimeout(() => {
                    this.fireMGunTimer.style.strokeDasharray = 0 + ((119/7000)*i);
                    if (this.fireMGunTimer.style.strokeDasharray<119/2) {
                        this.fireMGunTimer.style.stroke = '#FFF85C'; 
                        if (this.fireMGunTimer.style.strokeDasharray<119/4) {
                            this.fireMGunTimer.style.stroke = '#FF5555';
                        }
                    } else {this.fireMGunTimer.style.stroke = '#8FD855';}
    
                    if (i===7000) {
                        this.mgCartrCaseId=200;
                        this.informationAboutMG.innerHTML = `${this.mgCartrCaseId}/200`;
                        this.remainderMG.style.width = `100%`;
                    }
                }, i)
            }
    
        } else if (this.mgCartrCaseId>0) {
    
            if (this.mgFireId===0) {
    
                this.mgFireId = 1;
                setTimeout(() => this.mgFireId=0, this.mgFireTime);
                
                this.cartridgeCaseFromMG.insertAdjacentHTML('beforeend', `
                <span id="cartridge_case${this.mgCartrCaseId}" class="cartridge_case">
                <audio id="machine_gun_fire_sound${this.mgCartrCaseId}" src="./Sounds/browning_fire.mp3" volume="0.3"></audio>
                </span>
                `);
                this.armorsFromMG.insertAdjacentHTML('beforeend', `<span id="armor_for_MG${this.mgCartrCaseId}" class="armors_for_MG"></span>`);
                
                const cartridgeCase = document.getElementById(`cartridge_case${this.mgCartrCaseId}`);
                const sound = document.getElementById(`machine_gun_fire_sound${this.mgCartrCaseId}`);
                const armorForMG = document.getElementById(`armor_for_MG${this.mgCartrCaseId}`)
                
                sound.volume=volumeStor.volumeForeMG.value/100;
                sound.play();  
                
                this.deviation = this.deviation+this.d;
                this.deviation===20? this.d=(-10): null;
                this.deviation===(-20)? this.d=10: null;

                const deviationI = this.deviation/1500;
                const left = Math.random() * 10;
                const top = Math.random() * 10 + 10;
                
                for (let i=0; i<=1500; i++) {
                    if (i<=500) {
                        this.mgCartrCaseId%2===0 ?
                        setTimeout(() => cartridgeCase.style.left = `-${left}px`, i) :
                        setTimeout(() => cartridgeCase.style.left = `${left}px`, i);
                            
                        setTimeout(() => cartridgeCase.style.top = `${top}px`, i);
                        if (i===500) {cartridgeCase.style.transform = `rotate(${Math.random() * 360}deg)`;}
                    }
                    
                    setTimeout(() => {
                        armorForMG.style.transform = ` translateY(${deviationI*i}px) translateX(${i}px)`
                        if (i===1500) {
                            this.armorsFromMG.removeChild(armorForMG);
                        }
                    }, i)
                }
                setTimeout(() => this.cartridgeCaseFromMG.removeChild(cartridgeCase), 3000);
                this.fireSmokeFromMG.className = 'fire_smoke_frome_MG_active';
                setTimeout(() => this.fireSmokeFromMG.className = 'fire_smoke_frome_MG', 5);
                
                this.mgCartrCaseId = this.mgCartrCaseId-1;
                this.informationAboutMG.innerHTML = `${this.mgCartrCaseId}/200`;
                this.remainderMG.style.width = `${100 - ((100/200)*(200-this.mgCartrCaseId))}%`;
                this.fireMGunTimer.style.strokeDasharray = 119 - ((119/200)*(200-this.mgCartrCaseId));
                if (this.fireMGunTimer.style.strokeDasharray<119/2) {
                    this.fireMGunTimer.style.stroke = '#FFF85C'; 
                    if (this.fireMGunTimer.style.strokeDasharray<119/4) {
                        this.fireMGunTimer.style.stroke = '#FF5555';
                    }
                } 
            }
        }
    }
}
