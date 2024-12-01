import React, { useEffect, useState } from 'react';
import { CardListType, ICardList } from './CardList.types';
import { Card } from '../card/Card';
import { useScreen } from 'usehooks-ts';
import { nanoid } from 'nanoid';
import { SvgSprite } from '../svg-sprite/SvgSprite';

export function CardList({ className, workArr }: ICardList) {
  const screen = useScreen();
  const [cards, setCards] = useState<CardListType[]>([]);
  const [pages, setPages] = useState<number[]>([]);

  const [activePage, setActivePage] = useState(1);

  function chunkArray(array: CardListType, chunkSize: number) {
    const result: CardListType[] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    setCards(result);
  }

  useEffect(() => {
    if (screen.width < 768) {
      chunkArray(workArr, 4);
    } else if (screen.width > 768 && screen.width < 1024) {
      chunkArray(workArr, 6);
    } else {
      chunkArray(workArr, 9);
    }
  }, [screen]);

  useEffect(() => {
    setPages(cards.map((_item, index) => index + 1));
  }, [cards]);

  const visibility = (index: number) => {
    if (
      index > activePage + 1 ||
      index === pages.length ||
      index < activePage - 1 ||
      index === pages.length ||
      index === pages[0]
    )
      return true;
    return false;
  };

  return (
    <div className=''>
      <ul
        className={`${className} grid h-auto auto-rows-auto grid-cols-2 gap-3 overflow-hidden md:grid-cols-3`}
      >
        {cards[activePage - 1] &&
          cards[activePage - 1].map((item) => <Card item={item} key={nanoid()} />)}
      </ul>

      {/* pagination */}
      <div className='my-4 flex items-center justify-center gap-2 md:my-8'>
        <div
          className=''
          onClick={() => {
            activePage - 1 >= 1 && setActivePage(activePage - 1);
          }}
        >
          <SvgSprite icon='chevron' width={8} className='cursor-pointer' />
        </div>

        <ul className='flex w-[200px] justify-center gap-2'>
          <li
            className={`${activePage - pages[0] < 1 && pages[0] !== activePage && 'hidden'} ${activePage === pages[0] ? 'active-page' : 'page'} cursor-pointer hover:border-bg-btn-secondary`}
            onClick={() => setActivePage(pages[0])}
          >
            {pages[0]}
          </li>
          <li className={`${activePage - pages[0] <= 2 && 'hidden'}`}>...</li>

          {pages.map((item) => (
            <li
              className={`${visibility(item) && 'hidden'} ${activePage === item ? 'active-page' : 'page'} cursor-pointer hover:border-bg-btn-secondary`}
              key={nanoid()}
              onClick={() => setActivePage(item)}
            >
              {item}
            </li>
          ))}
          <li className={`${pages.length - activePage <= 2 && 'hidden'}`}>...</li>
          <li
            className={`${pages.length - activePage < 1 && pages.length !== activePage && 'hidden'} ${activePage === pages.length ? 'active-page' : 'page'} cursor-pointer hover:border-bg-btn-secondary`}
            onClick={() => setActivePage(pages.length)}
          >
            {pages.length}
          </li>
        </ul>
        <div
          className=''
          onClick={() => {
            activePage < pages.length && setActivePage(activePage + 1);
          }}
        >
          <SvgSprite
            icon='chevron'
            width={8}
            className='rotate-180 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
