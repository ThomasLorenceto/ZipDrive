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