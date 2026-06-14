import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Validar serviço de pagamento',function(){
    it('Validar que ao informar um valor maior que 100 a categoria deve ser caro', function (){
        //Arrange
        const valorMaiorCem = new ServicoDePagamento();

        //Act
        valorMaiorCem.pagamento('123456','Fabrica de Teste', 1500);
        const consultarUltimoPag = valorMaiorCem.consultarUltimoPagamento();

        //Assert
        assert.equal(consultarUltimoPag.categoria,'caro');

    });

    it ('Validar que ao informar um valor menor que 100 a categoria deve ser padrão', function(){
                //Arrange
        const valorMaiorCem = new ServicoDePagamento();

        //Act
        valorMaiorCem.pagamento('123456','Fabrica de Teste', 99);
        const consultarUltimoPag = valorMaiorCem.consultarUltimoPagamento();

        //Assert
        assert.equal(consultarUltimoPag.categoria,'padrão');

    });

    it ('Validar que a função consultarUltimoPagamento sempre retorne o ultimo pagamento', function(){
        //Arrange
        const consultaUltimopag = new ServicoDePagamento();

        //Act
        consultaUltimopag.pagamento('123-456','Fabrica de Teste', 99);
        consultaUltimopag.pagamento('001AS-002','Papel A4 ', 99);
        consultaUltimopag.pagamento('AJDE-4545','Mouse Gamer', 10500);
        
        const consultarUltimoPag = consultaUltimopag.consultarUltimoPagamento();

        //Assert
        assert.equal(consultarUltimoPag.codigoBarras,'AJDE-4545')
        assert.equal(consultarUltimoPag.categoria,'caro');

    });
    
});