var cuerpoweb = document.body;

// Obtengo el valor actual de la key 'modo' en localStorage.
var modocolor = localStorage.getItem("modo");

//Cargo el modo actual.
function cargarModo() {    
 
    if (modocolor === "oscuro") {               
        theme('#394551','#191D21','#394551','#394551','white','black','#9895B1','#9895B1','black',
        'white','white','white','white','#BBC0C4','black','oscuro');
    } else {
        theme('white','#BED8D4','#8EA09D','#FFEDE1','white','#817E9F','#9895B1','white','white',
        '#8EA09D','#AFCC99','#BED8D4','black','394551','1F1F1F','claro');
    }
}

function theme(backHeader, back, backProj, backForm, backInput, btnForm, btnFormHover, btnLetter, 
    btnLetterHover, lettersNavHover, borderNav, borderNavHover, titles, font, boxShadow,modo){
    
    document.documentElement.style.setProperty('--background-header-color', backHeader);
    document.documentElement.style.setProperty('--background-color', back);
    document.documentElement.style.setProperty('--background-project-color', backProj);
    document.documentElement.style.setProperty('--background-form-color', backForm);
    document.documentElement.style.setProperty('--background-input-color', backInput);
    document.documentElement.style.setProperty('--button-form-color', btnForm);
    document.documentElement.style.setProperty('--button-form-color-hover', btnFormHover);
    document.documentElement.style.setProperty('--button-letter-color', btnLetter);
    document.documentElement.style.setProperty('--button-letter-color-hover', btnLetterHover);
    document.documentElement.style.setProperty('--letters-nav-color-hover', lettersNavHover);
    document.documentElement.style.setProperty('--border-nav-color', borderNav);
    document.documentElement.style.setProperty('--border-nav-color-hover', borderNavHover);
    document.documentElement.style.setProperty('--titles-color', titles);
    document.documentElement.style.setProperty('--font-color', font);
    document.documentElement.style.setProperty('--box-shadow-color', boxShadow);

    localStorage.setItem("modo", modo);
}