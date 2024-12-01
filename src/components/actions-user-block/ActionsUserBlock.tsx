import React from 'react';
import { IActionsUserBlock } from './ActionsUserBlock.types';
import { SvgSprite } from '../svg-sprite/SvgSprite';

export function ActionsUserBlock({}: IActionsUserBlock) {
  return (
    <div className='flex gap-2 md:gap-3'>
      <SvgSprite icon='star' width={16} className='cursor-pointer' />
      <SvgSprite icon='basket' width={16} className='cursor-pointer' />
      <button className='bg-bg-btn-secondary text-text-secondary px-2 py-1 text-xs'>
        Личный кабинет
      </button>
    </div>
  );
}
