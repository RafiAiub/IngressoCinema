document.getElementById('btnConfirmar').addEventListener('click', function () {
  const filmes = document.getElementById('filmes')
  const filmeEscolhido = filmes.options[filmes.selectedIndex].text
  const dataFilme = document.getElementById('dataFilme').value
  const horaFilme = document.getElementById('horaFilme').value
  const tiposDeIngresso = document.getElementById('tipoDeIngresso')
  const modalidadeIngresso = tiposDeIngresso.options[tiposDeIngresso.selectedIndex].text
  const seuCPF = document.getElementById('cpf').value

  criaJson(filmeEscolhido, dataFilme, horaFilme, modalidadeIngresso, seuCPF)
})

function criaJson(filme, data, hora, modalidade, CPF) {
  const ticket = {
    'Filme': filme,
    'Data': data,
    'Hora': hora,
    'Tipo Ingresso': modalidade,
    'CPF': CPF
  }

  const jsonData = JSON.stringify(ticket)
  const blob = new Blob([jsonData], { type: "application/json" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "ingresso.json"
  link.click()
}