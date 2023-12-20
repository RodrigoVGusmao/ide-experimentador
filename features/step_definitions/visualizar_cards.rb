Before do
  experimento = Experiment.new(["Experimento 1", disabled: false])
  Experiment.new(["Experimento 2", disabled: false])
  Experiment.new(["Experimento 3", disabled: false])
  teste = Trial.new([name: "Teste 1", disabled: false, deleted: false, runs: 100, experiment_id: experimento.first.id])
  Trial.new([name: "Teste 2", disabled: false, deleted: false, runs: 1, experiment_id: experimento.first.id])
  Trial.new([name: "Teste 3", disabled: false, deleted: false, runs: 51, experiment_id: experimento.first.id])
  Trial.new([name: "Teste 4", disabled: false, deleted: false, runs: 76, experiment_id: experimento.first.id])
  Trial.new([name: "Teste 5", disabled: false, deleted: false, runs: 0, experiment_id: experimento.third.id])
  Trial.new([name: "Teste 6", disabled: false, deleted: false, runs: 1, experiment_id: experimento.third.id])
  execucao_teste = TrialExecution.new(status: "sucesso", log:"
  50.01, [INFO], robot4, {'x': 0, 'y': 0, 'yaw': 0}, None, None
  60.02, [INFO], robot4, {'battery-level':'90'}, None, None", trial_id: teste.first.id)
  TrialExecution.new(status: "falha", log:"
  50.01, [INFO], robot4, {'x': 1, 'y': 1, 'yaw': 1}, None, None
  60.02, [INFO], robot4, {'battery-level':'50'}, None, None", trial_id: teste.second.id)
  TrialExecution.new(status: "falha", log:"
  50.01, [INFO], robot4, {'x': 1, 'y': 1, 'yaw': 1}, None, None
  60.02, [INFO], robot4, {'battery-level':'50'}, None, None", trial_id: teste.third.id)
  TrialExecution.new(status: "sucesso", log:"
  50.01, [INFO], robot4, {'x': 1, 'y': 1, 'yaw': 0}, None, None
  60.02, [INFO], robot4, {'battery-level':'70'}, None, None", trial_id: teste.fourth.id)
  TrialExecution.new(status: "sucesso", log:"
  50.01, [INFO], robot4, {'x': 0, 'y': 1, 'yaw': 0}, None, None
  60.02, [INFO], robot4, {'battery-level':'40'}, None, None", trial_id: teste.sixth.id)

  experimento_atual = nil;
  teste_atual = nil;
end

Given /^que estou logado como usuário no ide-experimentador$/ do

end
Given /^que não existem testes no experimento (.+)$/ do |experimento|

end
Given /^que existem? os? testes? (.+) no experimento (.+)$/ do |testes, experimento|

end
Given /^que o card do (.+) contém (.+),\s*bateria:\s*(.+),\s*resultado:\s*(.+),\s*runs:\s*(.+)$/ do |teste, posicao, bateria, resultado, execucoes|

end
Given /^que estou no experimento "(.+)"$/ do |experimento|
  experimento_atual = experimento.find_by(name: experimento);
end
Given /^que os? testes? (.+) est(ão|á) selecionados? no experimento (.+)$/ do |testes, dummy, experimento|

end
Given /que pressionei o botão executar/ do

end
Given /^que os? testes? (.+) do (.+) fo(i|ram) executado$/ do |testes, experimento|
  step %{que os testes #{testes} estão selecionados no experimento #{experimento}}
  step %{que pressionei o botão executar}
  step %{eu deveria ver o ícone "carregando" nos testes selecionados #{testes}}
  step %{os testes selecionados #{testes} terminarem de executar}
end
Given /^que estou no teste (.+) do experimento (.+)$/ do |teste, experimento|
  step %{que estou no experimento #{experimento}}
  teste_atual = teste.find_by(name: teste)
end
Given /o botão (.+) é pressionado/ do |botao|

end
Given /^que estou visualizando o modal de (.+) do (.+) no (.+)$/ do |botao, teste, experimento|
  step %{que estou no teste "#{teste}" do experimento "#{experimento}"}
  step %{o botão "mais opções" é pressionado}
  step %{uma lista de opções com "#{botao}" deve aparecer}
  step %{eu clicar em "#{botao}"}
end

When /^os? testes? selecionados? (.+) terminar(em)? de executar$/ do |testes, dummy|

end
When /^eu pressiono o botão (.+)$/ do |botao|

end

Then /^eu deveria ver as? mensage(m|ns) (.+)$/ do |dummy, msg|

end
Then /^eu deveria ver o card (.+),\s*(.+),\s*bateria:\s*(.+),\s*resultado:\s*(.+),\s*runs:\s*(.+)$/ do |teste, posicao, bateria, resultado, execucoes|
  step %{eu deveria ver o nome do teste "#{teste}"}
  step %{o campo "coordenadas" deve ser "#{posicao}"}
  step %{o campo "bateria" deve ser "#{bateria}"}
  step %{o campo "resultado" deve ser "#{resultado}"}
  step %{o campo "runs" deve ser "#{execucoes}"}
end
Then /^eu deveria ver o ícone (.+) nos? testes? selecionados? (.+)$/ do |icone, testes|

end
Then /^eu deveria ver o nome do teste (.+)$/ do |teste|

end
Then /^as? tags? devem? ser (.+)"$/ do |tags|

end
Then /^o campo (.+) deve ser (.+)$/ do |campo, resultado|

end
Then /^uma lista de opções com (.+) deve aparecer$/ do |botao|

end
Then /^eu deveria ver um modal com 4 páginas e uma opção de fechar o modal$/ do

end
Then /^um destaque no ícone de (.+) deveria aparecer$/ do |icone|

end
Then /^a página vazia com futuros detalhes de (.+) deveria aparecer$/ do |aba|

end
Then /^eu estou no experimento (.+)$/ do |experimento|

end
