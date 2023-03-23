function validarSenha(event) {
    var senha = document.getElementById('senha').value;
    var confirmar_senha = document.getElementById('confirmar_senha').value;

    if (senha !== confirmar_senha) {
      event.preventDefault();
      document.getElementById('erro_senha').innerHTML = 'As senhas não correspondem';
    }
  }
