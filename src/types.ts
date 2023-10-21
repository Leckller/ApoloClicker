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
    mX: number,
    dX: number,
    Itens: ItensType[],
  }
};
