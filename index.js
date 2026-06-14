import ServicoDePagamento from "./src/ServicoDePagamento.js";

const servico = new ServicoDePagamento();

servico.pagamento('123','Julio', 1500)

console.log(servico.consultarUltimoPagamento());