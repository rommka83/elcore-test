import React from 'react';
import { IListLinks } from './ListLinks.types';
import { nanoid } from 'nanoid';

export function ListLinks({ className, title, links, row }: IListLinks) {
  return (
    <div className={`${className}`}>
      {title && (
        <p className='text-text-tertiary mb-3 text-xs font-bold md:text-sm'>
          {title}
        </p>
      )}
      <ul className={`flex gap-2 ${!row ? 'flex-col' : 'items-center'} `}>
        {links.map((link) => (
          <li
            key={nanoid()}
            className={`text-text-secondary ${row && 'text-center'} text-[8px] md:text-xs`}
          >
            <a href='#'>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
