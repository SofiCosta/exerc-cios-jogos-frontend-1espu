const botaoCarrinho = document.getElementById("carrinho");

botaoCarrinho.addEventListener("click", function () {

    const produtosSelecionados =
        document.querySelectorAll(
            "#modalPedido .form-check-input:checked"
        );

    if (produtosSelecionados.length === 0) {

        alert("Selecione pelo menos um produto.");

        return;

    }

    alert("Pedido adicionado ao carrinho!");

});