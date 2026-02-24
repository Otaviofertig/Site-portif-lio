/* =========================
   SCROLL SUAVE ENTRE SEÇÕES
========================= */

// Seleciona todos os links que começam com "#"
// (ou seja, links internos da página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // Adiciona evento de clique para cada link
    anchor.addEventListener("click", function(e) {

        // Impede o comportamento padrão do navegador
        // (que faria o salto seco até a seção)
        e.preventDefault();

        // Pega o valor do href (ex: #sobre)
        // e faz a rolagem suave até a seção correspondente
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});