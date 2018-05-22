const scriptURL = 'https://script.google.com/macros/s/AKfycbx4Z4TRWnH_S1lK9eBRcsf0wD9TWnRqvQmFfJXln9hawxs1d7uX/exec';
const form = document.forms["formulario"];

function todayDate(){
	return new Date().toJSON().slice(0,10);
};

document.querySelector("#calendario").value = todayDate();

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
});
