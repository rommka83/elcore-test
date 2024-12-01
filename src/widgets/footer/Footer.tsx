import React from 'react';
import { IFooter } from './Footer.types';
import { AboutUsFooter } from '../../components/about-us-footer/AboutUsFooter';
import { ListLinks } from '../../components/list-links/ListLinks';
import { AdditionalSectionFooter } from '../../components/additional-section-footer/AdditionalSectionFooter';

export function Footer({}: IFooter) {
  return (
    <footer className=''>
      <div className='bg-bg-tertiary py-3 md:hidden'>
        <div className='container flex items-center gap-2'>
          <button className='text-text-secondary border-text-secondary text-nowrap border px-2 py-1 text-[8px]'>
            Личный кабинет
          </button>
          <ListLinks links={listActions} row={true} />
        </div>
      </div>
      <div className='bg-bg-secondary w-full py-6'>
        <div className='container grid grid-cols-3 justify-items-center gap-2 md:grid-cols-4'>
          <AboutUsFooter />
          <ListLinks title='Платформа' links={listPlatform} />
          <ListLinks title='Обучение и ресурсы' links={listTrainingAndResources} />
          <div className='hidden flex-col gap-2 md:flex'>
            <button className='text-text-secondary border-text-secondary border px-2 py-1'>
              Личный кабинет
            </button>
            <ListLinks links={listActions} />
          </div>
        </div>
      </div>
      <div className='bg-bg-tertiary py-3'>
        <div className='container'>
          <AdditionalSectionFooter />
        </div>
      </div>
    </footer>
  );
}

const listPlatform = ['ElcoreStore', 'ElcoreCloud', 'ElcoreIDE'];
const listTrainingAndResources = [
  'Что такое ElcorePLC',
  'Документация',
  'Обучающие материалы',
  'Примеры использования',
  'База знаний',
];
const listActions = [
  'Контакты',
  'Новости и статьи',
  'Сообщество (Форум)',
  'Тех поддержка',
];
