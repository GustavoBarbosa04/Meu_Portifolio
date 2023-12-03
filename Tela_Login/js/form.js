const formulario = document.querySelector("form")

function FormEnviando(resposta) {
  if(resposta.ok){
    formulario.innerHTML = "<p>resposta enviada, entraremos em contato em breve.</p>"
  } else {
    formulario.innerHTML = "<p>Erro no Envio</p>"
  }
}

function enviarForm(event) {
  event.preventDefaulf()
  const botao = document.querySelector("form button")
  botao.disabled = true 
  botao.innerHTML = "ENVIANDO...."
  
  
  const data = new FormData(formulario)
  fetch("./enviar.php", {
    method: "POST",
    body: data
  }), then(FormEnviando)
}


formulario.addEventListener("submit", enviarForm)



