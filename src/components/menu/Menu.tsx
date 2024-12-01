import React, { useEffect, useRef, useState } from 'react';
import { IMenu } from './Menu.types';
import { SvgSprite } from '../svg-sprite/SvgSprite';
import { SelectCustom } from '../select-custom/SelectCustom';

export function Menu({}: IMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);
  const select = useRef(null);
  const li = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: Event) => {
    if (event.target !== menu.current && event.target !== select.current) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative flex items-center'>
      <div className='md:hidden' onClick={handleOpen} ref={menu}>
        <SvgSprite icon='burger' className='pointer-events-none' width={20} />
      </div>
      {/* мобильное меню */}
      <ul
        className={`${!isOpen && 'hidden'} absolute right-0 top-[130%] flex w-fit flex-col gap-1 rounded-lg bg-bg-secondary p-3 md:hidden`}
      >
        <li className='text-nowrap py-1 text-sm text-text-secondary'>ElcoreStore</li>
        <li className='text-nowrap py-1 text-sm text-text-secondary'>ElcoreCloud</li>
        <li className='text-nowrap py-1 text-sm text-text-secondary'>ElcoreIDE</li>
        <li className='text-nowrap py-1 text-sm text-text-secondary' ref={li}>
          <SelectCustom ref={select} />
        </li>
        <li className='text-nowrap py-1 text-sm text-text-secondary'>
          Новости и статьи
        </li>
      </ul>

      {/* десктопное меню */}
      <ul className='hidden gap-2 md:flex md:gap-3'>
        <li className='cursor-pointer text-nowrap text-sm text-text-secondary'>
          ElcoreStore
        </li>
        <li className='cursor-pointer text-nowrap text-sm text-text-secondary'>
          ElcoreCloud
        </li>
        <li className='cursor-pointer text-nowrap text-sm text-text-secondary'>
          ElcoreIDE
        </li>
        <li className='cursor-pointer text-nowrap text-sm text-text-secondary'>
          <SelectCustom top />
        </li>
        <li className='cursor-pointer text-nowrap text-sm text-text-secondary'>
          Новости и статьи
        </li>
      </ul>
    </div>
  );
}
