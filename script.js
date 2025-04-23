const botao = document.getElementById('mostrarMensagem');
const mensagem = document.getElementById('mensagem');

function mostrarMensagem(event) {
  event.stopPropagation();
  mensagem.innerText = "✨ Continue aprendendo, criando e acreditando! O mundo precisa do seu código! 💻🚀";
  mensagem.classList.add('mostrar');
}

document.addEventListener('click', (event) => {
  if (!botao.contains(event.target)) {
    mensagem.classList.remove('mostrar');
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 500); // espera o fade-out terminar
  }
});

botao.addEventListener('click', () => {
  mensagem.style.display = 'block';
  mostrarMensagem(event);
});
