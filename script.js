// Modo dark 
const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Verifica se o modo selecionado está armazenado em localStorage
    const savedMode = localStorage.getItem('mode');

    // Se o modo estiver armazenado, aplica-o
    if (savedMode === 'dark-mode') {
        body.classList.add('dark-mode'); // Adiciona a classe do modo salvo ao body
        darkModeToggle.checked = true; // Marca o checkbox
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Armazena o novo modo em localStorage
        const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        localStorage.setItem('mode', currentMode);
    });

// Fim do Modo dark 
    

// Botão de scroll top
function scrollToTop() {
  window.scrollTo({
      top: 0,
  });
}

window.addEventListener('scroll', function () {
  var scrollTopButton = document.querySelector('.scroll-top');
  if (this.window.pageYOffset > 200) {
      scrollTopButton.style.display = 'block';
  } else {
      scrollTopButton.style.display = 'none';
  }
});

// Fim do Botão de scroll top
