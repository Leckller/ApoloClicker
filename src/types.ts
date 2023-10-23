export type ItensType = {
  name: string,
  preco: number,
  tipo: string,
  level: number,
  mX: number,
  dX: number,
};

export type GlobalState = {
  ClickerReducer: {
    Clicks: number,
    Dinheiro: number,
    Sprite: number,
    mX: number,
    dX: number,
    Itens: ItensType[],
    DinheiroPassivo: number,
  }
  LojasReducer: {
    loja: boolean,
    apolo: boolean,
  }
};
