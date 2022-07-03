
// Função do Disabled do botão Login

function DisabledLogin(){

    document.addEventListener('keyup', ()=>{
        if(document.querySelector('#email').value !== "" && document.querySelector('#senha').value !== ""){
            document.querySelector('#butaoLogin').disabled = false
        }else{
            document.querySelector('#butaoLogin').disabled = true;
        }
    })
}

DisabledLogin()