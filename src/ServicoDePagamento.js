export default class ServicoDePagamento {
    
    constructor() {
        this.pagamentos = [];
    }

    pagamento(codigoBarras, empresa, valor){
        let categoria;

        if(valor > 100){
            categoria = 'caro';
        } else {
            categoria = 'padrão';
        }

        this.pagamentos.push({
            codigoBarras: codigoBarras,
            empresa : empresa,
            valor : valor,
            categoria : categoria
        });
    }

    consultarUltimoPagamento(){
        return this.pagamentos.at(-1)
    }

}