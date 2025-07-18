document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("demoText").textContent = "Текст изменён!";
});

document.getElementById("greetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // отменяем перезагрузку
  const name = document.getElementById("nameInput").value;
  document.getElementById("greetingText").textContent = `Привет, ${name}!`;
});
