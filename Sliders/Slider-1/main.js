let slider = document.querySelector("#slider");

let imagenes = slider.querySelectorAll("img");
let index = 0; //enpesamos en la img 1

// Intervalo de tiempo para que las img canvien 2000 = 2s
setInterval( function () {
  let porcentaje = index * -100;
  //la iamgen se movera hacia la izquierda
  slider.style.transform = "translateX(" + porcentaje + "%)";
  index++;
  //si el contador es mayor que el # de img reiniciamos en contador
  if(index >= imagenes.length){
    index = 0;
  }
},2000);