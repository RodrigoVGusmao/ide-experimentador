#language: pt
Funcionalidade: Visualizar grafos
  Como um usuário
  Eu quero poder ver os grafos dos testes

Contexto:
  Dado que estou na página do experimento
  E pressiono em um card
  Então eu deveria ver o popup de grafos do teste
  E o ícone da bateria
  E o ícone da localização
  E o ícone da velocidade
  E o ícone da lâmpada
  E o botão de fechar

Cenário: Fechar a página de grafos
  Dado que estou na página de grafos
  E pressionei o botão fechar
  Então devo estar na página do experimento

Cenário: Ver bateria durante o teste
  Dado que estou na página de grafos
  E que o ícone da bateria está selecionado
  Então eu deveria ver o nível da bateria do robô pelo tempo do último teste executado

Cenário: Ver localização durante o teste
  Dado que estou na página de grafos
  E que o ícone da localização está selecionado
  Então eu deveria um mapa dos locais visitados pelo robô no último teste

Cenário: Ver velocidade durante o teste
  Dado que estou na página de grafos
  E que o ícone da velocidade está selecionado
  Então eu deveria ver a velocidade do robô pelo tempo no último teste

Cenário: Ver resultados de execuções passadas
  Dado que estou na página de grafos
  E que o ícone da lâmpada está selecionado
  Então eu deveria ver a quantidade de resultados do experimento pelo tipo de todos os testes executados