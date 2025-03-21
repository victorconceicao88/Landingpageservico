document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  const formData = new FormData(this); // Coleta os dados do formulário
  
  // Exibe a mensagem de "Enviando..." antes de enviar
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'block'; // Torna a mensagem visível

  // Envia os dados para o Google Apps Script via fetch
  fetch('https://script.google.com/macros/s/AKfycbzCE3sp75VsjQA2GK4HMgRAbSwWG4p6JVEypuHHOBKPwkZsQb12kg5NOGZtNezp4741QA/exec', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    if (data.result === 'Success') {
      // Após o envio bem-sucedido, resetamos o formulário
      this.reset(); // Reseta o formulário

      // Exibe a barra de sucesso
      const successBar = document.getElementById('success-bar');
      successBar.style.display = 'block'; // Torna a barra visível
      successBar.style.backgroundColor = '#d4edda'; // Fundo verde claro
      successBar.style.color = '#155724'; // Texto verde escuro
      successBar.textContent = "Mensagem enviada com sucesso! Entraremos em contacto em breve."; // Mensagem de sucesso

      // Esconde a barra de sucesso após 5 segundos
      setTimeout(() => {
        successBar.style.display = 'none';
      }, 5000);
    } else {
      // Caso não seja sucesso, exibe um erro
      alert('Houve um erro ao enviar sua mensagem. Tente novamente.');
    }
  })
  .catch(error => {
    console.error('Erro ao enviar o formulário:', error);
    alert('Houve um erro ao enviar a sua mensagem. Tente novamente mais tarde.');
  })
  .finally(() => {
    // Após o envio (bem-sucedido ou com erro), escondemos a mensagem de "Enviando..."
    loadingIndicator.style.display = 'none'; // Esconde a mensagem "Enviando..."
  });
});
