var cuerpoweb = document.body;

// Obtengo el valor actual de la key 'modo' en localStorage.
var modocolor = localStorage.getItem("modo");

//Cargo el modo actual.
function cargarModo() {    
 
    if (modocolor === "oscuro") {               
        //document.documentElement.style.setProperty('--background-container-clear', 'black');
        modoOscuro();
    } else {
        //document.documentElement.style.setProperty('--background-container-clear', 'white');
        modoClaro();
    }
 
}

function modoClaro(){
    document.documentElement.style.setProperty('--background-header-color', 'white');
    document.documentElement.style.setProperty('--background-color', '#BED8D4');
    document.documentElement.style.setProperty('--background-project-color', '#8EA09D');
    document.documentElement.style.setProperty('--background-form-color', '#FFEDE1');
    document.documentElement.style.setProperty('--background-input-color', 'white');
    document.documentElement.style.setProperty('--button-form-color', ' #817E9F');
    document.documentElement.style.setProperty('--button-form-color-hover', '#9895B1');
    document.documentElement.style.setProperty('--button-letter-color', 'white');
    document.documentElement.style.setProperty('--button-letter-color-hover', 'white');
    document.documentElement.style.setProperty('--letters-nav-color-hover', '#8EA09D');
    document.documentElement.style.setProperty('--border-nav-color', '#AFCC99');
    document.documentElement.style.setProperty('--border-nav-color-hover', '#BED8D4');
    document.documentElement.style.setProperty('--titles-color', 'black');
    document.documentElement.style.setProperty('--font-color', '#394551');
    document.documentElement.style.setProperty('--box-shadow-color', '#1F1F1F');
    //document.documentElement.style.setProperty('--font-color', '#BED8D4');
   // document.documentElement.style.setProperty('--font-color', '#BED8D4');

    localStorage.setItem("modo", "claro");
}

function modoOscuro(){
    document.documentElement.style.setProperty('--background-header-color', '#394551');
    document.documentElement.style.setProperty('--background-color', '#191D21');
    document.documentElement.style.setProperty('--background-project-color', '#394551');
    document.documentElement.style.setProperty('--background-form-color', '#394551');
    document.documentElement.style.setProperty('--background-input-color', 'white');
    document.documentElement.style.setProperty('--button-form-color', ' black');
    document.documentElement.style.setProperty('--button-form-color-hover', '#9895B1');
    document.documentElement.style.setProperty('--button-letter-color', '#9895B1');
    document.documentElement.style.setProperty('--button-letter-color-hover', 'black');
    document.documentElement.style.setProperty('--letters-nav-color-hover', 'white');
    document.documentElement.style.setProperty('--border-nav-color', 'white');
    document.documentElement.style.setProperty('--border-nav-color-hover', 'white');
    document.documentElement.style.setProperty('--titles-color', 'white');
    document.documentElement.style.setProperty('--font-color', '#BBC0C4');
    document.documentElement.style.setProperty('--box-shadow-color', 'black');
    //document.documentElement.style.setProperty('--font-color', '#BED8D4');
   // document.documentElement.style.setProperty('--font-color', '#BED8D4');

    localStorage.setItem("modo", "oscuro");
}