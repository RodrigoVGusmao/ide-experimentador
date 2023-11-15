#language: pt
Funcionalidade: Visualizar cards
  Como um usuário
  Eu quero poder ver os cards dos testes

Cenário: Não há testes
  Dado que estou na página do experimento
  E não há nenhum teste
  Então eu deveria ver o texto "Não há testes disponiveis"

Contexto:
  Dado que estou na página do experimento
  Então eu deveria ver um teste nunca executado
  E um teste com coordenadas x igual "0", y igual "0", z igual "0", 
  com batria igual "90%", com ícone resultado igual "sucesso",
  com execuções igual "100"
  E um teste com coordenadas x igual "1", y igual "1", z igual "1", 
  com batria igual "50%", com ícone resultado igual "falha",
  com execuções igual "50"
  E um teste com coordenadas x igual "1", y igual "1", z igual "0", 
  com batria igual "70%", com ícone resultado igual "sucesso",
  com execuções igual "75"

Cenário: Teste nunca executado
  Dado que o teste nunca foi executado
  Então eu deveria ver o nome do teste
  E as tags
  E o campo coordenadas deve ser "x: -  y: -  z: -"
  E o campo bateria deve ser "-"
  E o ícone do resultado deve ser "vazio"
  E o campo runs deve ser "0"

Cenário: Teste executado
  Dado que o teste nunca foi executado
  E o botão executar é pressionado
  Então o ícone do resultado deve ser "carregando"
  E o icone de execução deve ser "parar"
  Quando o teste terminar
  Então eu deveria ver o nome do teste
  E as tags
  E o campo coordenadas deve ser "x: 0  y: 1  z: 1"
  E o campo bateria deve ser "60%"
  E o ícone do resultado do teste deve ser "sucesso"
  E o campo runs deve ser "1"

Cenário: Todos os testes executados
  Dado que todos os testes estão selecionados
  E que pressionei o botão executar no menu lateral
  Então eu deveria ver ícone do resultado do teste em execução em todos os testes
  Quando todos os testes terminarem
  Então eu deveria ver um teste com coordenadas x igual "0", y igual "1", z igual "1", 
  com batria igual "60%", com ícone resultado igual "sucesso",
  com execuções igual "1"
  E um teste com coordenadas x igual "0", y igual "0", z igual "0", 
  com batria igual "90%", com ícone resultado igual "sucesso",
  com execuções igual "101"
  E um teste com coordenadas x igual "1", y igual "1", z igual "1", 
  com batria igual "50%", com ícone resultado igual "falha",
  com execuções igual "51"
  E um teste com coordenadas x igual "1", y igual "1", z igual "0", 
  com batria igual "70%", com ícone resultado igual "sucesso",
  com execuções igual "76"

Cenário: Alguns testes executados
  Dado que os testes 1 e 3 estão selecionados
  E que os testes 2 e 4 não estão selecionados
  E que pressionei o botão executar no menu lateral
  Então eu deveria ver ícone do resultado do teste em execução em todos os testes selecionados
  Quando todos os testes selecionados terminarem
  Então eu deveria ver um teste com coordenadas x igual "0", y igual "1", z igual "1", 
  com batria igual "60%", com ícone resultado igual "sucesso",
  com execuções igual "1"
  E o teste 2 não deveria mudar
  E um teste com coordenadas x igual "1", y igual "1", z igual "1", 
  com batria igual "50%", com ícone resultado igual "falha",
  com execuções igual "51"
  E o teste 4 não deveria mudar
