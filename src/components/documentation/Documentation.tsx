import React from 'react';
import { IDocumentation } from './Documentation.types';
import { Menu } from '../menu/Menu';
import { SvgSprite } from '../svg-sprite/SvgSprite';
import { Link } from 'react-router';

export function Documentation({ className }: IDocumentation) {
  return (
    <div className={`bg-bg-secondary py-3 ${className}`}>
      <div className='container flex justify-between'>
        <Link to='/elcore-test'>
          <SvgSprite icon='logo' width={170} className='md:cursor-pointer' />
        </Link>
        <Menu />
      </div>
    </div>
  );
}
