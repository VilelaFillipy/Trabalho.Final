/*
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const forgotPasswordLink = document.querySelector('#forgot-password-link');


form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (validatePassword(password.value)) {
		alert('Login realizado com sucesso!');
	} else {
		alert('Senha incorreta!');
	}
});

/*
forgotPasswordLink.addEventListener('click', function(event) {
	event.preventDefault();
	alert('Enviamos um e-mail para recuperar sua senha!');
});


function validatePassword(password) {
	// Implemente aqui sua validação de senha. Exemplo:
	const MIN_PASSWORD_LENGTH = 8;
	if (password.length < MIN_PASSWORD_LENGTH) {
		return false;
	} else {
		return true;
	}
}
*/

function validateUserAndPassword() {
	// Obter o valor dos campos de nome de usuário e senha
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Verificar se o nome de usuário e a senha estão corretos (use a lógica que você quiser)
	if (username === "admin" && password === "admin") {
		// Redirecionar para a página desejada
		window.location.href = "pagpersonal.html";
		return false;
	} else {
		// Se o nome de usuário e/ou senha estiverem incorretos, exiba uma mensagem de erro
		alert("Nome de usuário e/ou senha incorretos. Tente novamente.");
		return false;
	}
}