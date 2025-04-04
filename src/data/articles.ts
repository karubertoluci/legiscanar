export interface ArticleImpact {
  type: 'positive' | 'negative' | 'neutral';
  description: string;
  segments: string[];
  severity?: 'low' | 'medium' | 'high';
}

export interface ArticleMetadata {
  bookId?: 'I' | 'II' | 'III' | 'IV';
  bookTitle?: string;
  title?: string;
  chapter?: string;
  section?: string;
  subsection?: string;
  relevanceScore?: number;
  impactType?: 'positive' | 'negative' | 'neutral';
}

export interface Article {
  id: string;
  number: string;
  title: string;
  originalText: string;
  simplifiedText: string;
  impacts: ArticleImpact[];
  metadata?: ArticleMetadata;
}

export const articles: Article[] = [
  {
    id: "art1",
    number: "Art. 1º",
    title: "Disposições Gerais da Contribuição sobre Bens e Serviços",
    originalText: "Fica instituída, nos termos do art. 153, VIII, da Constituição Federal, a Contribuição sobre Bens e Serviços (CBS), de competência da União.",
    simplifiedText: "Este artigo cria um novo imposto federal chamado Contribuição sobre Bens e Serviços (CBS), que será cobrado pelo governo federal.",
    impacts: [
      {
        type: 'neutral',
        description: "Substituição de tributos anteriores por um novo modelo unificado",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"],
        severity: 'medium'
      }
    ],
    metadata: {
      bookId: 'I',
      bookTitle: 'CBS',
      title: 'NORMAS GERAIS',
      chapter: 'Disposições Preliminares',
      relevanceScore: 65,
      impactType: 'neutral'
    }
  },
  {
    id: "art2",
    number: "Art. 2º",
    title: "Fato Gerador da CBS",
    originalText: "Constitui fato gerador da CBS a realização de operações com bens e serviços em território nacional, ainda que sem caráter habitual, independentemente de sua denominação ou classificação contábil.",
    simplifiedText: "A CBS incidirá sobre qualquer operação com bens e serviços realizada no Brasil, não importando se é uma atividade frequente ou como ela é classificada na contabilidade.",
    impacts: [
      {
        type: 'negative',
        description: "Ampliação da base de incidência tributária para operações não habituais",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao"],
        severity: 'high'
      },
      {
        type: 'positive',
        description: "Uniformização de critérios independente da classificação contábil",
        segments: ["tecnologia", "saude", "educacao", "financeiro", "transporte"],
        severity: 'medium'
      }
    ]
  },
  {
    id: "art3",
    number: "Art. 3º",
    title: "Não Incidência da CBS",
    originalText: "A CBS não incide sobre: I - operações de exportação, assegurado o direito a manutenção dos créditos; II - operações com ouro, quando definido em lei como ativo financeiro ou instrumento cambial...",
    simplifiedText: "A CBS não será cobrada em alguns casos, como exportações (mantendo-se os créditos) e operações com ouro quando usado como ativo financeiro.",
    impacts: [
      {
        type: 'positive',
        description: "Desoneração das exportações mantendo o direito a créditos",
        segments: ["industria", "agronegocio", "tecnologia"]
      },
      {
        type: 'positive',
        description: "Não incidência sobre operações com ouro como ativo financeiro",
        segments: ["financeiro"]
      }
    ]
  },
  {
    id: "art9",
    number: "Art. 9º",
    title: "Alíquotas da CBS",
    originalText: "A alíquota da CBS será de 26,5% (vinte e seis inteiros e cinco décimos por cento).",
    simplifiedText: "A alíquota padrão da CBS será de 26,5%.",
    impacts: [
      {
        type: 'negative',
        description: "Alíquota elevada em comparação com tributos anteriores",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      }
    ]
  },
  {
    id: "art10",
    number: "Art. 10",
    title: "Alíquotas Reduzidas",
    originalText: "São reduzidas em 60% (sessenta por cento) as alíquotas da CBS incidentes sobre as operações com bens e serviços classificados nos seguintes códigos da Nomenclatura Comum do Mercosul...",
    simplifiedText: "Alguns produtos e serviços terão uma redução de 60% na alíquota da CBS, como alimentos essenciais, medicamentos, insumos agrícolas, entre outros.",
    impacts: [
      {
        type: 'positive',
        description: "Redução significativa da carga tributária para setores essenciais",
        segments: ["comercio_varejo", "agronegocio", "saude"]
      }
    ]
  },
  {
    id: "art22",
    number: "Art. 22",
    title: "Regime Específico para Micro e Pequenas Empresas",
    originalText: "As microempresas e empresas de pequeno porte optantes pelo Regime Especial Unificado de Arrecadação de Tributos e Contribuições (Simples Nacional) não estão sujeitas à CBS...",
    simplifiedText: "Micro e pequenas empresas que optam pelo Simples Nacional não precisarão pagar a CBS diretamente, pois continuarão no sistema simplificado.",
    impacts: [
      {
        type: 'positive',
        description: "Manutenção do regime simplificado para pequenas empresas",
        segments: ["comercio_varejo", "servicos", "tecnologia", "saude", "educacao"]
      }
    ]
  },
  {
    id: "art30",
    number: "Art. 30",
    title: "Direito ao Crédito",
    originalText: "O contribuinte tem direito a créditos idênticos ao valor da CBS incidente sobre bens e serviços adquiridos, inclusive os destinados a uso, consumo ou ativo imobilizado...",
    simplifiedText: "O contribuinte poderá usar como crédito o valor da CBS que foi pago nas suas compras, incluindo itens para uso, consumo ou bens duráveis (ativo imobilizado).",
    impacts: [
      {
        type: 'positive',
        description: "Ampliação do direito a crédito para todas as aquisições",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      },
      {
        type: 'positive',
        description: "Inclusão de créditos sobre bens para uso e consumo e ativo imobilizado",
        segments: ["industria", "construcao"]
      }
    ]
  },
  {
    id: "art95",
    number: "Art. 95",
    title: "Transição e Vigência",
    originalText: "Esta Lei Complementar entra em vigor na data de sua publicação e produz efeitos a partir de 1º de janeiro de 2025.",
    simplifiedText: "A nova lei entra em vigor imediatamente após publicação, mas só começará a produzir efeitos práticos a partir de 1º de janeiro de 2025.",
    impacts: [
      {
        type: 'neutral',
        description: "Prazo razoável para adaptação das empresas ao novo sistema",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      }
    ]
  },
  {
    id: "art5",
    number: "Art. 5º",
    title: "Contribuinte da CBS",
    originalText: "É contribuinte da CBS a pessoa física ou jurídica que realize operações com bens e serviços, ainda que essas operações se destinem a fins alheios à atividade empresarial.",
    simplifiedText: "Qualquer pessoa ou empresa que realize operações com bens e serviços será contribuinte da CBS, mesmo que essas operações não façam parte da sua atividade principal.",
    impacts: [
      {
        type: 'negative',
        description: "Ampliação do conceito de contribuinte, incluindo operações não empresariais",
        segments: ["comercio_varejo", "servicos", "educacao", "financeiro"]
      }
    ]
  },
  {
    id: "art12",
    number: "Art. 12",
    title: "Isenção para Medicamentos",
    originalText: "São isentas da CBS as operações com medicamentos destinados ao tratamento de doenças graves, conforme relação definida em ato do Poder Executivo.",
    simplifiedText: "Medicamentos para tratamento de doenças graves serão isentos da CBS, de acordo com lista a ser definida pelo governo.",
    impacts: [
      {
        type: 'positive',
        description: "Redução de custos para o setor de saúde em medicamentos essenciais",
        segments: ["saude", "comercio_varejo"]
      }
    ]
  },
  {
    id: "art15",
    number: "Art. 15",
    title: "Base de Cálculo da CBS",
    originalText: "A base de cálculo da CBS é o valor da operação com bens e serviços, assim entendido o preço do bem ou serviço, incluídos os valores de seguros, de frete e outros encargos cobrados do adquirente.",
    simplifiedText: "A base para calcular a CBS será o valor total da operação, incluindo o preço do produto ou serviço, seguros, fretes e outros encargos cobrados do cliente.",
    impacts: [
      {
        type: 'negative',
        description: "Inclusão de todos os encargos na base de cálculo pode aumentar o valor tributado",
        segments: ["comercio_varejo", "transporte", "industria"]
      }
    ]
  },
  {
    id: "art25",
    number: "Art. 25",
    title: "Regimes Especiais de Apuração",
    originalText: "Para efeitos de apuração da CBS, aplicam-se regimes especiais aos seguintes setores: I - serviços financeiros; II - seguros; III - operações com bens imóveis; IV - cooperativas; V - serviços de hotelaria, restaurantes e similares.",
    simplifiedText: "Alguns setores terão regras especiais para calcular a CBS, como serviços financeiros, seguros, imóveis, cooperativas e serviços de alimentação e hotelaria.",
    impacts: [
      {
        type: 'positive',
        description: "Reconhecimento das particularidades operacionais de cada setor",
        segments: ["financeiro", "servicos", "construcao"]
      }
    ]
  },
  {
    id: "art40",
    number: "Art. 40",
    title: "Recolhimento do IBS",
    originalText: "O Imposto sobre Bens e Serviços (IBS), de competência de Estados, Distrito Federal e Municípios, será recolhido de forma unificada por meio de sistema nacional integrado, assegurada a distribuição da receita aos entes federados.",
    simplifiedText: "O IBS (imposto estadual e municipal) será pago em um sistema unificado nacional, e depois a receita será distribuída para estados e municípios.",
    impacts: [
      {
        type: 'positive',
        description: "Simplificação do recolhimento com sistema único em vez de múltiplos sistemas estaduais e municipais",
        segments: ["comercio_varejo", "industria", "servicos", "tecnologia"]
      }
    ]
  },
  {
    id: "art45",
    number: "Art. 45",
    title: "Período de Apuração Mensal",
    originalText: "O período de apuração da CBS e do IBS será mensal, com recolhimento até o vigésimo dia do mês subsequente ao de ocorrência do fato gerador.",
    simplifiedText: "A CBS e o IBS serão apurados mensalmente e o pagamento deve ser feito até o dia 20 do mês seguinte.",
    impacts: [
      {
        type: 'neutral',
        description: "Manutenção do período mensal já utilizado em outros tributos",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      }
    ]
  },
  {
    id: "art50",
    number: "Art. 50",
    title: "Substituição Tributária",
    originalText: "A lei complementar poderá estabelecer casos de substituição tributária, em que o recolhimento da CBS e do IBS será feito por contribuinte distinto daquele que realizou a operação tributada.",
    simplifiedText: "Em alguns casos, uma empresa pode ser responsável por pagar os impostos no lugar de outra (substituição tributária), conforme regras a serem definidas.",
    impacts: [
      {
        type: 'negative',
        description: "Potencial aumento de complexidade e fluxo de caixa para empresas substitutos tributários",
        segments: ["industria", "comercio_varejo"]
      }
    ]
  },
  {
    id: "art60",
    number: "Art. 60",
    title: "Escrituração Digital Centralizada",
    originalText: "A escrituração fiscal e contábil dos contribuintes será realizada de forma digital e centralizada, através do Sistema Público de Escrituração Digital (SPED).",
    simplifiedText: "As empresas deverão manter seus registros fiscais e contábeis de forma digital no sistema SPED do governo.",
    impacts: [
      {
        type: 'positive',
        description: "Unificação dos sistemas de escrituração reduz custos operacionais",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      },
      {
        type: 'negative',
        description: "Necessidade de adaptação e investimento em sistemas compatíveis",
        segments: ["comercio_varejo", "servicos", "educacao"]
      }
    ]
  },
  {
    id: "art70",
    number: "Art. 70",
    title: "Comitê Gestor da Administração Tributária",
    originalText: "Fica instituído o Comitê Gestor da Administração Tributária Nacional, composto por representantes da União, dos Estados, do Distrito Federal e dos Municípios, com atribuição de regulamentar e gerir a arrecadação centralizada do IBS.",
    simplifiedText: "Será criado um comitê gestor com representantes de todos os níveis de governo para administrar o sistema de arrecadação do novo IBS.",
    impacts: [
      {
        type: 'neutral',
        description: "Criação de órgão de governança compartilhada entre os entes federativos",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      }
    ]
  },
  {
    id: "art85",
    number: "Art. 85",
    title: "Cashback para População de Baixa Renda",
    originalText: "A lei poderá estabelecer mecanismo de devolução de tributos a pessoas físicas, com o objetivo de reduzir as desigualdades de carga tributária entre contribuintes em diferentes faixas de renda.",
    simplifiedText: "O governo poderá devolver parte dos impostos para pessoas de baixa renda, para reduzir a desigualdade tributária.",
    impacts: [
      {
        type: 'positive',
        description: "Potencial aumento do consumo entre famílias de baixa renda beneficiadas pelo cashback",
        segments: ["comercio_varejo", "servicos"]
      }
    ]
  },
  {
    id: "art90",
    number: "Art. 90",
    title: "Regras de Transição",
    originalText: "Fica estabelecido o período de transição de 8 (oito) anos para a completa substituição dos tributos atuais pela CBS e pelo IBS, com percentuais progressivos de implementação conforme cronograma anexo.",
    simplifiedText: "A substituição dos impostos atuais pelos novos (CBS e IBS) será gradual, ao longo de 8 anos, seguindo um cronograma definido.",
    impacts: [
      {
        type: 'positive',
        description: "Período longo para adaptação reduz impactos imediatos nas empresas",
        segments: ["comercio_varejo", "industria", "servicos", "agronegocio", "construcao", "tecnologia", "saude", "educacao", "financeiro", "transporte"]
      }
    ]
  },
  {
    id: "art35",
    number: "Art. 35",
    title: "Imposto Seletivo",
    originalText: "Fica instituído o Imposto Seletivo, que incidirá sobre operações com bens e serviços prejudiciais à saúde ou ao meio ambiente, nos termos de lei complementar.",
    simplifiedText: "Será criado um imposto adicional (Imposto Seletivo) que irá incidir sobre produtos prejudiciais à saúde ou ao meio ambiente, como cigarros, bebidas alcoólicas e combustíveis fósseis.",
    impacts: [
      {
        type: 'negative',
        description: "Aumento da carga tributária para produtos considerados prejudiciais",
        segments: ["industria", "agronegocio"]
      }
    ]
  }
];
