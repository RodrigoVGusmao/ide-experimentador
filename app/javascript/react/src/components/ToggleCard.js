document.addEventListener('DOMContentLoaded', function() {
    // Pegar as classes do toggle switch e do botão play
    var toggleSwitch = document.querySelector('.toggle-switch');
    var playButton = document.querySelector('.play-button');

    // Adicionar event listener de click para o toggle switch
    toggleSwitch.addEventListener('click', function() {
      // Atribuir classe ativada para o toggle switch (o card está ativado)
      toggleSwitch.classList.toggle('card-activated');

      // Checar se o switch está no estado ativado
      var isCardActivated = toggleSwitch.classList.contains('card-activated');

      // Condição para ver se o switch tá ativado
      if (isCardActivated) {
        // Mudar a imagem base do toggle switch e do play para ativo
        toggleSwitch.src = '/card-icons/toggle-activated.svg';
        playButton.src = '/card-icons/play.svg';
        // Event listener pro botão play
        playButton.addEventListener('click', function() {
            // Atribuir classe ativada para o botão play (o teste do card tá rodando)
            playButton.classList.toggle('play-activated');
            // Checar se o botão está no estado ativado
            var isPlayActivated = playButton.classList.contains('play-activated');
            // Condição para ver se o botão tá ativado
            if (isPlayActivated) {
                // Mudar a imagem base do play para running
                playButton.src = '/card-icons/running-stop.svg';
            } else {
                // Mudar a imagem base do running para play
                playButton.src = '/card-icons/play.svg';
            }
        });
      } else {
        // Mudar a imagem base do toggle switch e do play para inativo
        toggleSwitch.src = '/card-icons/toggle-right.svg';
        playButton.src = '/card-icons/play-unactivated.svg';
      }
    });
});