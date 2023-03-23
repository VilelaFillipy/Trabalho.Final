const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (username.value === '' || password.value === '') {
		alert('Por favor, preencha todos os campos.');
	} else if (username.value === 'admin' && password.value === '1234') {
		alert('Login bem-sucedido.');
	} else {
		alert('Nome de usuário ou senha incorretos.');
	}
});
