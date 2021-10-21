//--------------------------------------------------------------------------------------//
//                                  Appels des balises                                  //
//--------------------------------------------------------------------------------------//

const navBarId = document.querySelector("#nav-bar")
const lightbox = document.querySelector("#lightbox")
const close = document.querySelector(".lightbox__close")
const image = document.querySelector(".contain-img")
const formationClass = document.querySelector(".formation")
const partenaireClass = document.querySelector(".partenaire")
const legaleClass = document.querySelector(".legale")
const contactClass = document.querySelector(".contact")

//--------------------------------------------------------------------------------------//
//                                  Ouvrir la lightbox pour formation                                //
//--------------------------------------------------------------------------------------//

let openLightboxFormation = function() {
    formationClass.addEventListener("click", function(e) {
        e.preventDefault()
        image.src = "assets/Img/bonjour.gif"
        lightbox.classList.add("show")
    });
    closeLightbox()
};

//--------------------------------------------------------------------------------------//
//                          Ouvrir la lightbox pour partenaire                          //
//--------------------------------------------------------------------------------------//

let openLightboxPartenaire = function() {
    partenaireClass.addEventListener("click", function(e) {
        e.preventDefault()
        image.src = "assets/Img/françoisPasEvident.gif"
        lightbox.classList.add("show")
    });
    closeLightbox()
};

//--------------------------------------------------------------------------------------//
//                        Ouvrir la lightbox pour Mention Légale                        //
//--------------------------------------------------------------------------------------//

let openLightboxLegale = function() {
    legaleClass.addEventListener("click", function(e) {
        e.preventDefault()
        image.src = "assets/Img/francois-embrouille.gif"
        lightbox.classList.add("show")
    });
    closeLightbox()
};

//--------------------------------------------------------------------------------------//
//             On ferme la lightbox lorsque qu'on click sur le bouton close             //
//--------------------------------------------------------------------------------------//

let closeLightbox = function() {
    close.addEventListener("click", function(){
        // ---- On retire la fenêtre lightbox ----------------------------------------------------
        lightbox.classList.remove("show")
    })
};

//--------------------------------------------------------------------------------------//
//                   Appel de la fonction d'ouverture de la lightbox                    //
//--------------------------------------------------------------------------------------//
 openLightboxFormation();
 openLightboxPartenaire();
 openLightboxLegale();