document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleLink = document.getElementById("toggle-form");
    const toggleBackLink = document.getElementById("toggle-form-back");
  
    // Função para alternar entre formulário de login e registro
    function toggleForms() {
      loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
      registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
    }
  
    // Evento de clique no link "Registrar-se"
    toggleLink.addEventListener("click", function(event) {
      event.preventDefault();
      toggleForms();
    });
  
    // Evento de clique no link "Login" (quando no formulário de registro)
    toggleBackLink.addEventListener("click", function(event) {
      event.preventDefault();
      toggleForms();
    });
  });