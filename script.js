function sucess(){
    
    let name = document.querySelector('#inputBox').value
    let email = document.querySelector('#email').value
    let horario = document.querySelector('#horario').value
    if(name === ''|| email ==='' || horario === '' ){
        alert('Preencha todos os dados, por favor!')
    }else{
        alert('Cadastro concluído com sucesso!') 
        document.querySelector('#formulario').reset()
    }  
    
}
