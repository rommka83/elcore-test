import React, { useEffect, useState } from 'react';
import { CardListType } from '../../components/card-list/CardList.types';
import { DB } from '../../../public/DB';
import { CardList } from '../../components/card-list/CardList';

export function Articles() {
  const [workArr, setWorkArr] = useState<CardListType>([]);

  useEffect(() => {
    const arr = DB.filter((item) => item.type === 'article');
    setWorkArr(arr);
  }, [DB]);

  return <CardList workArr={workArr} />;
}
