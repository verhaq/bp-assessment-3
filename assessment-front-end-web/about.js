console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Good job! The form has been submitted successfully.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);




let pic = document.querySelector('#catPic');
pic.addEventListener('mouseover', () =>
alert("Meow. Thanks for the pets. You look purr-ific!"))