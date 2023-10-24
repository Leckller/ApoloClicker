export type ItensType = {
  name: string,
  preco: number,
  tipo: string,
  level: number,
  mX: number,
  dX: number,
  energia: number,
  consumo: number,
  produz: number,
};

export type GlobalState = {
  ClickerReducer: {
    Clicks: number,
    Dinheiro: number,
    Sprite: number,
    mX: number,
    dX: number,
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
  }
};
