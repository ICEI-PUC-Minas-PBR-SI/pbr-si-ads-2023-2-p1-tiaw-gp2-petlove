# Especificações do Projeto

Definição do Problema:

O problema a ser resolvido é a falta de uma plataforma centralizada que ofereça produtos, serviços e informações para donos de animais de estimação de maneira conveniente e abrangente. Muitos proprietários de animais de estimação enfrentam dificuldades para encontrar produtos adequados, agendar serviços e acessar informações confiáveis sobre cuidados e saúde para seus animais.

Ideia de Solução:

O "Petlove" é uma plataforma online que reúne uma ampla variedade de produtos para animais de estimação, serviços profissionais e conteúdo educativo em um só lugar. Através do site, os usuários podem criar perfis para seus animais, receber recomendações personalizadas, agendar serviços, acessar informações de qualidade sobre cuidados com animais de estimação e realizar compras com facilidade.

## Personas

Nome: Carlos
Idade: 35 anos
Profissão: Criador de cães da raça Bulldog Inglês
Localização: Rio de Janeiro, Brasil

Carlos é um criador experiente e apaixonado por cães da raça Bulldog Inglês. Ele tem uma pequena criação em sua casa e está empenhado em manter e melhorar as características da raça. Ele entende a importância de encontrar parceiros adequados para acasalamento a fim de garantir descendentes saudáveis e com boas características genéticas. Carlos busca uma plataforma que facilite a conexão com outros criadores e donos de cães da mesma raça para fins de acasalamento

Nome: Amanda
Idade: 28 anos
Profissão: Designer gráfica
Localização: São Paulo, Brasil

Amanda é uma jovem profissional que trabalha como designer gráfica em uma agência de publicidade. Ela é solteira, adora animais e vive uma vida ativa. Ela está sempre em busca de novas experiências e maneiras de conhecer pessoas que compartilhem de seus interesses. Amanda acredita que um animal de estimação pode ser uma excelente companhia e está considerando adotar um cachorro para ter uma razão extra para passar mais tempo ao ar livre.

Nome: Ana
Idade: 30 anos
Descrição:
Ana é uma profissional de 30 anos que vive em uma cidade movimentada. Ela é uma amante de animais apaixonada, tem um cachorro chamado Max e está sempre em busca de maneiras de proporcionar a ele uma vida feliz e ativa. Ana usa seu tempo livre para passear com Max no parque, frequentar eventos de adoção de animais e se envolver em grupos de amantes de cachorros.

## Histórias de Usuários

Para Carlos, o Criador de Cães da Raça Bulldog Inglês:

Carlos é um criador experiente e apaixonado por cães da raça Bulldog Inglês.
Ele tem uma pequena criação em casa e está empenhado em manter e melhorar as características da raça.
Carlos entende a importância de encontrar parceiros adequados para acasalamento a fim de garantir descendentes saudáveis e com boas características genéticas.
Ele busca uma plataforma que facilite a conexão com outros criadores e donos de cães da mesma raça para fins de acasalamento.
Para Amanda, a Designer Gráfica:

Amanda é uma jovem profissional solteira que adora animais e vive uma vida ativa.
Ela está sempre em busca de novas experiências e maneiras de conhecer pessoas que compartilhem de seus interesses.
Amanda acredita que um animal de estimação pode ser uma excelente companhia e está considerando adotar um cachorro para ter uma razão extra para passar mais tempo ao ar livre.




|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|CRIADOR             |Encontrar um cachorro da mesma raça | Para procriação
|TUTOR               |Achar um cachorro de estimação      | Ter uma companhia  
             




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001|Sistema deverá cadastrar e criar um perfil no site disponibilizando os dados do usuario | ALTA ||
|RF-002|Usuario poderá filtrar perfis e escolher qual pet de seu interesse| ALTA ||
|RF-003|Usuario podera escolher qual meio e tipo de topico escolher, entre adoção, troca de informações, vendas e encontrar um pet para acasalar  | MÉDIA |Maria|
|RF-004|Opção de Comentários e Feedback para Serviços Prestados:| MÉDIA ||
|RF-005|Sistema de Reservas de pet agendado por Data e Localidade::| MÉDIA |
|RF-006|Geração de Recibos e Comprovantes de Pagamento apos a compra ::| MÉDIA |
|RF-007|Opção de bate papo entra tutores:| MÉDIA |
|RF-008|Opção de Comentários e Feedback para Serviços Prestados:| MÉDIA |
|RF-009|O sistema deverá fornecer segurança no armazenamento dos dados| MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deve garantiar o armazenamento dos dados do usuario dentro de um banco de dados | ALTO| 
|RNF-002| Interface do sistema deverá interagir com usuario|  BAIXA | 
|RNF-003| A plataforma devera ter uma integração entra dados fornecidos e recomendações| MÉDIA |
|RNF-004| A plataforma deve oferecer um alto trafego mesmo em momentos de grandes demandas|  BAIXA |
|RNF-005| A plataforma devera seguir as leis de adoção e compra e venda de animais| ALTA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto de imediato não precisará de custo |
|02| Todo projeto deverá ser postado no Github       |
|03| No momento será desenvolvido apenas web        |
|04| Será necessario uso das linguagens HTML, CSS e Java Script        |
|05| Será necessario uso de banco de dados para armazenar os dados e filtrar informações        |


