export interface ProcedureModel {
  name: string
  description: string
  indications?: string
  benefits?: string
  contraindications: string
  pathName: string
}

export const procedures: ProcedureModel[] = [
  {
    name: 'Auriculoterapia',
    description:
      'Auriculoterapia é um método terapêutico que utiliza a orelha(pavilhão auricular) para avaliação e tratamento das disfunções orgânicas, emocionais e dores em geral.',
    indications: `Dores agudas e crônicas;
      Enxaqueca;
      Insônia;
      Transtornos emocionais, como ansiedade e depressão;
      Vícios, incluindo tabagismo;
      Distúrbios funcionais digestivos;
      Compulsão alimentar;
      Retenção de líquido;
      Patologias funcionais urogenitais;
      Alergias, especialmente as respiratórias;
      Problemas motores.
      A auriculoterapia também é indicada para quem é obeso
      e/ou deseja perder peso, devido a sua capacidade de
      estimular o funcionamento intestinal e reduzir a vontade
      de comer.`,
    contraindications: `Cuidados especiais com as mulheres grávidas,
      principalmente em pontos do trato urogenital e pontos
      hormonais. É contraindicado para casos que incluem
      risco de vida ou doenças inflamatórias, para doenças
      com indicação de cirurgia e inflamações na região da
      aurícula.`,
    pathName: 'auriculoterapia',
  },
  {
    name: 'Bambuterapia',
    description:
      'A bambuterapia é uma técnica onde são utilizados bambus e ela pode ser aplicada da cabeça aos pés. Ela é associada com o shiatsu (trata pontos da acupuntura), ayurvédica e drenagem linfática. E também é bastante utilizada em massagem relaxantes e modeladora',
    indications: `Dor muscular, Tensão crônica, Prisão de ventre, Músculos
      atrofiados, Stress, Cólica menstrual, Melhora da
      Circulação sanguínea, Gordura localizada, Celulite,
      Cansaço, Angústia, Depressão e Obesidade`,
    contraindications: `Asma aguda, Cistite aguda (sobre a bexiga), Gravidez,
      Infecções agudas, Ferimentos, Doenças de pele e
      câncer.`,
    pathName: 'bambuterapia',
  },
  {
    name: 'Drenagem Linfática Manual',
    description:
      'A drenagem linfática manual estimula o sistema linfático para eliminar líquidos e toxinas do corpo através de técnicas específicas nas vias linfáticas e nos gânglios linfáticos.',
    indications: `Tecidos edemaciados, circulação sanguínea de retorno
      comprometida, edema no período gestacional e tensão
      pré-menstrual, tratamento de pré e pós-cirurgia plástica,
      tratamento pós-lipoaspiração, celulite, cicatrizes
      hipertróficas e queloidianas, relaxamento de pessoas
      tensas, dentre outras indicações.`,
    contraindications: `Infecções agudas, flebites e tromboflebites, neoplasias
      malignas (câncer) diagnosticadas e em atividade,
      insuficiência cardíaca, hipotensão arterial,
      hipertireoidismo não tratado, asma brônquica grave e
      não tratada e febre.`,
    pathName: 'drenagem-linfatica-manual',
  },
  {
    name: 'Liberação Miofascial',
    description:
      'A liberação miofascial é uma técnica que visa relaxar e alongar os músculos ao trabalhar com a fáscia através de pressão específica em pontos do corpo, promovendo maior liberdade de movimento.',
    indications: `Primeiramente, aumenta a mobilidade articular;
      Posteriormente, favorece execução dos movimentos;
      Diminui a sobrecarga e tensão músculo articular;
      Libera e ativa os músculos;
      Prepara a musculatura que vai ser trabalhada;
      Melhora a circulação e a respiração
      Promove mudanças progressivas nos níveis físico e
      emocional;
      Aumenta a consciência corporal. Relaxa a musculatura;
      Ajuda na liberação do ácido lático;
      Ajuda a diminuir as tensões musculares;
      Ajuda na recuperação muscular e evitar dores tardias;
      Previne lesões;
      Por fim, proporciona bem-estar.`,
    contraindications: `Infecções; Hematomas; Deficiência circulatória aguda;
      Tratamento anticoagulante; Hipersensibilidade da pele;
      por fim, as fraturas em fase inicial, câncer`,
    pathName: 'liberacao-miofascial',
  },
  {
    name: 'Limpeza de Pele Profunda',
    description:
      'A limpeza de pele profunda é um procedimento estético para remover comedões abertos e fechados (cravos) e realizar esfoliação, removendo células mortas para revitalizar a pele.',
    indications: `Indicada, principalmente, para remoção de cravos
      abertos (pontos pretos) ou fechados (pontos brancos),
      remoção de milio (cravos resistentes, cobertos por uma
      fina camada de pele) e pontos sebáceos. Serve também
      para desintoxicar, remover as células mortas e manter a
      pele macia e saudável.`,
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
    description:
      'A Terapia das Pedras Quentes utiliza pedras vulcânicas aquecidas para aplicar termoterapia e massoterapia, promovendo relaxamento profundo, desobstrução energética e revitalização muscular. Os clientes relatam aumento de energia e capacidade de trabalho após o tratamento.',
    indications: `A massagem com pedras quentes é indicada para
      dores musculares, tensão crônica, atrofia dos músculos,
      estresse, cólicas menstruais, má circulação do sangue,
      cansaço; angústia e depressão.`,
    contraindications: `Temperatura do corpo superior a 38 graus; Existência de
      traumas, feridas abertas, contusões recentes, roturas
      musculares, entorses e queimaduras; Tumores; Doenças
      circulatórias (veias varicosas, flebites, tromboses);
      Melanoma; Hemofilia; Doenças de pele infecciosas
      (infecções bacteriológicas, de fungos, virais e herpes) –
      Somente na região afetada; Embolias; Flebites,
      inflamação das veias, percebemos, pois, causa edema,
      vermelhidão ou roxeamento e incapacidade de
      movimentação da área afetada pela dor; Gânglios
      inchados; Fraturas ósseas não consistentes, ;
      Osteoporose grave; Gravidez nos três primeiros meses
      de gestação. No tempo restante da gravidez, as
      massagens se realizarão com laudo e prescrição
      médica.
      Hipertensão arterial. câncer; Pessoas com taquicardia,
      aumento da frequência do batimento do coração;
      Pessoas com hematomas graves; Imediatamente após
      operações cirúrgicas;`,
    pathName: 'massagem-com-pedras-quentes',
  },
  {
    name: 'Massagem com Velas (Candle Massage)',
    description:
      'A Candle Massage utiliza velas derretidas cosméticas, atóxicas e ricas em óleos essenciais nutritivos, vitamina E e emolientes. Aplicada quente no corpo com técnicas de massagem, proporciona relaxamento, bem-estar e os benefícios da aromaterapia.',
    benefits: `Alívio imediato das tensões musculares
      Melhoria do tônus muscular
      Hidratação da pele por até 15 dias
      Melhoria da vascularização
      Diminuição de cãibras
      Redução da retenção de líquidos
      Relaxamento muscular
      Alívio imediato das dores em geral
      Melhoria das dores de cabeça
      Melhoria da qualidade do sono
      Melhoria do sistema endócrino, auxiliando na digestão
      dos alimentos
      Melhoria do sistema respiratório, ajudando a soltar e
      eliminar o muco e a secreção brônquica`,
    contraindications: ` Feridas na pele; feridas ou traumas
      na coluna vertebral (massagens só com autorização
      médica);
      Febre, infecções em geral (a massagem poderá ser
      feita pelo menos após uma semana e já sem febre);
      Trombose Venosa Profunda (TVP)
      Pressão arterial elevada sem estar controlada, ou seja,
      a pessoa não está sendo seguida por um médico,
      consequentemente, não está a ser medicada;
      Gravidez: Grávidas até os primeiros 3 meses
      Grávidas com pré-eclâmpsia (aumento da prensão
      arterial na gestação).
      Diabetes Descompensada
      Doenças Oncológicas.`,
    pathName: 'massagem-com-velas-candle-massage',
  },
  {
    name: 'Massagem Desportiva',
    description:
      'A massagem desportiva é usada para preparar e recuperar músculos de atletas, prevenindo lesões e aliviando dores relacionadas ao treino. Recomenda-se sua aplicação tanto nos dias de treino quanto em dias intercalados, além de ser benéfica para relaxar os músculos após competições intensas.',
    indications: `Previne lesões;
      Reduz espasmos musculares, edemas e processos
      inflamatórios; Prepara a musculatura para o exercício;
      Elimina as toxinas da musculatura;
      Previne lesões da musculatura e tendões;
      Tonifica o tecido muscular;
      Estimula a produção de adrenalina;
      Melhora a qualidade do sono e diminui a ansiedade;
      Alivia as dores pós-treino;
      Melhora a fadiga e a recuperação muscular;
      Melhora a circulação sanguínea e o transporte de
      oxigênio e nutrientes para os músculos;
      Tem um efeito relaxante ou estimulante no sistema
      nervoso central;
      Diminui a ansiedade e melhora a qualidade do sono.`,
    contraindications: `Presença de tumores;Doenças circulatórias como veias
      varicosas, flebites e tromboses, pois causam edemas,
      vermelhidão ou edemas roxos, resultando na
      incapacidade de movimento da área;
      Febre, quando a temperatura do corpo está superior a
      38 graus; Melanoma;Hemofilia;Embolias;Traumas e
      feridas abertas;Doenças infecciosas de pele, como:
      bacteriológicas, fungos, virais e herpes. Nesse caso deve
      ser evitado somente na região de aplicação da
      massagem;Gânglios inchados;Reação negativa ao
      tratamento; Contusões recentes, roturas musculares e
      entorses;Fratura óssea que se encontra móvel, pois o
      risco de aumentar a lesão aumenta;Osteoporose
      avançada, pode ocasionar em fraturas ósseas;
      Queimaduras; Operação cirúrgica recente; Hematomas
      graves; Câncer; Na presença de aumento da frequência
      do batimento cardíaco – taquicardia; Gravidez;
      Hipertensão.`,
    pathName: 'massagem-desportiva',
  },
  {
    name: 'Massagem Modeladora',
    description:
      'A massagem modeladora atua nas áreas de acúmulo de gordura para reduzir medidas, aumentando a temperatura local e acelerando o metabolismo celular. Utiliza pressão intensa para alcançar as camadas profundas e reduzir a aparência da celulite.',
    indications: `Reduzir medidas
      Modelar o corpo
      Ativar o metabolismo
      Aumentar a circulação sanguínea
      Reduzir o inchaço`,
    contraindications: `Varizes
      Osteoporose
      Hipertensão
      Gravidez
      Pinos ou placas metálicas no corpo`,
    pathName: 'massagem-modeladora',
  },
  {
    name: 'Massagem para Melhor Idade',
    description:
      'A massagem para a melhor idade oferece todos os benefícios já conhecidos pelos clientes mais jovens, em particular a massagem para idosos é ainda mais eficaz devido aos desafios tanto emocionais quanto físicos que os idosos experimentam.',
    indications: `Melhorar a circulação sanguínea e linfática
      Estimular a produção de colágeno na pele (elasticidade
      e hidratação)
      Aliviar as dores em geral
      Fortalecimento muscular (falta de força e incontinência)
      Melhorar a consciência corporal (dificuldade de
      equilíbrio e reflexos)
      Auxiliar os movimentos peristálticos (funcionamento
      gastrointestinal)
      Melhorar a autoestima
      Reduzir sintomas de estresse e ansiedade
      Melhorar a qualidade do sono
      Aumentar a capacidade e amplitude dos movimentos
      Diminuir os sintomas da depressão`,
    contraindications: `Nos casos de febres infecciosas, hemorragias,
      descalcificações graves (osteoporose severa), flebite,
      trombose, fraturas (antes de solidificadas), câncer,
      feridas abertas, queimaduras recentes.`,
    pathName: 'massagem-para-melhor-idade',
  },
  {
    name: 'Massagem Terapêutica',
    description:
      'A massagem terapêutica tonifica músculos, equilibra órgãos internos e sistema nervoso, aumenta a circulação e respiração celular, além de promover relaxamento e bem-estar. A liberação de ocitocina durante o tratamento combate tensão muscular, estresse, melhora a função intestinal e a pressão arterial.',
    indications: `Controle do estresse e problemas emocionais;
      Tratamento da ansiedade; Casos de fadiga e insônia;
      Normalização do humor; Controle dos batimentos
      cardíacos; Sensibilidade a dor; Alívio de tensões; Calma
      e equilíbrio; Liberação de hormônios que promovem
      bem-estar; Melhora da qualidade de vida; Melhora da
      elasticidade dos músculos; Diminuição do cansaço
      físico e mental; Diminuição da pressão arterial; Melhora
      da circulação sanguínea; Prevenção de problemas
      musculares; Melhora do sistema nervoso; Eliminação de
      resíduos metabólicos e toxinas; Tratamento do
      envelhecimento precoce da pele; Acelera o
      metabolismo e melhora da digestão; Equilíbrio do
      funcionamento do intestino; Tratamento de artroses.`,
    contraindications: `Infecções;
      Lesões ou pequenos traumas no corpo;
      Feridas abertas;
      Fraturas ósseas;
      Hemorragias;
      Descalcificações graves – osteoporose;
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
    name: 'Reflexologia Podal',
    description:
      'A Reflexologia podal parte da evidência que os nossos pés refletem o nosso corpo inteiro. Quando se pressiona certos pontos do pé, isso tem um efeito positivo sobre o membro, órgão, glândula, músculos, tendões o articulações correspondente a eles.',
    indications: `Stress (uma fonte de muitos problemas de saúde!);
      Preocupações; Dores de cabeça; Insônias; Dores
      musculares , musculoesqueléticas e articulares;
      Inflamações; Problemas digestivos e intestinais
      (constipação e má digestão); Doenças respiratórias (
      bronquite e asma); Desequilíbrios emocionais;`,
    contraindications: `Feridas, abcessos, alergias na pele ou dermatites nos
      pés ou nas pernas; Flebites nas pernas; Varizes nas
      pernas e pés; Trombose ou fraturas recente nos pés ou
      nas pernas; Infecções graves ; Febre; Cólicas com dores
      extremas; Queixas que precisam uma cirurgia; Edemas
      em membros inferiores ( pernas e pés); Câncer ;
      Problemas vasculares e cardiovasculares Ex: portadores
      de marcapasso;`,
    pathName: 'reflexologia-podal',
  },
  {
    name: 'Shiatsu',
    description:
      'No Shiatsu, o terapeuta utiliza pressão em pontos específicos para aliviar tensões físicas e promover o fluxo harmonioso da energia vital ao longo dos meridianos de acupuntura, proporcionando bem-estar físico e energético.',
    indications: `Qualquer pessoa que sofra com dores musculares
      (tendinites, fibromialgia etc), doenças respiratórias
      (asma, bronquite, rinite, sinusite ou resfriados),
      problemas circulatórios (varizes, arritmia, hipertensão
      arterial), digestivos, urinários e até reprodutor. Também
      é possível notar alívio dos sintomas da enxaqueca,
      artrose, artrite reumatoide, depressão e síndrome do
      pânico.`,
    contraindications: `Início de gravidez (até terceiro mês);
      Doenças acompanhadas de febre;
      Imunidade baixa;
      Doenças contagiosas;
      Em casos de fraturas ou luxações.`,
    pathName: 'shiatsu',
  },
  {
    name: 'Spa dos Pés',
    description:
      'O Spa dos pés é muito indicado para manter a saúde dos pés em dia, pois ele oferece muitas vantagens, funcionando como uma forma de tratamento, como também é um ótimo aliado para prevenir problemas na região.',
    indications: `Proporciona relaxamento
      Atua na circulação sanguínea
      Alivia as dores
      Promove muita maciez
      Alivia as calosidades`,
    contraindications: `Tratamento oncológico ativo, 3 primeiros meses de
      gestação, alterações cardíacas não controladas,
      hanseníase, diabetes não controlada, fraturas expostas,
      osteoporose não medicada, febre, sintomas gripais,
      processos infecciosos, varizes expostas, trombose,
      hipertensão não controlada, doenças de pele, alergias e
      lesões de pele em geral.`,
    pathName: 'spa-dos-pes',
  },
  {
    name: 'Ventosaterapia',
    description:
      'A Ventosaterapia utiliza ventosas para criar vácuo na pele, estimulando a circulação sanguínea e eliminando toxinas, conforme a Medicina Tradicional Chinesa. Promove melhoria na imunidade, oxigenação celular e saúde da pele.',
    indications: `Eliminação de dores nas costas devido tensão muscular
      ou contraturas;
      Desintoxicação do organismo;
      Alívio de dores musculares, abdominais e nas
      articulações;
      Redução do inchaço nos braços, pernas e pés;
      Alívio da dor de cabeça;
      Relaxamento do corpo e da mente;
      Aumento da circulação sanguínea local;
      Alívio de problemas digestivos;
      Controle da pressão arterial;
      Complemento para o tratamento de celulites`,
    contraindications: `A Técnica não deve ser aplicada em pessoas que
      possuem varizes, trombose, tromboflebite ou distúrbios
      hemorrágicos, febre, feridas na pele ou fratura no local a
      ser tratado. Além disso, a ventosaterapia deve ser
      evitada durante a gravidez.
      Apesar de não representarem contraindicações
      absolutas, determinadas situações exigem maior
      cautela no uso do tratamento com ventosas. Dessa
      forma, vale tomar cuidados especiais em pessoas com
      pressão alta descontrolada, logo após a prática de
      exercícios e na aplicação em áreas que não possuam
      uma boa camada muscular, com mais extremidades
      ósseas proeminentes`,
    pathName: 'ventosaterapia',
  },
]
