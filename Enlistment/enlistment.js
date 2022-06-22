var button = window.document.getElementById('container-form-li-botao');

function validar() {
    let error = window.document.getElementById('msg');

    if(error.style.display === "block") {
        error.style.display = "none";
    } else {
        error.style.display = "block"
    }

    let nome = formulario.nome;
    let cpf = formulario.cpf;
    let email = formulario.email;
    let telefone = formulario.telefone;
    let dataNascimento = formulario.dataNascimento;
    let genero = formulario.genero;
    let textarea = formulario.textarea;

    if (nome.value == "") {
        error.innerHTML = `ERRO - INSIRA SEU NOME!`;
        nome.focus();
    } else if (cpf.value == "") {
        error.innerHTML = `ERRO - INSIRA SEU CPF!`;
        cpf.focus();
    } else if (email.value == "") {
        error.innerHTML = `ERRO - INSIRA SEU EMAIL!`;
        email.focus();
    } else if (telefone.value == "") {
        error.innerHTML = `ERRO - INSIRA SEU TELEFONE!`;
        telefone.focus();
    } else if (dataNascimento.value == "") {
        error.innerHTML = `ERRO - INSIRA A SUA DATA DE NASCIMENTO!`;
        telefone.focus();
    } else if (genero.value == "") {
        error.innerHTML = `ERRO - INSIRA SEU GENERO!`;
        telefone.focus();
    } else if (textarea.value == "") {
        error.innerHTML = `ERRO - INSIRA O MOTIVO PARA SERVIR O EXÉRCITO!`;
        textarea.focus();
    } else {
        error.innerHTML = `ENVIADO COM ÊXITO!`;
        error.style.backgroundColor = "#31FF4E";
        error.style.display = "block";
    }
    
}

