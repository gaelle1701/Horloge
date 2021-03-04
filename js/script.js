// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des varaiables




// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré



// Déplacer les aiguilles 
function demarrerLaMontre() {

    let now = new Date;
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    AIGUILLEHR.style.transform = `rotate(${hour * 360 / 12 + min * 6 / 60}deg)`;
   
    AIGUILLEMIN.style.transform = `rotate(${min * 360 / 60 + sec * 6 / 60}deg)`;

    AIGUILLESEC.style.transform = `rotate(${sec * 360 / 60}deg)`;
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

// 1 h = 60 min
// 1 min = 60 s
// 1 h = 60 min * 60 s = 3600 s

// cercle 360°
//degré pour sec => 360° / 60 = 6°
// (sec / 60) * 360°
// => position de la s par rapport à la sec elle meme + 

//degré pour min => 360° / 60 = 6°
// (min / 60) * 360° + (( sec / 60) * 6) => récupérer les sec déjà écoulées par rapport aux min

// degré pour h (12h dans le cadran) => 360° / 12 = 30°
// ((h / 12) * 360) + ((min / 60) * 30) => récupérer les min déjà écoulées dans l'heure

// utiliser rotate => définit une transformation qui déplace un élémnet autour d'un pt fixe (transform-origin CSS) + mettre valeur de l'angle en argument