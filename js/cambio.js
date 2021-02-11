function cambio(aux){
    let slide1 = document.getElementById('slide1');
    let elementStyle = window.getComputedStyle(slide1);
    let opaSlide1 = elementStyle.getPropertyValue('opacity');

    let slide2 = document.getElementById('slide2');

    if(opaSlide1 == 0 && aux == 1){
        slide1.style.cssText = "display: block;";
        slide2.style.cssText = "display: none;";

    } else if(opaSlide1 == 1 && aux == 2){
        slide1.style.cssText = "display: none;";
        slide2.style.cssText = "display: block;";
    }
} 