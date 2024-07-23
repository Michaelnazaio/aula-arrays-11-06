let logins = ['luffy']
let senhas = ['gomo']
let tentativasFalhas = []

function avançar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    if(logins.indexOf(login) != -1 && senhas.indexOf(senha) != -1){
        window.location.href = 'about.html'
        //window.open('about.html')
    }
    else{
        alert('Você errou')
        tentativasFalhas.push('LOGIN: '+login+' ')
        tentativasFalhas.push(' SENHA: '+senha+'<br>')
        document.getElementById('lista').innerHTML = tentativasFalhas
        document.getElementById('login').value = null;
        document.getElementById('senha').value = null;
    }

}

function voltar(){
    window.location.href='index.html'
}

function cadastro(){
    novoLogin = document.getElementById('novoLogin').value
    novoSenha = document.getElementById('novoSenha').value
    if(logins.indexOf(novoLogin) == -1 && senhas.indexOf(novoSenha) == -1){
        logins.push(novoLogin)
        senhas.push(novoSenha)
        novoLogin = document.getElementById('novoLogin').value = null
        novoSenha = document.getElementById('novoSenha').value = null
    }else{
        alert('esse login ou senha ja existem')
        novoLogin = document.getElementById('novoLogin').value = null
        novoSenha = document.getElementById('novoSenha').value = null
    }
}