document.getElementById("cnpjForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const cnpj = document.getElementById("cnpjInput").value.replace(/\D/g, "");
  const resultDiv = document.getElementById("result");
  const historyList = document.getElementById("history");

  if (cnpj.length !== 14) {
    resultDiv.textContent = "❌ CNPJ inválido. Deve ter 14 dígitos.";
    return;
  }

  // Simulação de resposta
  const simulatedResult = simulateValidation(cnpj);

  resultDiv.innerHTML = `<p>CNPJ ${cnpj}: <strong>${simulatedResult}</strong></p>`;

  const li = document.createElement("li");
  li.textContent = `CNPJ ${cnpj}: ${simulatedResult}`;
  historyList.prepend(li);
});

// Função simulada — substituir por lógica real depois
function simulateValidation(cnpj) {
  const knownCNPJs = ["28193908000188", "62955505003263"];
  return knownCNPJs.includes(cnpj) ? "✅ Já cadastrado" : "❌ Não encontrado";
}
