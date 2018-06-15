const transform = (x,y) => {
	let data = document.querySelector(y).innerText;
	setTimeout((s)=>{
		setTimeout((q)=>{document.querySelector(y).innerText = x},1000)
		setTimeout((q)=>{document.querySelector(y).innerText = data},1300)
		setTimeout((q)=>{document.querySelector(y).innerText = x},1600)
		setTimeout((q)=>{document.querySelector(y).innerText = data},1900)
	},1000)
}// Criador do efeito de deslizamento
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
	history.pushState(elemento,elemento,elemento)
  window.scroll({ // Função nativa dos browsers
	  top: (vivo.offsetTop - (window.innerHeight / 5)), // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery

}
