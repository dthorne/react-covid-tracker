import React, {useCallback} from "react"
import {CountryData} from "../CountryCodesContext/CountryCodesContext";

export interface Card {
  title: string;
  type: ChartType;
  countries: CountryData[];
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

  const addCard = (card: Card) => {
    const newCards = [...cards];
    newCards.push(card);
    setCards(newCards);
  };

  const removeCard = (id: number) => {
    const newCards = [...cards]
    newCards.splice(id, 1);
    setCards(newCards);
  };

  return {
    cards,
    addCard,
    removeCard
  }
}
