import React from 'react';
import { IAdditionalSectionFooter } from './AdditionalSectionFooter.types';
import { SocialBlock } from '../social-block/SocialBlock';

export function AdditionalSectionFooter({ className }: IAdditionalSectionFooter) {
  return (
    <div className={`${className} flex justify-between`}>
      <SocialBlock width={10} className='md:hidden' />
      <SocialBlock width={16} className='hidden md:flex' />

      <div className='flex gap-2'>
        <a href='#' className='text-text-tertiary text-[8px] md:text-xs'>
          Политика конфиденциальности
        </a>
        <a href='#' className='text-text-tertiary text-[8px] md:text-xs'>
          Карта сайта
        </a>
      </div>
    </div>
  );
}
