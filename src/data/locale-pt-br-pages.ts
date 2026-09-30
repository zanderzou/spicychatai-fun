import type { LocalizedEdition } from "./localized-pages";

// Brazilian Portuguese editorial edition. It is draft content, not a release switch.
export const ptBrEdition: LocalizedEdition = {
  ui: {
    language: "Idioma", home: "Início", start: "Começar", controls: "Modelo e memória", compare: "Comparar", blog: "Comparativos",
    about: "Sobre", contact: "Contato", editorial: "Política editorial", privacy: "Privacidade", terms: "Termos",
    official: "Site oficial do SpicyChat", read: "Ler comparação", sources: "Fontes oficiais", allArticles: "Todos os comparativos", more: "Saiba mais",
    independent: "Publicação independente, sem vínculo com a equipe do SpicyChat", adults: "Conteúdo informativo para adultos",
    analyticsSettings: "Preferências de análise", analyticsTitle: "Análise de acesso opcional",
    analyticsBody: "Você permite o uso do Google Analytics para entender quais páginas precisam melhorar? Não usamos essa opção para personalizar anúncios.",
    analyticsDecline: "Não permitir", analyticsAccept: "Permitir análise", analyticsPrivacy: "Entenda a privacidade",
    analyticsStatusPrivacy: "O sinal de privacidade do navegador foi respeitado; a análise permanece desligada.",
    analyticsStatusOn: "Análise ativada. Você pode retirar a permissão em Preferências de análise.",
    analyticsStatusOff: "Análise desligada. Sua escolha vale apenas para este site.",
    skip: "Ir para o conteúdo", navigation: "Navegação principal", menu: "Abrir menu", closeMenu: "Fechar menu",
  },
  home: {
    description: "Spicy Chat AI: compare conversa com personagens de IA, criação de personagens, modelos, contexto, memória, regras e cinco alternativas com fontes oficiais.",
    hero: {
      kicker: "Pesquisa independente · para adultos",
      tagline: "O personagem chama atenção. O enredo precisa se sustentar.",
      body: "Entenda como o SpicyChat combina personagem, persona, modelo, contexto e memória antes de iniciar uma história longa. Os comparativos mostram diferenças reais de regras, descoberta e custo.",
      primary: "Como avaliar", secondary: "Ver cinco comparativos",
    },
    intro: {
      kicker: "01 / A proposta",
      heading: "O que pesquisar sobre Spicy Chat AI",
      lead: "SpicyChat é um serviço de conversa e roleplay com personagens fictícios. Esta publicação avalia o produto; não oferece chat, conta ou geração de imagens.",
      body: "Para um RPG por texto funcionar além da primeira mensagem, importam a ficha do personagem, o objetivo da cena, o modelo usado, o contexto disponível e a memória persistente. Essas camadas não são sinônimos. Também é preciso separar o discurso de marketing para adultos das regras vigentes de conteúdo e avatares.",
    },
    journey: {
      kicker: "02 / Três decisões iniciais",
      heading: "Descobrir, criar ou ajustar?",
      description: "Escolha um percurso antes de pagar por recursos que talvez não resolvam o seu problema.",
      cards: [
        { label: "Descoberta", heading: "Leia além da imagem", body: "Observe o primeiro diálogo, o conflito e a indicação de visibilidade do personagem. Um retrato atraente não prova consistência." },
        { label: "Criação", heading: "Dê motivo ao personagem", body: "Um desejo, um limite e uma forma de falar são mais verificáveis do que uma lista de adjetivos. Use apenas pessoas inventadas e adultas." },
        { label: "Ajustes", heading: "Mude uma variável por vez", body: "Teste modelo, persona e memória separadamente. Assim você identifica se a mudança veio do texto da ficha ou da configuração." },
      ],
    },
    controls: {
      kicker: "03 / O que muda a conversa",
      heading: "Cinco camadas, cinco perguntas",
      description: "A matriz oficial de planos distingue contexto, Memory Manager e Semantic Memory 2.0. Verifique o plano atual, não um print antigo.",
      cards: [
        { label: "Personagem", heading: "Quem conduz a cena?", body: "Ficha e mensagem inicial precisam mostrar objetivo, limites e espaço para a resposta do leitor." },
        { label: "Modelo", heading: "Como ele responde?", body: "O acesso varia por plano. Compare voz narrativa e coerência mantendo a mesma cena fictícia." },
        { label: "Contexto", heading: "O que cabe na próxima resposta?", body: "O histórico visível pode ser maior que o trecho considerado pelo modelo naquele momento." },
        { label: "Memória", heading: "O que fica salvo?", body: "Memory Manager e Semantic Memory 2.0 são recursos distintos em níveis diferentes do plano." },
        { label: "Plano", heading: "Quanto custa usar de verdade?", body: "Modelo avançado, imagens, voz e controles de geração não estão todos no mesmo nível. Confira renovação e canal de pagamento." },
      ],
    },
    test: {
      kicker: "04 / Teste repetível",
      heading: "Uma cena pequena revela mais que um slogan",
      description: "A proposta abaixo é um método para o leitor, não um resultado de benchmark realizado por esta publicação.",
      steps: [
        { heading: "Defina dois fatos inventados", body: "Escolha um lugar fictício e uma tarefa para a cena seguinte, sem dados de pessoas reais." },
        { heading: "Converse e mude de assunto", body: "Inclua um desacordo leve. Observe se o personagem continua com os mesmos objetivos e modo de falar." },
        { heading: "Volte sem dar a resposta", body: "Depois de alguns turnos, pergunte pelo combinado. Anote modelo, plano, número de mensagens e memória ativada." },
      ],
    },
    comparison: {
      kicker: "05 / Cinco alternativas", heading: "Compare o que realmente afeta sua escolha",
      description: "Catálogo, regras, modelos, memória e mídia pesam de modo diferente para quem quer criar histórias ou manter uma conversa cotidiana.",
      columns: ["Serviço", "Pode fazer sentido para", "Confira antes"],
      baseline: ["SpicyChat", "Roleplay fictício entre adultos com ajuste de modelo e memória", "Contexto e recursos por plano"],
      options: {
        "spicychat-vs-character-ai": ["Character.AI", "Histórias sob regras de conteúdo mais restritivas", "Política sobre pornografia e acesso de menores"],
        "spicychat-vs-janitor-ai": ["Janitor AI", "Fichas da comunidade e configuração visível na conta", "Domínio oficial, modelo e eventual provedor externo"],
        "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "Conversar com modelos gratuitos e explorar personagens", "Créditos separados para modelos Pro"],
        "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "Encontrar personagens prontos rapidamente", "Regras para perfis públicos e tratamento de dados"],
        "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "Companhia com voz e imagens", "Operadora declarada e custos de mídia"],
      },
    },
    privacy: {
      kicker: "06 / Dados e limites", heading: "Não transforme memória de IA em arquivo pessoal",
      body: "Crie lugares e pessoas fictícias. Apagar uma conversa, editar uma lembrança, excluir a conta e cancelar uma assinatura são ações diferentes. A ajuda oficial informa que compras feitas fora do site, como por Google Play ou SubscribeStar, não são canceladas automaticamente ao excluir a conta.",
      checks: [
        "Não use nome completo, endereço, saúde, dados financeiros ou mensagens privadas em testes de memória.",
        "Confira separadamente o que acontece com chats, personagens, personas e lembranças ao excluir a conta.",
        "Leia preço, moeda, renovação e forma de cancelamento na tela de compra que você realmente usará.",
        "Não envie fotos de pessoas reais nem retratos fotorrealistas como avatar do SpicyChat.",
        "Respeite as regras: personagens adultos e fictícios, interações consentidas e nenhum dado de terceiros.",
      ],
    },
    research: {
      kicker: "07 / Antes de escolher", heading: "Três perguntas para quem quer conversar por mais tempo",
      description: "Um bom resultado depende do tipo de história, não apenas da quantidade de personagens anunciada.",
      blocks: [
        { heading: "A ficha dá ao personagem algo para fazer?", paragraphs: [
          "Em um catálogo grande, cada perfil foi escrito com um cuidado diferente. Procure um objetivo, uma tensão compreensível e uma primeira fala que abra espaço para a sua resposta. Uma personagem com aparência marcante e nenhuma motivação pode render menos do que outra com uma apresentação simples e um conflito claro.",
          "Ao criar uma ficha, comece pequeno: duas características que afetam decisões e um limite que não deve ser ultrapassado. Teste uma conversa comum antes de uma cena dramática. Se a voz mudar sem razão, revise primeiro a definição e a abertura; não conclua imediatamente que o modelo inteiro falha.",
        ] },
        { heading: "O problema é contexto ou lembrança salva?", paragraphs: [
          "Contexto indica o que o modelo pode considerar ao produzir a próxima resposta. Uma lembrança salva tenta manter determinados fatos para além dessa janela imediata. A tabela atual do SpicyChat apresenta um nível gratuito e três pagos; Memory Manager aparece em um nível diferente de Semantic Memory 2.0. Histórico na tela, contexto e memória devem ser testados separadamente.",
          "Antes de assinar, repita a mesma cena adulta e fictícia sem trocar personagem, modelo e plano ao mesmo tempo. Registre em que momento um fato inventado deixou de influenciar a resposta e se uma lembrança salva fez diferença. Preços, limites e disponibilidade podem mudar; use a matriz oficial e a tela de compra atual como fonte final.",
        ] },
        { heading: "Você leu as regras de imagem e exclusão?", paragraphs: [
          "O posicionamento adulto do serviço não significa ausência de moderação. As regras oficiais proíbem conteúdo sexual com menores ou personagens que pareçam menores, situações sem consentimento e representações sexuais de pessoas reais identificáveis, entre outras categorias. A política atual de avatares também veta fotografias reais, recortes e imagens fotorrealistas confundíveis com pessoas.",
          "As fotos editoriais desta publicação não são sugestões de avatar. Antes de abrir uma conta, veja o que o provedor diz sobre exclusão de chats e memórias e sobre a assinatura adquirida em lojas externas. Ao comparar outra plataforma, consulte a política dela; uma promessa de conversa privada não substitui as condições de tratamento de dados.",
        ] },
      ],
    },
    blog: { kicker: "08 / Comparativos", heading: "Cinco escolhas, cinco análises", cta: "Ver os comparativos" },
    faq: {
      kicker: "09 / Perguntas frequentes", heading: "Dúvidas sobre Spicy Chat AI",
      items: [
        { question: "Spicy Chat AI serve para que tipo de conversa?", answer: "O SpicyChat oferece conversa e roleplay com personagens fictícios. Aqui avaliamos como ficha, modelo, contexto e memória afetam histórias entre adultos; não oferecemos o chat." },
        { question: "O marketing adulto significa que não há regras?", answer: "Não. O serviço publica proibições para menores, falta de consentimento, sexualização de pessoas reais e outros conteúdos. Consulte a política vigente." },
        { question: "O plano gratuito inclui as duas memórias?", answer: "Não segundo a matriz oficial consultada: Memory Manager e Semantic Memory 2.0 constam de níveis pagos diferentes. Confirme a tabela atual antes de assinar." },
        { question: "Posso usar uma selfie como avatar?", answer: "A política atual do SpicyChat não permite fotos de pessoas reais nem imagens fotorrealistas confundíveis com elas como avatar. Use arte inteiramente fictícia e não realista." },
        { question: "Qual concorrente devo comparar primeiro?", answer: "Depende do objetivo: Character.AI para regras, Janitor AI para configuração, CrushOn AI para créditos, PolyBuzz para descoberta e GirlfriendGPT para voz e imagens." },
      ],
    },
    final: { kicker: "Antes de pagar", heading: "Teste a cena, leia as regras, calcule o plano", body: "Um teste curto com fatos fictícios ajuda a escolher; confirme modelo, memória e condições atuais diretamente no serviço.", cta: "Abrir o SpicyChat oficial" },
  },
  blog: {
    title: "Comparativos de Spicy Chat AI",
    description: "Cinco análises em português do Brasil: Spicy Chat AI versus Character.AI, Janitor AI, CrushOn AI, PolyBuzz e GirlfriendGPT, com fontes e critérios distintos.",
    intro: "Cada artigo responde a uma dúvida diferente: regras de conteúdo, configuração de modelo, créditos, descoberta de personagens ou gasto com voz e imagens. As informações que mudam com frequência apontam para fontes oficiais. Nenhum texto apresenta uma prova não realizada como resultado próprio.",
    kicker: "Compare antes de assinar", listHeading: "Cinco caminhos de leitura",
  },
  info: {
    about: {
      title: "Sobre Spicy Chat AI", description: "Entenda o que esta publicação independente cobre, como compara serviços de personagens de IA e qual é sua relação com o SpicyChat.",
      kicker: "Sobre a publicação", intro: "Organizamos questões práticas para adultos que pesquisam personagens de IA e histórias por texto. Não somos o produto SpicyChat.",
      sections: [
        { heading: "O que oferecemos", paragraphs: ["Publicamos explicações sobre fichas, modelos, contexto, memória, regras de conteúdo, planos e cinco alternativas. Este site estático não cria contas, processa pagamentos, oferece chat nem gera imagens."] },
        { heading: "Independência", paragraphs: ["Não afirmamos autorização, parceria ou recomendação do SpicyChat ou das plataformas comparadas. Ao seguir um link externo, o visitante passa a usar o site e as condições do respectivo provedor."] },
        { heading: "Método", paragraphs: ["Cada comparativo tem uma pergunta própria. Separamos informação documentada de interpretação editorial e sugerimos testes que você pode reproduzir; não inventamos desempenho medido, preços fixos ou experiência pessoal."] },
      ],
    },
    contact: {
      title: "Contato", description: "Como sugerir uma correção ou apontar questão de direitos em Spicy Chat AI e qual é o estado do endereço de contato.",
      kicker: "Correções e direitos", intro: "Uma solicitação útil informa a URL, o trecho exato e uma fonte verificável. Evite anexar dados pessoais ou conversas privadas.",
      sections: [
        { heading: "Endereço previsto", paragraphs: ["O endereço previsto é support@spicychatai.fun, mas o recebimento de mensagens ainda não foi configurado. Enviar agora pode não funcionar. Esta página será atualizada quando o canal estiver operacional."] },
        { heading: "Dados que não precisamos", paragraphs: ["Não envie senha, código de acesso, documento, endereço, transcrição íntima ou imagem de terceiro para pedir uma correção. Uma referência pública e o trecho afetado bastam para iniciar uma revisão editorial."] },
      ],
    },
    "editorial-policy": {
      title: "Política editorial", description: "Critérios de fontes, correções, transparência e originalidade dos comparativos de Spicy Chat AI.",
      kicker: "Como editamos", intro: "Escrevemos para ajudar uma decisão específica, não para multiplicar páginas quase iguais com outra palavra-chave.",
      sections: [
        { heading: "Documentação e limites", paragraphs: ["Usamos primeiro a ajuda e as políticas oficiais para planos, funcionalidades e proibições. 'Ilimitado' não vira promessa de acesso a todos os modelos; uma proposta de teste não vira resultado que medimos. Quando a documentação de um concorrente não está disponível, dizemos o que precisa ser verificado na conta."] },
        { heading: "Comparações que não se repetem", paragraphs: ["Character.AI é analisado pelas regras; Janitor AI, pela identificação do domínio e configuração; CrushOn AI, pela separação entre modelo gratuito e créditos; PolyBuzz, por descoberta e dados; GirlfriendGPT, por mídia e operador declarado. Mudar o nome do concorrente não basta para criar um artigo novo."] },
        { heading: "Segurança e pessoas reais", paragraphs: ["Tratamos apenas de personagens fictícios adultos em situações consentidas. Não incentivamos sexualização de menores, imagens de pessoas reais sem consentimento ou uso de avatares proibidos. Fotos editoriais da página não devem ser enviadas ao SpicyChat."] },
        { heading: "Correções", paragraphs: ["Quando uma fonte muda, revisamos o trecho pertinente e sua data quando necessário. O endereço indicado em Contato ainda não recebe mensagens; não alegamos um atendimento ativo que não existe."] },
      ],
    },
    privacy: {
      title: "Privacidade", description: "Como Spicy Chat AI lida com hospedagem estática, Google Analytics opcional, retirada de consentimento e links externos.",
      kicker: "Privacidade deste site", intro: "Não temos contas de usuário nem armazenamos personagens, chats, áudios, fotos enviadas ou pagamentos do visitante.",
      sections: [
        { heading: "Entrega e segurança da página", paragraphs: ["O provedor de hospedagem e proteção pode processar dados técnicos da requisição, como IP, navegador, URL, horário e sinais de segurança, para exibir e proteger o site. Não recebemos as conversas ou credenciais que você fornece ao SpicyChat."] },
        { heading: "Análise apenas com permissão", paragraphs: ["Se você aceitar, carregamos Google Analytics 4 para avaliar visualizações, rolagem, cliques externos e informações gerais de dispositivo e origem. Não ativamos Google signals nem personalização de anúncios. A URL enviada omite parâmetros e fragmentos; pode haver processamento de dados fora do Brasil."] },
        { heading: "Recusa e retirada", paragraphs: ["Antes da permissão, o script de análise não é carregado. Você pode recusar ou retirar o consentimento no rodapé. A escolha é guardada por até 180 dias no armazenamento local; na retirada, apagamos os cookies analíticos acessíveis ao site. Respeitamos Global Privacy Control e Do Not Track. Retirar a permissão não elimina instantaneamente dados já processados por terceiros."] },
        { heading: "Sites externos", paragraphs: ["Ao abrir a plataforma oficial ou uma alternativa, aplicam-se as condições e políticas desse provedor para cadastro, chat, imagem, voz e compra. Não compartilhe informações reais desnecessárias em cenas fictícias."] },
      ],
    },
    terms: {
      title: "Termos de uso", description: "Escopo informativo, uso responsável e limitações dos comparativos publicados por Spicy Chat AI.",
      kicker: "Termos", intro: "Este site oferece análise editorial. Não opera nem vende os serviços de conversa que descreve.",
      sections: [
        { heading: "Informação, não garantia", paragraphs: ["Os artigos não são aconselhamento jurídico, médico, financeiro, psicológico ou relacional. Não garantimos a segurança, a adequação ou o resultado de um provedor. Verifique as condições oficiais atuais antes de se cadastrar ou pagar."] },
        { heading: "Uso responsável", paragraphs: ["Não utilize este conteúdo para coagir, assediar, se passar por outra pessoa, explorar menores, criar imagens íntimas sem consentimento ou violar direitos de imagem. As histórias comentadas envolvem adultos fictícios e consentimento."] },
        { heading: "Mudanças e autoria", paragraphs: ["Personagens, modelos, memória, preços e regras de terceiros podem mudar. Não copie em massa nossos textos, estrutura comparativa, design ou imagens nem os apresente como trabalho próprio sem autorização."] },
      ],
    },
  },
};
