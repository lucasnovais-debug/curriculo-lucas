// Botão mostrar/ocultar informações extras
function toggleInfo() {
    const extraInfo = document.getElementById("extraInfo");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
}

// Menu que muda de cor ao rolar
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Validação simples do formulário
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return false; // Para não enviar de verdade
}
// Alternar tema claro e escuro
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Trocar ícone
    if (document.body.classList.contains("dark")) {
        toggleTheme.classList.remove("fa-moon");
        toggleTheme.classList.add("fa-sun");
    } else {
        toggleTheme.classList.remove("fa-sun");
        toggleTheme.classList.add("fa-moon");
    }
});
