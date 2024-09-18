/* função para rolar ate a seção de orçamentos */
function scrollToOrcamento() {
    var orcamentoSection = document.getElementById('form');
    orcamentoSection.scrollIntoView({ behavior: 'smooth' });
}

/* função para rolar ate a seção de prjetos */
function scrollToOrcamento() {
    var orcamentoSection = document.getElementById('projects');
    orcamentoSection.scrollIntoView({ behavior: 'smooth' });
}

/* função para rolar ate a seção de Contatos */
function scrollToOrcamento() {
    var orcamentoSection = document.getElementById('contatos');
    orcamentoSection.scrollIntoView({ behavior: 'smooth' });
}

       // Enviar os dados via fetch para o backend
       fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            primeiro_nome: primeiroNome,
            ultimo_nome: ultimoNome,
            email: email,
            telefone: telefone
        }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });

//enviando mensagem para o wpp
const enviarPedidoBtn = document.getElementById("btn2");
enviarPedidoBtn.addEventListener("click", () => {
  // Captura dos dados do formulário
  const ajuda = document.getElementById('ajuda').value;
  const mensagem = document.getElementById('msg').value;

  // Monta a mensagem para o WhatsApp
  const mensagemWhatsApp = `Solicitação de ajuda: ${ajuda}. Mensagem: ${mensagem}`;
  
  // Número de telefone para o WhatsApp (formato internacional)
  const numeroWhatsApp = "5511948391523"; // Substitua pelo seu número de WhatsApp
  
  // Cria a URL para abrir no WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
  
  // Abre a janela do WhatsApp com a mensagem
  window.open(urlWhatsApp, "_blank");
});