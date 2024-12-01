import React from 'react';
import { IActionsBlock } from './ActionsBlock.types';
import { SocialBlock } from '../social-block/SocialBlock';
import { ActionsLinkBlock } from '../actions-link-block/ActionsLinkBlock';
import { ActionsUserBlock } from '../actions-user-block/ActionsUserBlock';

export function ActionsBlock({ className }: IActionsBlock) {
  return (
    <div className={`${className} bg-bg-tertiary py-3`}>
      <div className='container flex items-center justify-between'>
        <SocialBlock width={16} className='hidden md:flex' />
        <div className='flex w-full items-center justify-between gap-2 md:w-fit'>
          <ActionsLinkBlock />
          <ActionsUserBlock />
        </div>
      </div>
    </div>
  );
}
