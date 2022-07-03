const checkSim = document.querySelector("#sim");
const botao = document.querySelector(".botao");

sim.addEventListener("change", () => {
  if (sim.checked) {
    botao.removeAttribute("disabled");
  }
});

/* função de comparar as senhas */
function compararSenhas(){
    if(document.querySelector('#senha').value != document.querySelector('#repetirSenha').value){
        document.querySelector("#repetirSenha").setCustomValidity("was-validated");
    }else{
        document.querySelector('#repetirSenha').setCustomValidity("");
    }
}

compararSenhas()

