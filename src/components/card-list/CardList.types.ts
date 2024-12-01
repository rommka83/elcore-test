export interface ICardList {
  className?: string;
  workArr: CardListType;
}

export type CardListType = {
  type: 'news' | 'article';
  title: string;
  date: string;
  description: string;
}[];
