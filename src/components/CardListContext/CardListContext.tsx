import React, {useCallback} from "react"

export interface Card {
  title: string;
  type: ChartType;
  countries: string[];
}

export enum ChartType {
  Line,
  Bar
}

export interface CardListContextData {
  cards: Card[];
  addCard: (card: Card) => void;
  removeCard: (id: number) => void;
}

export const cardListContextDefaultValue: CardListContextData = {
  cards: [],
  addCard: (card: Card) => null,
  removeCard: (id: number) => null
}

export const CardListContext = React.createContext(cardListContextDefaultValue)

export function useCardListContext(): CardListContextData {
  const [cards, setCards] = React.useState<Card[]>([]);

  const addCard = React.useCallback((card: Card) => {
    const newCards = [...cards];
    cards.push(card);
    setCards(newCards);
  }, [setCards]);

  const removeCard = React.useCallback((id: number) => {
    setCards([...cards].splice(id, 1));
  }, [setCards, cards]);

  return {
    cards,
    addCard,
    removeCard
  }
}
