// Aguarda o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {

    // Pega todos os cards de pontos turísticos
    const cards = document.querySelectorAll('.card');

    // Para cada card, adiciona evento de toque/click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega o título e a imagem do card
            const title = card.querySelector('h3').innerText;
            const imgSrc = card.querySelector('img').src;

            // Cria o modal dinamicamente
            showModal(title, imgSrc);
        });
    });

});

// Função para criar e exibir o modal
function showModal(title, imgSrc) {
    // Cria o elemento de fundo do modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modal-overlay';
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = 0;
    modalOverlay.style.left = 0;
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.zIndex = '9999';

    // Cria a caixa do modal
    const modalBox = document.createElement('div');
    modalBox.style.backgroundColor = '#fff';
    modalBox.style.padding = '1rem';
    modalBox.style.borderRadius = '10px';
    modalBox.style.maxWidth = '80%';
    modalBox.style.maxHeight = '80%';
    modalBox.style.overflowY = 'auto';
    modalBox.style.textAlign = 'center';

    // Conteúdo do modal
    modalBox.innerHTML = `
    <h2>${title}</h2>
    <img src="${imgSrc}" style="width:100%; height:auto; margin-bottom:1rem;" />
    <p>Descrição do ponto turístico em breve...</p>
    <button id="close-modal" style="padding:0.5rem 1rem; background-color:#004d40; color:#fff; border:none; border-radius:5px; cursor:pointer;">Fechar</button>
  `;

    // Adiciona o modalBox no overlay
    modalOverlay.appendChild(modalBox);

    // Adiciona o overlay no body
    document.body.appendChild(modalOverlay);

    // Fecha o modal ao clicar no botão fechar
    document.getElementById('close-modal').addEventListener('click', () => {
        modalOverlay.remove();
    });

    // Também fecha o modal ao tocar fora da caixa
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
}
