let folhasPrimeiroDia = 10; // Valor padrão para folhas no primeiro dia
let variacaoDiaria = 1; // Valor padrão para a variação diária

function atualizarConfiguracoes() {
  let folhasInput = document.getElementById("folhasInput").value;
  let variacaoInput = document.getElementById("variacaoInput").value;

  // Verifica se os campos não estão vazios e são números
  if (folhasInput !== "" && variacaoInput !== "" && !isNaN(folhasInput) && !isNaN(variacaoInput)) {
    folhasPrimeiroDia = parseInt(folhasInput);
    variacaoDiaria = parseInt(variacaoInput);
  } else {
    alert("Por favor, insira valores válidos para folhas no primeiro dia e variação diária.");
  }
}

function calcularFolhasNoDia() {
  atualizarConfiguracoes();

  let diaInput = document.getElementById("diaInput").value;
  let resultadoDia = document.getElementById("resultadoDia");

  if (diaInput !== "" && !isNaN(diaInput)) {
    let dia = parseInt(diaInput);
    let folhasNoDia = folhasPrimeiroDia + (dia - 1) * variacaoDiaria;
    resultadoDia.innerHTML = `No ${dia}º dia, caíram ${folhasNoDia} folhas.`;
    gerarTabela(dia);
  } else {
    resultadoDia.innerHTML = "Por favor, digite um número de dia válido.";
  }
}

function calcularTotalFolhas() {
  atualizarConfiguracoes();

  let diaInput = document.getElementById("diaInput").value;
  let resultadoTotal = document.getElementById("resultadoTotal");

  if (diaInput !== "" && !isNaN(diaInput)) {
    let dia = parseInt(diaInput);
    let totalFolhas = folhasPrimeiroDia * dia + (dia * (dia - 1) * variacaoDiaria) / 2;
    resultadoTotal.innerHTML = `O total de folhas caídas até o ${dia}º dia é ${totalFolhas}.`;
    gerarTabela(dia);
  } else {
    resultadoTotal.innerHTML = "Por favor, digite um número de dia válido.";
  }
}

function gerarTabela(dia) {
  let corpoTabela = document.getElementById("corpoTabela");
  corpoTabela.innerHTML = ""; // Limpa a tabela antes de gerar novamente

  for (let i = 1; i <= dia; i++) {
    let folhasNoDia = folhasPrimeiroDia + (i - 1) * variacaoDiaria;
    let totalAcumulado = folhasPrimeiroDia * i + (i * (i - 1) * variacaoDiaria) / 2;

    let newRow = corpoTabela.insertRow();
    let cellDia = newRow.insertCell(0);
    let cellFolhasNoDia = newRow.insertCell(1);
    let cellTotalAcumulado = newRow.insertCell(2);

    cellDia.innerHTML = i;
    cellFolhasNoDia.innerHTML = folhasNoDia;
    cellTotalAcumulado.innerHTML = totalAcumulado;
  }
}
