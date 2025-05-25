let currentIndex = 0;

function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  const containerWidth = carousel.offsetWidth;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= images.length) currentIndex = images.length - 1;

  const targetImage = images[currentIndex];
  const imageCenter = targetImage.offsetLeft + (targetImage.offsetWidth / 2);
  const scrollTo = imageCenter - (containerWidth / 2);

  carousel.scrollTo({ left: scrollTo, behavior: 'smooth' });
}

// Abrir imagem em tela cheia
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', () => {
      const fullscreen = document.getElementById('fullscreenOverlay');
      const fullscreenImage = document.getElementById('fullscreenImage');
      fullscreenImage.src = img.src;
      fullscreen.style.display = 'flex';
    });
  });
});

function closeFullscreen() {
  document.getElementById('fullscreenOverlay').style.display = 'none';
}
function abrirSeletorDeArquivo() {
  document.getElementById('fileInput').click();
}

// Se quiser fazer algo com o arquivo selecionado
document.getElementById('fileInput').addEventListener('change', function () {
  const arquivo = this.files[0];
  if (arquivo) {
    console.log('Arquivo selecionado:', arquivo.name);
    // Aqui você pode enviar o arquivo para o servidor, exibir preview, etc.
  }
});