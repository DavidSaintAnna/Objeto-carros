const carList = {
    popular: {
        "maximumVelocity": { "min": 180, "max": 200 },
        "minimumVelocity": { "min": 110, "max": 130 },
        "skid": { "min": 3, "max": 4 },
    },
    sport: {
        "maximumVelocity": { "min": 195, "max": 215 },
        "minimumVelocity": { "min": 125, "max": 145 },
        "skid": { "min": 2, "max": 3 },
    },
    supersport: {
        "maximumVelocity": { "min": 210, "max": 230 },
        "minimumVelocity": { "min": 140, "max": 160 },
        "skid": { "min": 1, "max": 1.75 },
    },
}

/*class Popular {
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
*/
function randomCar() {
    let odds = Math.random() * 100;
    if (odds <= 60) {
        const popular = carList.popular;
        let maximumVelocity = Math.round(Math.random() * (popular.maximumVelocity.max - popular.maximumVelocity.min) + popular.maximumVelocity.min);
        let minimumVelocity = Math.round(Math.random() * (popular.minimumVelocity.max - popular.minimumVelocity.min) + popular.minimumVelocity.min);
        let skid = Math.random() * (popular.skid.max / 100 - popular.skid.min / 100) + popular.skid.min / 100;
        let carParameters = {
            "maximumVelocity": maximumVelocity,
            "minimumVelocity": minimumVelocity,
            "skid": skid,
        }
        return carParameters;
    }

    if (odds >= 60 && odds <= 95) {
        const sport = carList.sport;
        let maximumVelocity = Math.round(Math.random() * (sport.maximumVelocity.max - sport.maximumVelocity.min) + sport.maximumVelocity.min);
        let minimumVelocity = Math.round(Math.random() * (sport.minimumVelocity.max - sport.minimumVelocity.min) + sport.minimumVelocity.min);
        let skid = Math.random() * (sport.skid.max / 100 - sport.skid.min / 100) + sport.skid.min / 100;
        let carParameters = {
            "maximumVelocity": maximumVelocity,
            "minimumVelocity": minimumVelocity,
            "skid": skid,
        }
        return carParameters;
    } else {
        const supersport = carList.supersport;
        let maximumVelocity = Math.round(Math.random() * (supersport.maximumVelocity.max - supersport.maximumVelocity.min) + supersport.maximumVelocity.min);
        let minimumVelocity = Math.round(Math.random() * (supersport.minimumVelocity.max - supersport.minimumVelocity.min) + supersport.minimumVelocity.min);
        let skid = Math.random() * (supersport.skid.max / 100 - supersport.skid.min / 100) + supersport.skid.min / 100;
        let carParameters = {
            "maximumVelocity": maximumVelocity,
            "minimumVelocity": minimumVelocity,
            "skid": skid,
        }
        return carParameters;
    }
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
        <p>Pedro é o vencedor! ${voltasGanhasPedro} voltas vencidas</p>
        <button onclick="reset()">Reset</button>
        `;
    } else if (voltasGanhasEdna > voltasGanhasJuca) {
        console.log("Edna é a vencedora" + voltasGanhasEdna);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Edna é a vencedora! ${voltasGanhasEdna} voltas vencidas </p>
        <button onclick="reset()">Reset</button>
        `

    } else {
        console.log("Juca é o vencedor" + voltasGanhasJuca);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Juca é o vencedor! ${voltasGanhasJuca} voltas vencidas</p>
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