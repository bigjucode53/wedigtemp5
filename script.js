let offres = document.querySelectorAll('.child_nos_offres');
console.log('script.js charge');
offres.forEach((offre) => {
    offre.addEventListener('click', () => {
        if (offre.classList[1] == 'active'){
            offre.classList.remove('active');
        }
        else {
            offres.forEach((offre) => {
                offre.classList.remove('active');
            })
            offre.classList.add("active");
        }                
    })
});
let offres_supp = document.querySelectorAll('.child_nos_offres_supp');

offres_supp.forEach((offre_sup) => {
    offre_sup.addEventListener('click', () => {
        if (offre_sup.classList[1] == 'active'){
            offre_sup.classList.remove('active');
        }
        else {
            offres_supp.forEach((offre_supp) => {
                offre_supp.classList.remove('active');
            })
            offre_sup.classList.add("active");
        }                
    })
});

const burger_menu = document.getElementById('burger_menu');
const header_first_list = document.getElementById('header_first_list');

burger_menu.addEventListener('click', () => {
    header_first_list.classList.toggle('active');
    burger_menu.classList.toggle('active');
    if (header_first_list.classList[0] == 'active') {
        header.classList.add('header_active_white');
    }
    else {
        header.classList.remove('header_active_white');
    }
})

const nav_before = document.getElementById('span_before');
const nav_after = document.getElementById('span_after');

let child_card_opac = document.querySelectorAll('.child_card_opac');
let valeur_depart = 0;
let resp = 2;

if (window.matchMedia("(min-width: 1368px)").matches) {
    resp = 4;
}

nav_before.addEventListener('click', () => {
    nav_after.style.filter = "brightness(1)";
    if (valeur_depart < 0) {
        valeur_depart = 330 + valeur_depart;

        child_card_opac.forEach((element) => {
            
            element.style.translate = valeur_depart + "px";
            let test = element.style.translate;

        });
        return valeur_depart;
    }
    else {
        nav_before.style.filter = "brightness(0.5)";
    }
})

nav_after.addEventListener('click', () => {
    nav_before.style.filter = "brightness(1)";
    if (valeur_depart > ("-" + child_card_opac.length * 330) / resp - 300) {
        valeur_depart =  valeur_depart - 330;

        child_card_opac.forEach((element) => {
            
            element.style.translate = valeur_depart + "px";
            let test = element.style.translate;

        });
        return valeur_depart;
    }
    else {
        nav_after.style.filter = "brightness(0.5)";
    }
});

let header = document.getElementById('header');

window.addEventListener('scroll', function(e) {
    if (window.scrollY != 0) {
        header.classList.add('header_active');
    }
    else {
        header.classList.remove('header_active');
    }
});

