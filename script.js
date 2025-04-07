// Função para abrir o popup
function abrirPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  // Função para fechar o popup
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Evento de clique no botão
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Clique').addEventListener('click', abrirPopup);
  });
  