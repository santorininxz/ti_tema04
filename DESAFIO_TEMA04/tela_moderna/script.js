// Função para exibir o modal com informações do produto
function showModal(originalPrice, productName) {
    // Obter elementos do DOM pelo ID
    const modal = document.getElementById('myModal');
    const discountMessage = document.getElementById('discountMessage');
    const discountSelect = document.getElementById('discountSelect');
    const finalPrice = document.getElementById('finalPrice');

    // Atualizar mensagem do modal com o nome do produto
    discountMessage.textContent = `Você pode aplicar um desconto no produto ${productName}.`;

    // Reiniciar o select para a opção padrão (Sem desconto)
    discountSelect.value = '0';

    // Exibir o modal
    modal.style.display = 'block';

    // Atualizar preço final ao alterar o desconto
    discountSelect.addEventListener('change', function () {
        updateFinalPrice(originalPrice, parseInt(discountSelect.value));
    });

    // Atualizar preço final ao abrir o modal
    updateFinalPrice(originalPrice, parseInt(discountSelect.value));
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Função para atualizar o preço final com base no desconto escolhido
function updateFinalPrice(originalPrice, discount) {
    const finalPrice = document.getElementById('finalPrice');
    const discountedPrice = /*elaborar fórmula contendo variáveis originalPrice e discount*/
    finalPrice.textContent = `Preço Final: R$ ${discountedPrice.toFixed(2)}`;
}

// Função para aplicar o desconto e fechar o modal
function applyDiscount() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Fechar o modal se clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
