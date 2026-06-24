# Briefing de Parametrização CRM - ICBID T2

**Para:** Igor Matheus
**De:** Lucyanne Cruz (Estrategista)
**Data:** 24/06/2026

## 1. Visão Geral e Objetivo

Este documento consolida as diretrizes estratégicas e operacionais para a parametrização do CRM Data Crazy, conforme alinhado na nossa última reunião de acompanhamento. O objetivo central é garantir que o sistema opere com foco absoluto em conversão e retenção, mapeando toda a jornada do aluno de forma sistêmica, sem perda de dados ou histórico de interações.

O status atual do projeto apresenta avanços importantes. O CRM Data Crazy já se encontra operacional, com os acessos de Lucyanne e Lorena devidamente cadastrados. A chave de API e o respectivo token foram gerados e entregues para que a integração com o ambiente de alunos seja realizada. Ficou definido o uso exclusivo das automações nativas do Data Crazy, dispensando ferramentas externas de terceiros para a gestão do fluxo principal. A questão da recuperação de carrinho foi solucionada por meio do sistema da USINA, que agora gera um link de checkout individual por aluno. O WhatsApp está configurado e operando no método de coexistência.

## 2. Parametrizações Sob Responsabilidade de Igor

### 2.1 Integração da Página de Captura com o CRM

A integração da Landing Page com o CRM representa a prioridade máxima e o principal bloqueio antes da ativação de qualquer campanha de tráfego. É imperativo configurar o rastreamento de eventos da página de captura para que, no momento exato em que o lead preenche o formulário, os dados sejam direcionados automaticamente para o CRM.

Essa ação deve criar, de forma instantânea, um card no Pipeline P1, posicionado no estágio de "Novo Lead". Para que a inteligência de dados funcione corretamente, é obrigatória a captura e o registro dos seguintes campos: Nome, Telefone, E-mail, UTM Source, UTM Medium, UTM Campaign, UTM Content (indicando o criativo que originou o clique) e a Data/Hora do preenchimento.

### 2.2 Estruturação dos Pipelines

O sistema de gestão de relacionamento exigirá a configuração de três pipelines distintos, cada um focado em um momento específico da jornada. Uma regra crítica de arquitetura de dados foi estabelecida: a transição de um lead de um pipeline para outro deve ocorrer obrigatoriamente por meio da **duplicação** do card, e nunca pela simples movimentação. Esse procedimento é vital para preservar o histórico de conversão e a origem do lead no pipeline inicial.

A tabela a seguir detalha a estrutura exigida para cada pipeline:

| Pipeline | Descrição e Propósito | Estágios Obrigatórios |
|---|---|---|
| **P1: Captação** | Pipeline permanente para leads oriundos da Landing Page, WhatsApp ou indicações. Focado na conversão direta. | Novo Lead, Qualificado, Em Negociação, Matriculado, Perdido. |
| **P2: Produto de Entrada** | Pipeline sazonal ativado durante eventos como Cursos Livres e Webinários. | Inscrito, Participou, Oferta Feita, Converteu, Não Converteu. |
| **P3: Aluno Ativo** | Pipeline de retenção e acompanhamento durante os 12 meses de pós-graduação. | Onboarding, Em Curso, Em Risco, Concluído, Expansão T3. |

Cada estágio possui gatilhos específicos. No P1, a qualificação exige o preenchimento do campo "motivo_qualificacao", enquanto a perda exige a seleção do "motivo_perda" em uma lista predefinida. No P2, é necessário um campo "compareceu" para medir a presença no evento. No P3, o estágio "Em Risco" será acionado automaticamente caso o Health Score do aluno caia para níveis críticos ou haja ausência prolongada de acesso.

### 2.3 Configuração de Automações Nativas

As automações nativas do Data Crazy devem ser configuradas para reduzir o trabalho manual e garantir o tempo de resposta. O sistema deve salvar as UTMs e alimentar o campo "Criativo de Origem" no card do lead. Alertas de tempo são essenciais, devendo notificar a gestão caso um lead permaneça mais de uma hora sem resposta da equipe de atendimento.

A confirmação de pagamento via webhook do Asaas deve criar automaticamente um card no pipeline P3. Além disso, uma rotina de exportação de dados precisa ser configurada para rodar a cada hora, extraindo as informações do CRM e alimentando as cinco abas da planilha Google Sheets da Otimiza. O avanço automático de cards baseado em palavras-chave específicas nas conversas também deve ser parametrizado.

### 2.4 Recriação da Estrutura de Tráfego

A estrutura de tráfego pago precisa ser completamente recriada, visto que as configurações anteriores estavam vinculadas a contas incorretas. Será necessário criar uma nova conta de anúncios vinculada oficialmente ao ICBID, seguida da instalação e validação rigorosa de um novo pixel. A partir da base de contatos que será fornecida, públicos customizados e lookalike devem ser estruturados antes da ativação das campanhas iniciais de validação.

## 3. Entregáveis Sob Responsabilidade de Lucyanne

Para viabilizar as parametrizações técnicas detalhadas acima, um conjunto de insumos estratégicos será entregue para o Igor. O principal deles é o Documento de Regras de Negócio, que conterá a lista completa de tags e seus respectivos gatilhos de aplicação. Esse documento também definirá a lógica matemática para o cálculo do Health Score do Aluno, fornecerá os scripts de abordagem padronizados para automações e listará as palavras-chave exatas que acionarão o avanço automático de pipeline.

Em paralelo, será enviada a Base de Contatos da T1. Esta planilha, contendo nome, telefone, e-mail e valor de compra dos alunos anteriores, é o insumo necessário para a criação dos públicos no Meta Ads. Por fim, a equipe fará o alinhamento com o Hiago para garantir o acesso ao DNS ou domínio, permitindo o apontamento correto para as novas Landing Pages de campanha.

## 4. Limitações Técnicas e Pontos de Atenção

A operação enfrenta algumas limitações técnicas que exigem monitoramento constante. O método de coexistência do WhatsApp impõe a regra das 24 horas, restringindo o envio de mensagens livres após esse período desde a última interação do lead. Portanto, os alertas de tempo de resposta são vitais para evitar os custos associados à reativação de conversas via templates pagos.

O agente de inteligência artificial possui uma cota limitada de 50.000 tokens no plano atual. O consumo precisa ser acompanhado de perto para evitar a interrupção abrupta da qualificação automática. Além disso, o agente deve passar por testes rigorosos de validação antes de ser ativado no ambiente de produção. 

Dois pontos técnicos requerem confirmação junto ao suporte da ferramenta: a capacidade nativa do Data Crazy de realizar a duplicação automática de cards entre pipelines e a viabilidade de enviar alertas críticos do sistema diretamente para um grupo de WhatsApp da equipe, facilitando a comunicação de eventos como pagamentos confirmados ou alunos em risco.

## 5. Próximos Passos Imediatos

A sequência de execução prioritária exige que a integração da Landing Page com o CRM seja finalizada imediatamente. Em seguida, a base de contatos da T1 será disponibilizada para a recriação da estrutura de tráfego e subida das campanhas de validação. Com o tráfego em preparação, o documento completo de regras de negócio será entregue, permitindo a parametrização final dos pipelines e automações no CRM.
