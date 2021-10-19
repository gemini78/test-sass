//On stocke dans la variable themeBtn l'élement html qui porte l'id theme-btn
let themeBtn = document.querySelector('#theme-btn');

// a chaque click sur l'élement themeBtn on ajoute ou on retire la classe fa-sun
//C'est toggle qui permet d'avoir ces deux comportements
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}