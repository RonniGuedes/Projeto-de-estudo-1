// criando variável//
let interruptor = document.getElementById('interruptor')
let root = document.documentElement

interruptor.addEventListener('click', () => {
	root.classList.toggle('tema-claro')
})

function aparecerTexto() {
  document.getElementById('interruptor').innerHTML = "Mudar tema";
}
function reset() {
  document.getElementById('interruptor').innerHTML = "";
}