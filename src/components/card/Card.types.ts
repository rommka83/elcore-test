export interface ICard {
  className?: string;
  item: {
    type: 'news' | 'article';
    title: string;
    date: string;
    description: string;
  };
}
