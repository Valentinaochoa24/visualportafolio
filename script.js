function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
}


function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}


window.onscroll = function(){
    efectohabalidades()
};

function efectohabalidades (){
    var skills = document.getElementById("skills");
    var distancia_skills =window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html"). classList .add("barra-progreso1");
        document.getElementById("js"). classList .add("barra-progreso2");
        document.getElementById("bd"). classList .add("barra-progreso3");
        document.getElementById("ps"). classList .add("barra-progreso4");
    }
}
