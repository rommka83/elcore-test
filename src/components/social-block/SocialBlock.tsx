import React from 'react';
import { ISocialBlock } from './SocialBlock.types';
import { SvgSprite } from '../svg-sprite/SvgSprite';

export function SocialBlock({ className, width, height }: ISocialBlock) {
  return (
    <div className={`${className} flex gap-2`}>
      <SvgSprite
        icon='tg'
        width={width}
        height={height}
        className='cursor-pointer'
      />
      <SvgSprite
        icon='zen'
        width={width}
        height={height}
        className='cursor-pointer'
      />
      <SvgSprite
        icon='youtube'
        width={width}
        height={height}
        className='cursor-pointer'
      />
      <SvgSprite
        icon='vk'
        width={width}
        height={height}
        className='cursor-pointer'
      />
    </div>
  );
}
