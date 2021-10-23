//--------------------------------------------------------------------------------------//
//                                  Appels des balises                                  //
//--------------------------------------------------------------------------------------//

const navBarId = document.querySelector("#nav-bar")
const lightbox = document.querySelector("#lightbox")
const close = document.querySelector(".lightbox__close")
const preview = document.querySelector(".lightbox__preview")
const next = document.querySelector(".lightbox__next")
const image = document.querySelector(".contain-img")
const photoGallerie = document.querySelectorAll("#presentation a")
const formationClass = document.querySelector(".formation")
const partenaireClass = document.querySelector(".partenaire")
const legaleClass = document.querySelector(".legale")
const contactClass = document.querySelector(".contact")


//--------------------------------------------------------------------------------------//
//                            Variable de l'index des photos                            //
//--------------------------------------------------------------------------------------//

let index;

//--------------------------------------------------------------------------------------//
//                                  Ouvrir la lightbox pour formation                                //
//--------------------------------------------------------------------------------------//

let openLightboxFormation = function() {
    formationClass.addEventListener("click", function(e) {
        e.preventDefault()
        image.src = "../assets/Img/bonjour.gif"
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
        image.src = "../assets/Img/françoisPasEvident.gif"
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
        image.src = "../assets/Img/francois-embrouille.gif"
        lightbox.classList.add("show")
    });
    closeLightbox()
};

//--------------------------------------------------------------------------------------//
//                  Ouvrir la lightbox pour les photos de la gallerie                   //
//--------------------------------------------------------------------------------------//

let openLightboxPhoto = function() {
    for (let i = 0; i < photoGallerie.length; i++) {
        const photographie = photoGallerie[i];
        photographie.addEventListener("click", function(e) {
            e.preventDefault()
            let img = this.querySelector('img')
            image.src = img.src
            index = img.dataset.index
            console.log(index)
            lightbox.classList.add("show")
            preview.classList.add("show")
            next.classList.add("show")
        });
    }
    closeLightbox()
    previewLightbox()
    nextLightbox()
};

//--------------------------------------------------------------------------------------//
//             On ferme la lightbox lorsque qu'on click sur le bouton close             //
//--------------------------------------------------------------------------------------//

let closeLightbox = function() {
    close.addEventListener("click", function(){
        // ---- On retire la fenêtre lightbox ----------------------------------------------------
        lightbox.classList.remove("show")
        if (preview.classList.contains('show') == true && next.classList.contains('show') == true) {
            preview.classList.remove('show')
            next.classList.remove('show')            
        };
    });
};

//--------------------------------------------------------------------------------------//
//               Passer à l'image précédente au clic du bouton précédent                //
//--------------------------------------------------------------------------------------//

let previewLightbox = function() {
    preview.addEventListener("click", function(){
        // ---- On affiche l'image précédente ----------------------------------------------------
        index -= 1
        imgTotal = document.querySelectorAll('#gallerie img')
        // si index < 0 
        if (index < 0) {
            // index = nombre image total
            index = imgTotal.length - 1
        }
        //Afficher l image précédente dans la lightbox
            //Cibler l'img du lightbox container
        let imgUrl = getImageUrl(index)
            //Changer la source de mon image par la source de mon image précédente
        image.src = imgUrl
    })
};

//--------------------------------------------------------------------------------------//
//                 Passer à l'image suivant au click du bouton suivant                  //
//--------------------------------------------------------------------------------------//

let nextLightbox = function() {
    next.addEventListener("click", function(){
        // ---- On affiche l'image suivante ----------------------------------------------------
        index ++
        imgTotal = document.querySelectorAll('#gallerie img')
        console.log(index)
        console.log(imgTotal)
        // si index > nombreTotal d'image
        if (index == imgTotal.length) {
            // index = 0
            index = 0
        }
        let imgSrc = getImageUrl(index)
        image.src = imgSrc
    })
};

//--------------------------------------------------------------------------------------//
//                     Fonction de recherche des sources des médias                     //
//--------------------------------------------------------------------------------------//

let getImageUrl = function(index) {
    allMedia = photoGallerie
    let media = allMedia[index];
    console.log(index)
    return media.querySelector("img").src;
};

//--------------------------------------------------------------------------------------//
//                   Appel de la fonction d'ouverture de la lightbox                    //
//--------------------------------------------------------------------------------------//
 openLightboxFormation();
 openLightboxPartenaire();
 openLightboxLegale();
 openLightboxPhoto();