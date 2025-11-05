document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-cadastro");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos corretamente.");
    }
  });

  // Máscara para CPF
  const cpfInput = document.getElementById("cpf");
  cpfInput.addEventListener("input", function () {
    let value = cpfInput.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpfInput.value = value;
  });

  // Máscara para telefone
  const telInput = document.getElementById("telefone");
  telInput.addEventListener("input", function () {
    let value = telInput.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    telInput.value = value;
  });
});