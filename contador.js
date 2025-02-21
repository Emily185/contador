let contador = 0;

let valor = document.getElementById("valor");
let btnIncrementar = document.getElementById("incrementar");
let btnDecrementar = document.getElementById("decrementar");
let btnResetear = document.getElementById("resetear");

btnIncrementar.onclick = function () {
  contador++;

  valor.innerHTML = contador;
};

btnDecrementar.onclick = function () {
  contador--;

  valor.innerHTML = contador;
};

btnResetear.onclick = function () {
  contador = 0;
  valor.innerHTML = contador;
};
