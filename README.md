# Projeto
- Serviço de pagamento

## Objetivo
- Este projeto tem como objetivo validar a funcionalidade de um serviço de pagamento desenvolvido em JavaScript, garantindo o correto funcionamento das regras de negócio através de testes automatizados e criação de uma pepiline.

## Tecnologias Utilizadas
- Node.js
- Mocha
- GitHub Actions
- Node Assert

## Testes Automatizados
Foram desenvolvidos testes automatizados utilizando o framework Mocha para validar:
   - Pagamentos com valor superior a R$ 100,00 devem receber a categoria "cara".
   - Pagamentos com valor igual ou inferior a R$ 100,00 devem receber a categoria "padrão".
   - O método consultarUltimoPagamento() deve retornar sempre o último pagamento realizado.

## Pipeline de Integração Contínua

A pipeline foi desenvolvida utilizando GitHub Actions e contempla as seguintes formas de execução:
    - Execução automática por Push.
    - Execução manual através do Workflow Dispatch.
    - Execução agendada através do recurso Schedule.


## Ferramenta de Relatório de Testes
- mocha-junit-reporter
- GitHub Actions Artifacts

## Como Executar Localmente
Instalar as dependências:
    - npm install
Executar os testes:
    - npm test

Gerar relatório de testes:
    - npm run test-report
