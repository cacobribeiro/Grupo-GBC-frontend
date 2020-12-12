Desenvolver um sistema que faça a gestão de cadastros de médicos.
O Sistema deve suportar as seguintes operações:
• Insert
• Update
• Select
• Soft Delete
No cadastro do médico devem ser cadastrados os seguintes itens abaixo:
• Nome do Médico com no máximo 120 caracteres
• CRM somente Números e no formato (00.000.00)
• Telefone Fixo
• Telefone Celular
• CEP Formatado (00000-000)
o Ao cadastrar o Cep deve ser feita uma requisição via XHR para
a api dos correios e retornar todos os dados de endereço do
cliente.

• Especialidade médica (ao mínimo duas especialidades)

Itens importantes:

• Poder realizar pesquisas por todos os campos do cadastro do médico
inclusive endereço.
• Estar em no padrão REST
• Utilizar alguma ferramenta de validação (exemplo YUP)
• Funções Especialistas (Realizam somente uma operação)
• Utilizar o Postman ou Insomina (documentação e requisição)
• GIT

Diferenciais

• Docker
• Testes Unitário
• Testes de Integração
• AWS (ECS, RDS)
• Estruturação de Banco de dados MySql
• Conhecimento em NoSQL
• Metodologias ágeis
• Filas (RabbitMQ ou SQS)

Ferramentas para serem utilizadas no desenvolvimento

Você pode desenvolver em duas linguagens sendo elas Node.JS e
Java.

Se escolher por utilizar Node.JS deve seguir as orientações abaixo:

• TypeScript
• Sequelize ou TypeORM
• Express
• Migrations e Seeds
• React ou HTML e CSS

Se escolher por utilizar JAVA deve seguir as orientações abaixo:

• SpringBoot
• Hibernate

Lista das especialidades que devem ser cadastradas no banco de dados:
• ALERGOLOGIA
• ANGIOLOGIA
• BUCO MAXILO
• CARDIOLOGIA CLÍNICA
• CARDIOLOGIA INFANTIL
• CIRURGIA CABEÇA E PESCOÇO
• CIRURGIA CARDÍACA
• CIRURGIA DE TÓRAX
