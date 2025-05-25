setTimeout(() => {
      document.body.classList.add('fade-out'); // Adiciona classe que aplica a transição

      // Aguarda 1s (tempo da transição) antes de redirecionar
      setTimeout(() => {
        window.location.href = "entrar.html"; // Página de destino
      }, 1000);
    }, 3000);