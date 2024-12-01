import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { ISelectCustom } from './SelectCustom.types';
import { nanoid } from 'nanoid';
import { SvgSprite } from '../svg-sprite/SvgSprite';

export const SelectCustom = forwardRef<HTMLDivElement, ISelectCustom>(
  ({ className, top }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`${className} relative`} onClick={handleOpen}>
        <div
          className={`grid ${top ? 'grid-cols-[1fr_0.2fr]' : 'grid-cols-[0.2fr_1fr]'} items-center gap-2`}
        >
          <div className={top ? 'order-1' : 'order-2'} ref={ref}>
            Обучение и ресурсы
          </div>
          <SvgSprite
            icon='triangle'
            width={10}
            className={`${isOpen && 'rotate-180'} ${top ? 'order-2' : 'order-1'}`}
          />
        </div>
        {isOpen && (
          <ul
            className={`absolute top-[110%] rounded-xl bg-bg-secondary p-4 ${!top && '-left-[200px]'}`}
          >
            {links.map((link) => (
              <li key={nanoid()} className='text-nowrap py-2'>
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

const links = [
  'Что такое ElcorePLC',
  'Документация',
  'Обучающие материалы',
  'Примеры использования',
  'База знаний',
];
