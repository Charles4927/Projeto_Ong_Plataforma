document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");
  const themeLink = document.getElementById("theme-style");

  // Aplica o tema salvo no localStorage (se houver)
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    themeLink.href = `css/style-${savedTheme}.css`;
    themeSelect.value = savedTheme;
  }

  themeSelect.addEventListener("change", function () {
    const selected = themeSelect.value;
    themeLink.href = `css/style-${selected}.css`;
    localStorage.setItem("selectedTheme", selected);
  });
});