const fotoPerfil = document.getElementById("fotoPerfil");
const inputFoto = document.getElementById("inputFoto");
const fotoPerfilContainer = document.getElementById("fotoPerfilContainer");

// Ao clicar na imagem, abre o seletor de arquivos
fotoPerfilContainer.addEventListener("click", function (e) {
  e.preventDefault(); // Evita comportamento padrão da âncora
  inputFoto.click();
});

// Quando o usuário seleciona uma imagem
inputFoto.addEventListener("change", function () {
  const arquivo = inputFoto.files[0];

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function (e) {
      fotoPerfil.src = e.target.result; // Troca a imagem de perfil
    };

    leitor.readAsDataURL(arquivo); // Lê o arquivo como URL base64
  }
});