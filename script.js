// PORTFOLIO VARIABLES GLOBALES 
let compteur = 0;
let timer, elements, slides, slideWidth;

window.onload = () => {
    const diapo = document.querySelector(".diapo")
     elements = document.querySelector(".elements")
     slides = Array.from(elements.children)
    
    // CALCULE LA LARGEUR DU DIAPORAMA
    slideWidth = diapo.getBoundingClientRect().width
    
    // POUR DEPLACER LES IMAGES 
    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)
    
    // AUTOMATISER LE DIAPORAMA
    timer = setInterval(slideNext, 4000)
    
    // QUAND LA SOURIS SURVOL LE DIAPO STOPPER AUTOMATISATION
    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    // MISE EN OEUVRE DU "RESPONSIVE"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    });
};
    // FAIRE DEFILER LE DIAPORAMA VERS LA DROITE
function slideNext() {
    compteur++
    if(compteur == slides.length) {
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
};
    // FAIRE DEFILER LE DIAPORAMA VERS LA GAUCHE
function slidePrev() {
    compteur--
    if(compteur = slide.length - 1) {
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
};
    // QUAND LA SOURIS SURVOL LE DIAPO STOPPER AUMATISATION 
function stopTimer() {
    clearInterval(timer)
};
function startTimer() {
    timer = setInterval(slideNext, 4000)
};

// PAGE CONTACT
function ValidateEmail(inputText) {
// POUR LA VALIDITE DU MAIL AVEC @ ET .
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat)) {
            document.form1.text1.focus();
            return true;
            
        } else {
// SINON MESSAGE POPUP MAIL INVALID
            alert("Attention votre email n'est pas valide ! nom@exemple.xxx");
            document.form1.text1.focus();
            return false;
        }
}