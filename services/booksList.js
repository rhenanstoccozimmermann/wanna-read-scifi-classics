const frankensteinCover = './images/frankenstein.jpeg';
const nosCover = './images/nos.png';
const euRoboCover = './images/eu_robo.png';
const fundacaoCover = './images/fundacao.png';
const solarisCover = './images/solaris.png';
const dunaCover = './images/duna.png';
const bladeRunnerCover = './images/blade_runner.jpg';
const odisseiaEspacoCover = './images/odisseia_espaco.png';
const maoEsquerdaEscuridaoCover = './images/mao_esquerda_escuridao.png';
const piqueniqueEstradaCover = './images/piquenique_estrada.png';
const kindredCover = './images/kindred.png';
const neuromancerCover = './images/neuromancer.png';
const estacaoPerdidoCover = './images/estacao_perdido.png';
const justicaAncilarCover = './images/justica_ancilar.png';
const quintaEstacaoCover = './images/quinta_estacao.png';

const booksList = [
  {
    id: 1,
    title: 'Frankenstein ou o Prometeu Moderno',
    author: 'Mary Shelley',
    releaseYear: '1818', 
    description: 'A obra traz questionamentos a respeito dos avanços das ciências naturais e é considerada o marco inicial do gênero da ficção científica. A sua primeira adaptação cinematográfica é de 1910 e foi produzida por Thomas Edison.',
    cover: frankensteinCover
  },
  {
    id: 2,
    title: 'Nós',
    author: 'Yevgeny Zamyatin',
    releaseYear: '1924',
    description: 'A obra inaugura a crítica a regimes totalitários, sendo considerada a mãe das distopias.',
    cover: nosCover
  },
  {
    id: 3,
    title: 'Eu, Robô',
    author: 'Isaac Asimov',
    releaseYear: '1950',
    description: 'A obra reúne contos que instituem as Três Leis da Robótica, normas para que robôs não ameacem a humanidade. Inspirou o filme homônimo de 2004, de Alex Proyas.',
    cover: euRoboCover
  },
  {
    id: 4,
    title: 'Fundação',
    author: 'Isaac Asimov',
    releaseYear: 'anos 1950',
    description: 'A trilogia traz uma nova forma de escrever sobre o espaço, além de trazer a psico-história, que mescla história, sociologia e matemática estatística para prever ações coletivas.',
    cover: fundacaoCover
  },
  {
    id: 5,
    title: 'Solaris',
    author: 'Stanislaw Lem',
    releaseYear: '1961',
    description: 'O livro traz a representação do alienígena incompreensível. Em 1972, tornou-se um filme de referência, dirigido por Andrei Tarkovski.',
    cover: solarisCover
  },
  {
    id: 6,
    title: 'Duna',
    author: 'Frank Herbert',
    releaseYear: '1965',
    description : 'A obra traz um novo grau de complexidade na construção de universos: cria ecossistemas, religiões e uma trama política intrincada e intensa. Recebeu a sua primeira adaptação ao cinema em 1984, por David Lynch.',
    cover: dunaCover
  },
  {
    id: 7,
    title: 'Androides Sonham com Ovelhas Elétricas?',
    author: 'Philip K. Dick',
    releaseYear: '1968',
    description: 'O livro é responsável por inovar nas discussões sobre o que seria o humano. Popularizou-se como Blade Runner, título da sua adatapção ao cinema de 1982, feita por Ridley Scott.',
    cover: bladeRunnerCover
  },
  {
    id: 8,
    title: '2001: Uma Odisseia no Espaço',
    author: 'Arthur C. Clarke',
    releaseYear: '1968',
    description: 'A obra trata sobre a evolução humana, o existencialismo, a tecnologia, a inteligência artificial e a vida extraterrestre. O livro foi desenvolvido juntamente com a sua versão cinematográfica, dirigida por Stanley Kubrick, e foi publicado após o filme, no mesmo ano.',
    cover: odisseiaEspacoCover
  },
  {
    id: 9,
    title: 'A Mão Esquerda da Escuridão',
    author: 'Ursula K Le. Guin',
    releaseYear: '1969',
    description: 'A obra traz reflexões sobre gênero e seus efeitos na cultura e na sociedade.',
    cover: maoEsquerdaEscuridaoCover
  },
  {
    id: 10,
    title: 'Piquenique na Estrada',
    author: 'Arkádi & Boris Strugátski',
    releaseYear: '1971',
    description: 'A obra reflete o momento histórico da Guerra Fria. O livro recebeu adaptação cinematográfica em 1979 com Stalker, filme dirigido por Andrei Tarkovski.',
    cover: piqueniqueEstradaCover
  },
  {
    id: 11,
    title: 'Kindred: Laços de Sangue',
    author: 'Octavia Butler',
    releaseYear: '1979',
    description: 'A obra traz um novo elemento nas viagens no tempo: a posição de quem viaja. No livro, a protagonista negra sairá de Los Angeles em 1976 para um sistema escravagista em Maryland no século XIX.',
    cover: kindredCover
  },
  {
    id: 12,
    title: 'Neuromancer',
    author: 'William Gibson',
    releaseYear: '1984',
    description: 'A obra trata sobre um novo território em disputa, o ciberespaço. A obra e o movimento em que se insere, o cyberpunk, influenciaram o filme Matrix, de 1999, das irmãs Wachowski.',
    cover: neuromancerCover
  },
  {
    id: 13,
    title: 'Estação Perdido',
    author: 'China Miéville',
    releaseYear: '2000',
    description: 'A obra inova ao estabelecer a weird fiction, uma mescla de ficção científica, fantasia, gótico e terror.',
    cover: estacaoPerdidoCover
  },
  {
    id: 14,
    title: 'Justiça Ancilar',
    author: 'Ann Leckie',
    releaseYear: '2013',
    description: 'A obra inova pela narrativa, que é elaborada pelo ponto de vista de uma onipresente inteligência artificial.',
    cover: justicaAncilarCover
  },
  {
    id: 15,
    title: 'A Quinta Estação',
    author: 'N. K. Jemisin',
    releaseYear: '2015',
    description: 'A obra é o primeiro livro da premiada trilogia A Terra Partida, e traz uma história complexa, profunda e tocante, com uma intensa crítica social.',
    cover: quintaEstacaoCover
  }
];

export default booksList;
