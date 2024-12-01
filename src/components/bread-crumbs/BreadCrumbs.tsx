import React from 'react';
import { IBreadCrumbs } from './BreadCrumbs.types';

export function BreadCrumbs({ className }: IBreadCrumbs) {
  return (
    <div className={`bg-bg-secondary md:bg-bg-tertiary py-2 ${className}`}>
      <div className='container flex gap-2'>
        <span className='text-text-secondary cursor-pointer text-[8px]'>
          Главная
        </span>
        <span className='text-text-secondary text-[8px]'>/</span>
        <span className='text-text-secondary cursor-pointer text-[8px]'>
          Новости и статьи
        </span>
      </div>
    </div>
  );
}
