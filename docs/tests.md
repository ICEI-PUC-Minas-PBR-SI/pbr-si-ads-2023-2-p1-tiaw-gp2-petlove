# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Test de Softwar**, que utiliza uma abordaem de caixa preta, e tem por bjetivo verficar a conformidae do ofware co os requtsunoais e não funcionais do siste
 - O **Teste de Usabilidade**, que busca avaliar a qualidade d uso do sistema or u suário d públco al

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

## Testes de funcionalidade das telas login e cadastro


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email e senha "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853263/d9faf561-e083-41e8-979e-b512627e1e83)
![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853263/7ffe189a-83df-4c90-aa6a-2ce205a1d546)
![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853263/17ba65b9-a145-4d61-aeaa-142c81ecc43a)



**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seu email e senha cadastrados  e clica em "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853263/809fcb76-5232-4759-a262-fb2bc4542992)
![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853263/1e19bef7-0224-4b07-ba50-326b4b85844d)




## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta e efetuar login*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: || 


|*Caso de Teste*                                 |*TC-03 - Tela Principal*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários já logados e cadstrados podem direcionar seus objetivos no site.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*TC-04 - Tela Petinder*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários que desejam achar companheiros para seus pets.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

## teste de funcionalidade da tela "fale conosco"
|*Caso de Teste*                                 |*TC-05 - Tela fale conosco*                                         |
|---|---|
**Procedimento**  | 1) Usuário informa nome, email e escreve a mensagem desejada para enviar pro site.2) A aplicação verifica se os dados são válidos e se sim a mensagem é enviada.
**Requisitos associados** | RF-001
**Resultado esperado** | Enviar mensagem para o site.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

.![image](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-ads-2023-2-p1-tiaw-gp2-petlove/assets/142853515/01280572-3ac4-4e63-b6c0-09aed39d5faf)


|*Caso de Teste*                                 |*TC-06 - Tela Excluir e modificar conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários autenticados e que desejam mudar senha e email, ou que desejam excluir  sua conta.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*TC-07 - Tela Adote um pet*                                         |
|---|---|
|Requisito Associado | RF-004 - Direcionamento a tela  de adoção de pets.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*TC-08 - Tela Cadastre um  pet*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários que pretendem fazer o cadstro de seus pets no site.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

*Caso de Teste: Criar uma conta* : Execução teve falhas de salvamento de usuários e de reconheci ento de cadastro, mas foram resolvidos e foi colocado alerta para a notificação do cadastro feito 

*Caso de Teste: Efetuar Login (usuário autenticado)* : Execução teve falhas de salvamento do registro dos usuários da tela anterior e da confirmação da senha, foram resolvidos e refeito os testes, e foi colocado alerta para a notificação do login realizado. 

*Caso de Teste: Tela Principal* : Foi usualmente funcional e ouve certos conflitos referente as informações principais da tela central, mas foi testada e verificada, foi obtido as informações das outras telas e registros da tela central.

*Caso de Teste: Tela Petinder* : Ouve muitos erros na interface navegavel de "interesse" e "não interesse" da tela, e sobre as informações dos pets, a solução constada foi realizado mais testes na tela para sua conclusão final, que foi finalizada com sucesso. 

*Caso de Teste: Tela fale conosco* : Não ocorreu muitos erros mas teve apenas infortunos nos alertas de notificação. Foi testada e concluida.

*Caso de Teste:Tela Excluir e modificar conta* : Foi caso de erros pois se conectava a tela de login e contas, erros no código ao salvar os usuários e ao modificar senhas e emails. Foram  realizados muitos testes para seu funcionamento. Status final foi : tela funcional em alterar senha e email realizados com sucesso.


*Caso de Teste Tela Adote um pet* : Funcional e ouve erros nas informações dos pets na adoção, mas foram resolvidos e modificados para seu funcionamento no código.

*Caso de Teste Tela Cadastre um  pet* : Caso de cadastro teve erros ao salvar informações dos pets e arquivar eles na tela principal, seu resultado final foi conferido e realizado corretamente.




## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja adotar um gato adulto. Encontre no site um gato adulto e veja detalhes de localização e contato do dono que fez o anuncio de doação. |
| 2             |Você é uma pessoa que deseja adotar um cachorro adulto. Encontre no site um cachorro adulto e veja detalhes de localização e contato do dono que fez o anuncio de doação.|
| 3            |Você é uma pessoa que deseja encontrar um parceiro ao seu cachorro. Encontre no site um cachorro que combine com  seu pet e veja detalhes de localização e contato do dono que fez o anuncio de doação.|
| 4             |Você é uma pessoa que deseja doar gatinhos filhotes. Encontre no site a área de cadastro de doeção e veja detalhes do cadastro.|




## Registro de Testes de Usabilidade

Cenário 1:  Você é uma pessoa que deseja adotar um gato adulto. Encontre no site um gato adulto e veja detalhes de localização e contato do dono que fez o anuncio de doação.

Cenário 2:Você é uma pessoa que deseja adotar um cachorro adulto. Encontre no site um cachorro adulto e veja detalhes de localização e contato do dono que fez o anuncio de doação.

Cenário 3:Você é uma pessoa que deseja encontrar um parceiro ao seu cachorro. Encontre no site um cachorro que combine com  seu pet e veja detalhes de localização e contato do dono que fez o anuncio de doação.

Cenário 4:Você é uma pessoa que deseja doar gatinhos filhotes. Encontre no site a área de cadastro de doeção e veja detalhes do cadastro..

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 23:45 segundos                 |
| 2       | SIM             | 5                    | 32:25 segundos                 |
| 3       | SIM             | 5                    | 20:13 segundos                 |
| 4       | SIM             | 5                    | 35:11 segundos                 |
|  |  |  |  |
| **Média**     | 92%           | 0                | 30 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



