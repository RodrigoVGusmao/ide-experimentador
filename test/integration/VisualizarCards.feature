#language: pt
Funcionalidade: Visualizar cards
  Como um usuário
  Eu quero poder ver os cards dos testes

Contexto:
  Dado que estou na página do experimento
  Então eu deveria ver os testes

Cenário: Experimento sem testes
  Dado que não tem testes no experimento
  Então eu deveria ver o texto "Não há testes disponiveis"

Cenário: Teste nunca executado
  Dado que tem ao menos um teste no experimento
  E o teste nunca foi executado
  Então eu deveria ver o nome do teste
  E as tags
  E o campo coordenadas deve ser "x: -  y: -  z: -"
  E o campo bateria deve ser "-"
  E o ícone do resultado do teste deve estar vazio
  E o campo runs deve ser "0"

Cenário: Teste executado
  Dado que tem ao menos um teste no experimento
  E o teste nunca foi executado
  E o botão executar é pressionado
  Então eu deveria ver ícone do resultado do teste em execução
  Quando o teste terminar
  Então eu deveria ver o nome do teste
  E as tags
  E o campo coordenadas atualizado
  E o campo bateria atualizado
  E o ícone do resultado do teste atualizado
  E o campo runs incrementado

Cenário: Todos os testes executados
  Dado que tem dois ou mais testes no experimento
  E que todos os testes estão selecionados
  E que pressionei o botão executar no menu lateral
  Então eu deveria ver ícone do resultado do teste em execução em todos os testes
  Quando todos os testes terminarem
  Então eu deveria ver todos os cards atualizados

Cenário: Alguns testes executados
  Dado que tem dois ou mais testes no experimento
  E que ao menos um está selecionado
  E que ao menos um não está selecionado
  E que pressionei o botão executar no menu lateral
  Então eu deveria ver ícone do resultado do teste em execução em todos os testes selecionados
  Quando todos os testes selecionados terminarem
  Então eu deveria ver todos os cards selecionados atualizados