//scroll up

document.getElementById("botoninicio").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0,currentScroll - (currentScroll / 10));
        botoninicio.style.transform = "scale(0)";
    }
}

botoninicio = document.getElementById("up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 1300){
        botoninicio.style.transform = "scale(1)";
    }else if(scroll < 800){
        botoninicio.style.transform = "scale(0)";
    }
}
