const scriptURL = 'https://script.google.com/macros/s/AKfycbx4Z4TRWnH_S1lK9eBRcsf0wD9TWnRqvQmFfJXln9hawxs1d7uX/exec';
const form = document.forms["formulario"];

function todayDate(){
	return new Date().toJSON().slice(0,10);
};

function succesMessage(type,msj){
	var mensaje = document.querySelector("#resultado");

	if(type){
		mensaje.className = "exito";
		mensaje.innerHTML = "<p>Se agrego un nuevo gasto</p>";
		clean();
	}else{
		mensaje.className = "error";
		mensaje.innerHTML = "<p>Error, ver en consola</p>";
		console.log(msj);
	}
}

function clean(){
	document.querySelector("#motivo").value = "";
	document.querySelector("#monto").value = "";
	var mensaje = document.querySelector("#resultado");
	setTimeout(function(){ mensaje.innerHTML = "<p></p>" }, 3000);
}

document.querySelector("#calendario").value = todayDate();

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => succesMessage(true,"exito"))
      .catch(error => succesMessage(false, error.message))
});


var botonGasto = document.querySelector("#gasto");
var monto = document.querySelector("#monto");

botonGasto.addEventListener("click", function(e){
		e.preventDefault();
		monto.value = monto.value * -1;
});