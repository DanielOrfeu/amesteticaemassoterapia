export interface ProcedureModel {
  name: string
  description: string
  benefits: string
  contraindications: string
  pathName: string
}

export const procedures: ProcedureModel[] = [
  {
    name: 'Auriculoterapia',
    description: `Auriculoterapia é um método terapêutico que utiliza a
      orelha (pavilhão auricular) para avaliação e tratamento
      das disfunções orgânicas, emocionais e dores em geral.`,
    benefits: `Dores agudas e crônicas;
      Enxaqueca;
      Insônia;
      Transtornos emocionais, como ansiedade e depressão;
      Vícios, incluindo tabagismo;
      Distúrbios funcionais digestivos;
      Compulsão alimentar;
      Retenção de líquido;
      Patologias funcionais urogenitais;
      Alergias, especialmente as respiratórias;
      Problemas motores.;
      A auriculoterapia também é indicada para quem é obeso
      e/ou deseja perder peso, devido a sua capacidade de
      estimular o funcionamento intestinal e reduzir a vontade
      de comer.`,
    contraindications: `Cuidados especiais com as mulheres grávidas,
      principalmente em pontos do trato urogenital e pontos
      hormonais;
      Casos que incluem risco de vida ou doenças
      inflamatórias;
      Doenças com indicação de cirurgia;
      Inflamações na região da aurícula.`,
    pathName: 'auriculoterapia',
  },
  {
    name: 'Bambuterapia',
    description: `A bambuterapia é uma técnica onde são utilizados
      bambus e ela pode ser aplicada da cabeça aos pés. Ela é
      associada com o shiatsu (trata pontos da acupuntura),
      ayurvédica e drenagem linfática. E também é bastante
      utilizada em massagem relaxantes e modeladora`,
    benefits: `Dor muscular;
      Tensão crônica;
      Prisão de ventre;
      Músculos atrofiados;
      Stress;
      Cólica menstrual;
      Melhora da Circulação sanguínea;
      Gordura localizada;
      Celulite;
      Cansaço;
      Angústia;
      Depressão;
      Obesidade.`,
    contraindications: `Asma aguda;
      Cistite aguda (sobre a bexiga);
      Gravidez;
      Infecções agudas;
      Ferimentos;
      Doenças de pele;
      Câncer.`,
    pathName: 'bambuterapia',
  },
  {
    name: 'Drenagem Linfática Manual',
    description: `A drenagem linfática manual estimula o sistema
      linfático para eliminar líquidos e toxinas do corpo
      através de técnicas específicas nas vias linfáticas e nos
      gânglios linfáticos.`,
    benefits: `Tecidos edemaciados circulação sanguínea de
      retorno comprometida;
      Edema no período gestacional e tensão prémenstrual;
      Tratamento de pré e pós-cirurgia plástica;
      Celulite;
      Cicatrizes hipertróficas e queloidianas;
      Relaxamento de pessoas tensas;
      Dentre outras indicações.`,
    contraindications: `Infecções agudas;
      Flebites e tromboflebites;
      Neoplasias malignas (câncer) diagnosticadas e em
      atividade;
      Insuficiência cardíaca;
      Hipotensão arterial;
      Hipertireoidismo não tratado;
      Asma brônquica grave e não tratada;
      Febre.`,
    pathName: 'drenagem-linfatica-manual',
  },
  {
    name: 'Liberação Miofascial',
    description: `A liberação Miofascial é uma técnica que visa relaxar e
      alongar os músculos ao trabalhar com a fáscia através de
      pressão específica em pontos do corpo, promovendo
      maior liberdade de movimento.`,
    benefits: `Aumenta a mobilidade articular;
      Favorece execução dos movimentos;
      Diminui a sobrecarga e tensão músculo articular;
      Libera e ativa os músculos;
      Prepara a musculatura que vai ser trabalhada;
      Melhora a circulação e a respiração;
      Promove mudanças progressivas nos níveis físico e
      emocional;
      Aumenta a consciência corporal. Relaxa a
      musculatura;
      Ajuda na liberação do ácido lático;
      Ajuda a diminuir as tensões musculares;
      Ajuda na recuperação muscular e evitar dores tardias;
      Previne lesões;
      Proporciona bem-estar.`,
    contraindications: `Infecções;
      Hematomas;
      Deficiência circulatória aguda;
      Tratamento anticoagulante;
      Hipersensibilidade da pele;
      Fraturas em fase inicial;
      Câncer.`,
    pathName: 'liberacao-miofascial',
  },
  {
    name: 'Limpeza de Pele Profunda',
    description: `A limpeza de pele profunda é um procedimento estético
      para remover comedões abertos e fechados (cravos) e
      realizar esfoliação, removendo células mortas para
      revitalizar a pele.`,
    benefits: `Remoção de cravos abertos (pontos pretos) ou
      fechados (pontos brancos);
      Remoção de milium (cravos resistentes, cobertos por
      uma fina camada de pele) e pontos sebáceos;
      Desintoxicação;
      Remoção de células mortas;
      Manter a pele macia e saudável.`,
    contraindications: `Pele muito sensível;
      Peles que ficam vermelhas com facilidade;
      Peles com muita descamação;
      Peles que costumam desenvolver alergias e irritações
      com facilidade;
      Pele bronzeada.`,
    pathName: 'limpeza-de-pele-profunda',
  },
  {
    name: 'Massagem com Pedras Quentes',
    description: `A Terapia das Pedras Quentes utiliza pedras vulcânicas
      aquecidas para aplicar termoterapia e massoterapia,
      promovendo relaxamento profundo, desobstrução energética
      e revitalização muscular. Os clientes relatam aumento de
      energia e capacidade de trabalho após o tratamento.`,
    benefits: `Dores musculares;
      Tensão crônica;
      Atrofia dos músculos;
      Estresse;
      Cólicas menstruais;
      Má circulação do sangue;
      Cansaço;
      Angústia;
      Ansiedade;
      Melhora do fluxo energético do corpo;
      Mais disposição;
      Depressão.`,
    contraindications: `Febre;
      Existência de traumas, feridas abertas, contusões recentes,
      roturas musculares, entorses e queimaduras;
      Tumores; Doenças circulatórias (inflamação das veias,
      veias varicosas, flebites, tromboses);
      Melanoma;
      Hemofilia;
      Doenças de pele infecciosas (infecções bacteriológicas, de
      fungos, virais e herpes) – Somente na região afetada;
      Osteoporose grave;
      Gravidez nos três primeiros meses de gestação. No tempo
      restante da gravidez, as massagens se realizarão com
      laudo e prescrição médica.
      Hipertensão arterial.;
      Câncer;
      Hematomas graves, Imediatamente após operações
      cirúrgicas.`,
    pathName: 'massagem-com-pedras-quentes',
  },
  {
    name: 'Massagem com Velas (Candle Massage)',
    description: `A Candle Massage utiliza velas derretidas cosméticas, atóxicas
      e ricas em óleos essenciais nutritivos, vitamina E e emolientes.
      Aplicada quente no corpo com técnicas de massagem,
      proporciona relaxamento, bem-estar e os benefícios da
      aromaterapia.`,
    benefits: `Alívio imediato das tensões musculares;
      Melhoria do tônus muscular;
      Hidratação da pele por até 15 dias;
      Melhoria da vascularização;
      Diminuição de cãibras;
      Redução da retenção de líquidos;
      Relaxamento muscular;
      Alívio imediato das dores em geral;
      Melhoria das dores de cabeça;
      Melhoria da qualidade do sono;
      Melhoria do sistema endócrino, auxiliando na digestão dos
      alimentos;
      Melhoria do sistema respiratório, ajudando a soltar e
      eliminar o muco e a secreção brônquica`,
    contraindications: `Feridas na pele;
      Feridas ou traumas na coluna vertebral (massagens só
      com autorização médica);
      Febre, infecções em geral (a massagem poderá ser feita
      pelo menos após uma semana e já sem febre);
      Trombose Venosa Profunda (TVP);
      Pressão arterial elevada sem estar controlada, ou seja, a
      pessoa não está sendo seguida por um médico,
      consequentemente, não está a ser medicada;
      Gravidez: Grávidas até os primeiros 3 meses
      Grávidas com pré-eclâmpsia (aumento da pressão arterial
      na gestação).;
      Diabetes Descompensada;
      Doenças Oncológicas.`,
    pathName: 'massagem-com-velas-candle-massage',
  },
  {
    name: 'Massagem Desportiva',
    description: `A massagem desportiva é usada para preparar e recuperar músculos
      de atletas, prevenindo lesões e aliviando dores relacionadas ao treino.
      Recomenda-se sua aplicação tanto nos dias de treino quanto em dias
      intercalados, além de ser benéfica para relaxar os músculos após
      competições intensas.`,
    benefits: `Previne lesões;
      Reduz espasmos musculares, edemas e processos inflamatórios;
      Prepara a musculatura para o exercício;
      Elimina as toxinas da musculatura;
      Previne lesões da musculatura e tendões;
      Tonifica o tecido muscular;
      Estimula a produção de adrenalina;
      Melhora a qualidade do sono e diminui a ansiedade;
      Alivia as dores pós-treino;
      Melhora a fadiga e a recuperação muscular;
      Melhora a circulação sanguínea e o transporte de oxigênio e
      nutrientes para os músculos;
      Tem um efeito relaxante ou estimulante no sistema nervoso central;
      Diminui a ansiedade e melhora a qualidade do sono.`,
    contraindications: `Febre;
      Existência de traumas, feridas abertas, contusões recentes, roturas
      musculares, entorses e queimaduras;
      Tumores; Doenças circulatórias (inflamação das veias, veias
      varicosas, flebites, tromboses);
      Melanoma;
      Hemofilia;
      Doenças de pele infecciosas (infecções bacteriológicas, de fungos,
      virais e herpes) - Somente na região afetada;
      Osteoporose grave;
      Gravidez nos três primeiros meses de gestação. No tempo restante
      da gravidez, as massagens se realizarão com laudo e prescrição
      médica.;
      Hipertensão arterial.;
      Câncer;
      Pessoas com hematomas graves, Imediatamente após operações
      cirúrgicas;`,
    pathName: 'massagem-desportiva',
  },
  {
    name: 'Massagem Modeladora',
    description: `A massagem modeladora atua nas áreas de acúmulo de
      gordura para reduzir medidas, aumentando a
      temperatura local e acelerando o metabolismo celular.
      Utiliza pressão intensa para alcançar as camadas
      profundas e reduzir a aparência da celulite.`,
    benefits: `Reduzir medidas;
      Modelar o corpo;
      Ativar o metabolismo;
      Aumentar a circulação sanguínea;
      Reduzir o inchaço`,
    contraindications: `Varizes;
      Osteoporose;
      Hipertensão;
      Gravidez;
      Pinos ou placas metálicas no corpo`,
    pathName: 'massagem-modeladora',
  },
  {
    name: 'Massagem para Melhor Idade',
    description: `A massagem para a melhor idade oferece todos os
      benefícios já conhecidos pelos clientes mais jovens, em
      particular a massagem para idosos é ainda mais eficaz
      devido aos desafios tanto emocionais quanto físicos que
      os idosos experimentam`,
    benefits: `Melhorar a circulação sanguínea e linfática;
      Estimular a produção de colágeno na pele
      (elasticidade e hidratação);
      Aliviar as dores em geral;
      Fortalecimento muscular (falta de força e
      incontinência);
      Melhorar a consciência corporal (dificuldade de
      equilíbrio e reflexos);
      Auxiliar os movimentos peristálticos (funcionamento
      gastrointestinal);
      Melhorar a autoestima;
      Reduzir sintomas de estresse e ansiedade;
      Melhorar a qualidade do sono;
      Aumentar a capacidade e amplitude dos movimentos;
      Diminuir os sintomas da depressão`,
    contraindications: `Febres;
      Hemorragias;
      Descalcificações graves (osteoporose severa);
      Flebite;
      Trombose;
      Fraturas;
      Câncer;
      Feridas abertas;
      Queimaduras recentes.`,
    pathName: 'massagem-para-melhor-idade',
  },
  {
    name: 'Massagem Terapêutica',
    description: `A massagem terapêutica tonifica músculos, equilibra órgãos internos e
      sistema nervoso, aumenta a circulação e respiração celular, além de
      promover relaxamento e bem-estar. A liberação de ocitocina durante o
      tratamento combate tensão muscular, estresse, melhora a função
      intestinal e a pressão arterial.`,
    benefits: `Controle do estresse e problemas emocionais;
      Tratamento da ansiedade;
      Casos de fadiga e insônia;
      Normalização do humor;
      Controle dos batimentos cardíacos;
      Sensibilidade a dor;
      Alívio de tensões;
      Liberação de hormônios que promovem bem-estar;
      Melhora da qualidade de vida;
      Melhora da elasticidade dos músculos;
      Diminuição do cansaço físico e mental;
      Melhora da circulação sanguínea;
      Prevenção de problemas musculares;
      Melhora do sistema nervoso;
      Eliminação de resíduos metabólicos e toxinas;
      Tratamento do envelhecimento precoce da pele;
      Acelera o metabolismo e melhora da digestão;
      Equilíbrio do funcionamento do intestino;
      Tratamento de artroses.`,
    contraindications: `Infecções;
      Lesões ou pequenos traumas no corpo;
      Feridas abertas;
      Fraturas ósseas;
      Hemorragias;
      Descalcificações graves - osteoporose;
      Trombose;
      Feridas abertas;
      Queimaduras recentes;
      Câncer;
      Embolias;
      Alterações cardíacas e vasculares;
      Doenças contagiosas`,
    pathName: 'massagem-terapeutica',
  },
  {
    name: 'Quick Massage',
    description: `Quick Massage é uma técnica de massagem realizada em uma cadeira, 
      especialmente projetada para essa finalidade, onde a pessoa fica em uma posição 
      confortável e relaxante, proporcionado logo no primeiro atendimento, o alívio 
      imediato de dores musculares das regiões cervical, dorsal, lombar e membros superiores 
      e das tensões e cansaço do dia-a-dia.`,
    benefits: `Melhora a produtividade diária;
      Músculos fatigados; 
      Lesão por movimentos repetitivos (LER); 
      Dores de cabeça; 
      Tensão muscular;
      Estresse mental; 
      Estresse emocional;
      Ansiedade; 
      Dificuldade de concentração; 
      Mau humor; 
      Má qualidade do sono; 
      Para promover bem estar; 
      Indisposição; Baixa produtividade.`,
    contraindications: `Sintoma de febre alta;
      Problemas de pele (queimadura, ferimentos, dermatite);
      HIV;
      Hepatite;
      Câncer;
      Lesões recentes (menos de 24 horas);
      Mulheres grávidas (até o 3° mês de gestação);
      Pessoas alcoolizadas ou drogadas;`,
    pathName: 'quick-massage',
  },
  {
    name: 'Reflexologia Podal',
    description: `A Reflexologia podal parte da evidência que os nossos pés
      refletem o nosso corpo inteiro. Quando se pressiona certos
      pontos do pé, isso tem um efeito positivo sobre o membro,
      órgão, glândula, músculos, tendões o articulações
      correspondente a eles`,
    benefits: `Stress (uma fonte de muitos problemas de saúde!);
      Preocupações;
      Dores de cabeça;
      Insônias;
      Dores musculares , musculoesqueléticas e articulares;
      Inflamações;
      Problemas digestivos e intestinais (constipação e má
      digestão);
      Doenças respiratórias ( bronquite e asma);
      Desequilíbrios emocionais;`,
    contraindications: `Feridas, abcessos, alergias na pele ou dermatites nos
      pés ou nas pernas;
      Flebites nas pernas;
      Varizes nas pernas e pés;
      Trombose ou fraturas recente nos pés ou nas pernas;
      Infecções graves;
      Febre;
      Cólicas com dores extremas;
      Queixas que precisam uma cirurgia;
      Edemas em membros inferiores ( pernas e pés);
      Câncer;
      Problemas vasculares e cardiovasculares Ex:
      portadores de marcapasso;`,
    pathName: 'reflexologia-podal',
  },
  {
    name: 'Shiatsu',
    description: `No Shiatsu, o terapeuta utiliza pressão em pontos
      específicos para aliviar tensões físicas e promover o fluxo
      harmonioso da energia vital ao longo dos meridianos de
      acupuntura, proporcionando bem-estar físico e
      energético.`,
    benefits: `Dores musculares (tendinites, fibromialgia etc);
      Doenças respiratórias (asma, bronquite, rinite, sinusite
      ou resfriados);
      Problemas circulatórios (varizes, arritmia, hipertensão
      arterial), digestivos, urinários e até reprodutore;
      Alívio dos sintomas da enxaqueca, artrose, artrite
      reumatoide, depressão e síndrome do pânico.`,
    contraindications: `Início de gravidez (até terceiro mês);
      Doenças acompanhadas de febre;
      Imunidade baixa;
      Doenças contagiosas;
      Em casos de fraturas ou luxações.`,
    pathName: 'shiatsu',
  },
  {
    name: 'Spa dos Pés',
    description: `O Spa dos pés é muito indicado para manter a saúde dos
      pés em dia, pois ele oferece muitas vantagens,
      funcionando como uma forma de tratamento, como
      também é um ótimo aliado para prevenir problemas na
      região.`,
    benefits: `Proporciona relaxamento;
      Atua na circulação sanguínea;
      Alivia as dores;
      Promove muita maciez;
      Alivia as calosidades`,
    contraindications: `Tratamento oncológico ativo;
      3 primeiros meses de gestação;
      Alterações cardíacas não controladas;
      Hanseníase;
      Diabetes não controlada;
      Fraturas expostas;
      Osteoporose não medicada;
      Febre;
      Sintomas gripais;
      Processos infecciosos;
      Varizes expostas;
      Trombose;
      Hipertensão não controlada;
      Doenças de pele;
      Alergias e lesões de pele em geral.`,
    pathName: 'spa-dos-pes',
  },
  {
    name: 'Ventosaterapia',
    description: `A Ventosaterapia utiliza ventosas para criar vácuo na pele,
      estimulando a circulação sanguínea e eliminando toxinas,
      conforme a Medicina Tradicional Chinesa. Promove
      melhoria na imunidade, oxigenação celular e saúde da
      pele.`,
    benefits: `Eliminação de dores nas costas devido tensão
      muscular ou contraturas;
      Desintoxicação do organismo;
      Alívio de dores musculares, abdominais e nas
      articulações;
      Redução do inchaço nos braços, pernas e pés;
      Alívio da dor de cabeça;
      Relaxamento do corpo e da mente;
      Aumento da circulação sanguínea local;
      Alívio de problemas digestivos;
      Controle da pressão arterial;
      Complemento para o tratamento de celulites.`,
    contraindications: `Varizes, trombose, tromboflebite ou flebite;
      distúrbios hemorrágicos;
      Febre;
      Feridas na pele ou fratura no local a ser tratado;
      Gravidez`,
    pathName: 'ventosaterapia',
  },
]
