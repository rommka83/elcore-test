import React from 'react';
import { ICard } from './Card.types';
import img from '../../assets/test.png';

export function Card({ className, item }: ICard) {
  return (
    <div className={`${className} flex w-fit flex-col gap-3 rounded-lg pb-6`}>
      <img src={img} alt='#' />
      <div className='flex gap-1'>
        {item.type === 'news' && (
          <>
            <span className='card-text-tertiary text-[8px]'>{item.date}</span>
            <span className='card-text-tertiary text-[8px]'>/</span>
          </>
        )}
        <span className='card-text-tertiary text-[8px]'>
          {item.type === 'news' ? 'Новость' : 'Статья'}
        </span>
      </div>
      <p className='text-sm font-bold sm:text-xl'>{item.title}</p>
      <p className='text-xs sm:text-sm'>{item.description}</p>
    </div>
  );
}
