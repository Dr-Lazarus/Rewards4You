var data_to_be_sent = {};

document.querySelector("form").addEventListener("submit", (event) => {
	console.log("here")
	event.preventDefault();

	const username = document.querySelector("#username").value;
	const pass = document.querySelector("#password").value;

	if (username && pass) {
		console.log('inside');
		
		data_to_be_sent = {
			"username": "",
			"password": ""
		}
		data_to_be_sent.username = username;
		data_to_be_sent.password = pass;
		
	} else {
		document.querySelector("#username").placeholder = "Enter an username.";
		document.querySelector("#password").placeholder = "Enter a password.";
		document.querySelector("#username").style.backgroundColor = "red";
		document.querySelector("#password").style.backgroundColor = "red";
		document.querySelector("#username").classList.add("white_placeholder");
		document.querySelector("#password").classList.add("white_placeholder");
	}
	console.log(data_to_be_sent);

	$.ajax({
		type: "POST",
		url: "https://reqbin.com/echo/post/json",
		data: JSON.stringify(data_to_be_sent),
		contentType: "application/json",
		success: function (result) {
		  console.log(result);
		},
		error: function (result, status) {
		  console.log(result);
		}
	  });
});




