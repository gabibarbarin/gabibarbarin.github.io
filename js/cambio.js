function cambio(aux){
    let slide1 = document.getElementById('slide1');
    let elementStyle = window.getComputedStyle(slide1);
    let opaSlide1 = elementStyle.getPropertyValue('display');

    let slide2 = document.getElementById('slide2');

    if(opaSlide1 == "none" && aux == 1){
        slide1.style.cssText = "display: block;";
        slide2.style.cssText = "display: none;";

    } else if(opaSlide1 == "block" && aux == 2){
        slide1.style.cssText = "display: none;";
        slide2.style.cssText = "display: block;";
    }
} 