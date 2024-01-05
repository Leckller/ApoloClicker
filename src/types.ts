export type ItensType = {
  name: string,
  preco: number,
  tipo: string,
  level: number,
  mX: number,
  dX: number,
  energia: number,
  velocidade: number,
  consumo: number,
  produz: number,
  tamanho: number,
};

export type GlobalState = {
  ClickerReducer: {
    Clicks: number,
    Dinheiro: number,
    mX: number,
    dX: number,
    energia: number,
    internet: number,
    Sprite: number,
    DinheiroPassivo: number,
    ProducaoCafe: number,
    limiteCafe: number,
    cafeAtual: number,
    consumoCafe: number,
    Itens: ItensType[],
  }
  LojasReducer: {
    loja: boolean,
    apolo: boolean,
    config: boolean,
    stats: boolean,
    menu: boolean,
  }
  timerReducer: {
    dias: number,
    timerEnd: false,
    seconds: number,
    minutes: number,
    inicio: number,
    historico: [],
  }
};
