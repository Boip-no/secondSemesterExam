var confirm = false;

function validateForm() {
	//variables
	var success = true;

	var firstNameElement = document.getElementById("yourName").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	var nameError = document.getElementById("nameError");
	var emailError = document.getElementById("emailError");
	var messageError = document.getElementById("messageError");

	//RegEx
	var emailRGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	//validation of the form
	if(firstName == "") {
		nameError.style.display = "block";
		success = false;
	} else {
		nameError.style.display = "none";
	}

	if(emailRGEX.test(email) == false) {
		emailError.style.display = "block";
		success = false;
	} else {
		emailError.style.display = "none";
	}

	if(comment.length>250) {
		commentError.style.display = "block";
		success = false;
	} else {
		commentError.style.display = "none";
	}

	confirm = success;
}
//validateForm();

function submitMessage() {
	validateForm();
	if (confirm) {
		alert("The contact form is filled out correctly. Do you want to submit?");
		txt = "Question sent";
	} else {
		txt = "You pressed cancel - question not sent"
	}
	document.getElementById("confTxt").innerHTML = txt;
}
//submitMessage();

document.getElementById("messageSend").addEventListener("click", function(){
	validateForm();
})
console.log();
// function for the textarea
function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}
