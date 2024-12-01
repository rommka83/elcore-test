import React from 'react';
import { IBreadCrumbs } from './BreadCrumbs.types';

export function BreadCrumbs({ className }: IBreadCrumbs) {
  return (
    <div className={`bg-bg-secondary py-2 md:bg-bg-tertiary ${className}`}>
      <div className='container flex gap-2'>
        <span className='bread-crumbs cursor-pointer'>Главная</span>
        <span className='bread-crumbs'>/</span>
        <span className='bread-crumbs cursor-pointer'>Новости и статьи</span>
      </div>
    </div>
  );
}
