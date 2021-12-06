class Popular {
    constructor() {
        this.maximumVelocity = Math.round(Math.random() * (200 - 180) + 180);
        this.minimumVelocity = Math.round(Math.random() * (130 - 110) + 110);
        this.skid = Math.random() * (0.04 - 0.03) + 0.03;
    }

}
class Sport {
    constructor() {
        this.maximumVelocity = Math.round(Math.random() * (215 - 195) + 195);
        this.minimumVelocity = Math.round(Math.random() * (145 - 125) + 125);
        this.skid = Math.random() * (0.03 - 0.02) + 0.02;
    }
}

class SuperSport {
    constructor() {
        this.maximumVelocity = Math.round(Math.random() * (230 - 210) + 210);
        this.minimumVelocity = Math.round(Math.random() * (160 - 140) + 140);
        this.skid = Math.random() * (0.0175 - 0.01) + 0.01;
    }

}

function randomCar() {
    let odds = Math.random() * 100;
    if (odds <= 60)
        return new Popular();

    if (odds >= 60 && odds <= 95)
        return new Sport();

    else return new SuperSport();

}
let voltasGanhasPedro = 0;
let pedroCar = randomCar();
console.log(pedroCar);
let voltasGanhasEdna = 0;
let ednaCar = randomCar();
console.log(ednaCar);
let voltasGanhasJuca = 0;
let jucaCar = randomCar();
console.log(jucaCar);

function run(voltas) {
    let numeroVoltas = voltas;
    for (let i = 0; i < numeroVoltas; i++) {
        let velPedro = Math.round(Math.random() * (pedroCar.maximumVelocity - pedroCar.minimumVelocity) + pedroCar.minimumVelocity);
        let velEdna = Math.round(Math.random() * (ednaCar.maximumVelocity - ednaCar.minimumVelocity) + ednaCar.minimumVelocity);
        let velJuca = Math.round(Math.random() * (jucaCar.maximumVelocity - jucaCar.minimumVelocity) + jucaCar.minimumVelocity);
        let velocidadeFinalPedro = Math.round(velPedro - (pedroCar.skid * velPedro));
        let velocidadeFinalJuca = Math.round(velJuca - (jucaCar.skid * velJuca));
        let velocidadeFinalEdna = Math.round(velEdna - (ednaCar.skid * velEdna));
        if (velocidadeFinalPedro > velocidadeFinalJuca && velocidadeFinalPedro > velocidadeFinalEdna) {
            voltasGanhasPedro++
        } else if (velocidadeFinalEdna > velocidadeFinalJuca) {
            voltasGanhasEdna++
        } else {
            voltasGanhasJuca++
        }
    }
    if (voltasGanhasPedro > voltasGanhasEdna && voltasGanhasPedro > voltasGanhasJuca) {
        console.log("Pedro é o vencedor " + voltasGanhasPedro);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Pedro é o vencedor! ${voltasGanhasPedro} voltas</p>
        <button onclick="reset()">Reset</button>
        `;
    } else if (voltasGanhasEdna > voltasGanhasJuca) {
        console.log("Edna é a vencedora" + voltasGanhasEdna);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Edna é a vencedora! ${voltasGanhasEdna} voltas </p>
        <button onclick="reset()">Reset</button>
        `

    } else {
        console.log("Juca é o vencedor" + voltasGanhasJuca);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Juca é o vencedor! ${voltasGanhasJuca} voltas</p>
        <button onclick="reset()">Reset</button>
        `
    }
}

function reset() {
    voltasGanhasPedro = 0;
    voltasGanhasEdna = 0;
    voltasGanhasJuca = 0;
    document.getElementById("options_and_result").innerHTML = " ";
    document.getElementById("options_and_result").innerHTML = `
    <p id="text">Qual tipo de corrida você quer ?</p>
    <button onclick="run(10)">Corrida rápida: 10 voltas</button>
    <button onclick="run(70)">Grande Prêmio: 70 voltas</button>
    <button onclick="run(160)">Enduro: 160 voltas</button>
    `
}