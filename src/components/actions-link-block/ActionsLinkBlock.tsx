import React from 'react';
import { IActionsLinkBlock } from './ActionsLinkBlock.types';

export function ActionsLinkBlock({}: IActionsLinkBlock) {
  return (
    <div className=''>
      <ul className='flex gap-2 md:gap-3'>
        <li className='text-text-secondary cursor-pointer text-xs'>Форум</li>
        <li className='text-text-secondary cursor-pointer text-xs'>Поиск</li>
        <li className='text-text-secondary cursor-pointer text-xs'>Контакты</li>
      </ul>
    </div>
  );
}
