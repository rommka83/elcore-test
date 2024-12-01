import { Footer } from '../widgets/footer';
import { Header } from '../widgets/header';
import { Link, Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
function App() {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/elcore-test':
        setTitle('Новости и статьи');
        break;
      case '/elcore-test/news':
        setTitle('Новости');
        break;
      case '/elcore-test/articles':
        setTitle('Статьи');
        break;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <h1 className='my-5 text-center text-lg font-bold md:text-4xl'>{title}</h1>
          <div className='mb-5 flex gap-3'>
            <Link
              className={
                pathname === '/elcore-test' ? 'btn-link-active' : 'btn-link'
              }
              to='/elcore-test'
            >
              Все новости и статьи
            </Link>
            <Link
              className={
                pathname === '/elcore-test/news' ? 'btn-link-active' : 'btn-link'
              }
              to='/elcore-test/news'
            >
              Новости
            </Link>
            <Link
              className={
                pathname === '/elcore-test/articles' ? 'btn-link-active' : 'btn-link'
              }
              to='/elcore-test/articles'
            >
              Статьи
            </Link>
          </div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
