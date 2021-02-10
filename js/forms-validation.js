function validar() {
    var msg_error;
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confPassword = document.getElementById("confPassword").value

    if(name.length < 2 || name.length > 99) {
        document.getElementById("name").focus();
        msg_error = 'O campo "Nome" precisa conter um valor entre 2 e 99 caracteres'
    } else if(email.length < 2 || name.length > 99) {
        document.getElementById("email").focus();
        msg_error = 'O campo "Email" precisa conter um valor entre 2 e 99 caracteres'
    } else if(password.length < 6 || password.length > 16) {
        document.getElementById('password').focus();
        msg_error = 'O campo "Senha" precisa conter um valor mínimo de 6 caracteres e um valor máximo de 16 caracteres';
    } else if(confPassword.length < 6 || confPassword.length > 16) {
        document.getElementById('confPassword').focus();
        msg_error = 'O campo "Confirme sua senha" precisa conter um valor mínimo de 6 caracteres e um valor máximo de 16 caracteres';
    } else if(password != confPassword) {
        document.getElementById('confPassword').focus();
        msg_error = 'As senhas não coincidem!';
    } else {
        msg_error = 'No momento a plataforma não contém um suporte de cadastro válido onde o mesmo está em desenvolvimento.'
    }

    if(!msg_error == '') {
        var error = document.querySelector(".error")
        error.classList.add("error-showme")
        error.innerHTML = msg_error;
    }
}