import React from 'react';
import { IHeader } from './Header.types';
import { SvgSprite } from '../../components/svg-sprite/SvgSprite';
import { Menu } from '../../components/menu/Menu';
import { Documentation } from '../../components/documentation/Documentation';
import { ActionsBlock } from '../../components/actions-block/ActionsBlock';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';

export function Header({ className }: IHeader) {
  return (
    <header
      className={`${className} grid grid-rows-[1fr_0.3fr_0.3fr] md:grid-rows-[0.3fr_1fr_0.3fr]`}
    >
      <Documentation className='md:order-2' />
      <ActionsBlock className='md:order-1' />
      <BreadCrumbs className='order-3' />
    </header>
  );
}
