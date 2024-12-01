import React from 'react';
import { IAboutUsFooter } from './AboutUsFooter.types';
import { SvgSprite } from '../svg-sprite/SvgSprite';

export function AboutUsFooter({ className }: IAboutUsFooter) {
  return (
    <div className={`${className} flex flex-col gap-3`}>
      <SvgSprite icon='logo' width={100} className='md:cursor-pointer' />
      <p className='text-text-secondary text-[8px] font-bold md:text-sm'>
        Платформа для автоматизации ваших процессов
      </p>
      <SvgSprite icon='download' width={70} className='md:cursor-pointer' />
      <p className='text-text-secondary text-[8px] font-bold md:text-sm'>
        © ООО «НПО «Фарватер» 2024
      </p>
    </div>
  );
}
