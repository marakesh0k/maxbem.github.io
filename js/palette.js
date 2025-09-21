document.getElementById("bgColor").addEventListener("input", function () {
  document.documentElement.style.setProperty("--bg-color", this.value);
});

document.getElementById("textColor").addEventListener("input", function () {
  document.documentElement.style.setProperty("--text-color", this.value);
});

document.getElementById("accentColor").addEventListener("input", function () {
  document.documentElement.style.setProperty("--accent-color", this.value);
});
