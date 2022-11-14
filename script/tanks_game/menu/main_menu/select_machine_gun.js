export function selectMachineGun() {
    document.getElementById('select_machine_gun_browning').onclick = () => getMachineGun('M2 Browning');
    document.getElementById('select_machine_gun_mg-42').onclick = () => getMachineGun('MG-42');
}

export function getMachineGun(params) {
    fetch('./script/JSON/machine_guns.json')
    .then((res) => res.json())
    .then((res) => {
        if (params==='M2 Browning') {
            setMachineGun(res.browning)
        } else if (params==='MG-42') {
            setMachineGun(res.mg_42)
        }
    });
}

export function setMachineGun(object) {
    document.getElementById('machine_gun_image').src = object.url;
    document.getElementById('machine_gun_name').innerText = object.name;
}