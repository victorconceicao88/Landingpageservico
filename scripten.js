document.addEventListener('DOMContentLoaded', function() {
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
        const successBar = document.getElementById('success-bar');
  
        if (data.result === 'Success') {
          // Após o envio bem-sucedido, resetamos o formulário
          this.reset(); // Reseta o formulário
  
          // Exibe a barra de sucesso
          successBar.style.display = 'block'; // Torna a barra visível
          successBar.style.backgroundColor = '#d4edda'; // Fundo verde claro
          successBar.style.color = '#155724'; // Texto verde escuro
          successBar.textContent = "Mensagem enviada com sucesso! Entraremos em contacto em breve."; // Mensagem de sucesso
  
          // Esconde a barra de sucesso após 5 segundos
          setTimeout(() => successBar.style.display = 'none', 5000);
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
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    // Definindo o texto completo
    const fullText = "We offer high-quality services at affordable prices, especially for those who are starting and want to elevate their business. We use advanced techniques to improve your business's online visibility, ensuring that more people find your products or services when searching on the internet. We help your business grow and stand out in the market, without large investments.";
  
    const shortTextElement = document.getElementById("short-text");
    const loadMoreButton = document.getElementById("loadMore");
  
    // Mostra o botão "Leia mais" quando a seção estiver visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadMoreButton.style.display = 'inline-block'; // Torna o botão "Leia mais" visível
        }
      });
    });
  
    // Observando o elemento com o texto
    observer.observe(shortTextElement);
  
    // Evento de clique no botão "Leia mais"
    loadMoreButton.addEventListener('click', () => {
      shortTextElement.textContent = fullText; // Substitui o texto curto pelo completo
      loadMoreButton.style.display = 'none'; // Esconde o botão após mostrar o texto completo
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // O título real que deve aparecer
    const realTitle = "Soluções de Desenvolvimento a Preços Acessíveis";
  
    const titleElement = document.getElementById("lazy-title");
  
    // Usando IntersectionObserver para detectar quando o título se tornar visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          titleElement.textContent = realTitle; // Substitui o texto temporário pelo título real
          observer.disconnect(); // Desconecta o observer após a mudança
        }
      });
    });
  
    // Observando o título
    observer.observe(titleElement);
  });

  function changeLanguage(event) {
    const language = event.target.value;
    if(language === 'en') {
      window.location.href = 'indexen.html'; // Já está na versão em inglês
    } else {
      window.location.href = 'index.html'; // Redireciona para a versão em português
    }
  }
  
  