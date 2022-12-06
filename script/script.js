function cadastrarUsuario() {
    var nome = document.getElementById('nomeuser').value;
    var cpf = document.getElementById('cpfuser').value;
    var municipio = document.getElementById('cityuser').value;
    var senha = document.getElementById('password').value;

    if (nome != '' && municipio != '' && senha != '') {

        if (cpf.lengt != 11) {
            alert('CPF Inválido');
        } else {
            localStorage.setItem("nome", nome);
            localStorage.setItem("cpf", cpf);
            localStorage.setItem("municipio", municipio);
            localStorage.setItem("senha", senha);

            window.location.href = 'login.html';
        }

    } else {
        alert('Preencha todos os campos corretamente!')
    }


}

function verificarLogin() {
    var cpf = document.getElementById('cpfuser').value;
    var senha = document.getElementById('password').value;

    var cpfSalvo = localStorage.getItem('cpf');
    var senhaSalva = localStorage.getItem('senha');

    if (cpf == cpfSalvo && senha == senhaSalva) {
        alert('Deu bom')
    } else {
        alert('Nome ou Senha inválidos')
    }
}

function redefinirSenha() {
    var cpf = document.getElementById('cpfuser').value;
    var novaSenha = document.getElementById('password').value;

    var cpfSalvo = localStorage.getItem('cpf');

    if (cpf == cpfSalvo) {
        alert('Senha Alterada com Sucesso!')
        localStorage.setItem("senha", novaSenha);
        window.location.href = 'login.html';
    } else {
        alert('CPF Inválido!')
    }
}