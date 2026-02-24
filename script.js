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

/* =========================
   LÓGICA DA CALCULADORA
========================= */

const display = document.getElementById('calc-display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval() resolve a string matemática; em projetos reais maiores, 
        // recomenda-se uma biblioteca de parsing por segurança.
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}