document.addEventListener("DOMContentLoaded", () => {
    const botoesFiltro = document.querySelectorAll(".btn-filtro");
    const cards = document.querySelectorAll(".card");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", () => {
            // Remove a classe ativa de todos os botões e adiciona ao clicado
            botoesFiltro.forEach(btn => btn.classList.remove("active"));
            botao.classList.add("active");

            const categoriaSelecionada = botao.getAttribute("data-categoria");

            cards.forEach(card => {
                const categoriaCard = card.getAttribute("data-categoria");

                // Lógica de exibição com transição suave
                if (categoriaSelecionada === "todos" || categoriaSelecionada === categoriaCard) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // Tempo correspondente à animação
                }
            });
        });
    });
});
