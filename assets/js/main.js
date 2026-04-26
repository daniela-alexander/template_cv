let botones = document.querySelectorAll('.boton_info');
let infoContainers = document.querySelectorAll('.info-container');

botones.forEach(function(botonInfo) {
    botonInfo.addEventListener('click', function(){
        const target = botonInfo.getAttribute("data-target");
        const info = document.getElementById(target);
        infoContainers.forEach(function(container){
            container.classList.add('hidden');
        })
        info.classList.remove('hidden');

        botones.forEach(function(boton) {
            boton.classList.remove('active');
        })
        botonInfo.classList.add('active');

    })
})

