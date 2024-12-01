import React from 'react';
import { CardList } from '../../components/card-list/CardList';
import { DB } from '../../../public/DB';

export function NewsAndArticles() {
  return <CardList workArr={DB} />;
}
