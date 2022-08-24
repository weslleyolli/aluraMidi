function playSound (idElementSound) {
    document.querySelector(idElementSound).play();
}

const listOfKeys = document.querySelectorAll('.keys');

for (let cont = 0; cont < listOfKeys.length; cont ++){

    const key = listOfKeys[cont];
    const instrument = key.classList[1];
    const idSound = `#som_${instrument}`;

    key.onclick = function (){
        playSound(idSound);
    }

    key.onkeydown = function () {
        key.classList.add('ativa');
    }

    key.onkeyup = function(){
        key.classList.remove('ativa');
    }

    
}