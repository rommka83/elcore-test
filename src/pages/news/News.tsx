import React, { useEffect, useState } from 'react';
import { CardList } from '../../components/card-list/CardList';
import { DB } from '../../../public/DB';
import { CardListType } from '../../components/card-list/CardList.types';

export function News() {
  const [workArr, setWorkArr] = useState<CardListType>([]);

  useEffect(() => {
    const arr = DB.filter((item) => item.type === 'news');
    setWorkArr(arr);
  }, [DB]);

  return <CardList workArr={workArr} />;
}
