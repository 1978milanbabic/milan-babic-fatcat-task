import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    !isHome && (
      <nav className="bg-gray80 w-screen fixed top-0 left-0">
        <ul className="flex space-x-8 py-2">
          <li>
            <Link
              to="/"
              className={clsx(isHome ? 'text-white' : 'text-gray40', 'p-2')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/list"
              className={clsx(
                pathname.startsWith('/list') ? 'text-white' : 'text-gray40',
                'p-2'
              )}
            >
              List
            </Link>
          </li>
          <li>
            <Link
              to="/form"
              className={clsx(
                pathname.startsWith('/form') ? 'text-white' : 'text-gray40',
                'p-2'
              )}
            >
              Form
            </Link>
          </li>
          <li>
            <Link
              to="/page"
              className={clsx(
                pathname.startsWith('/page') ? 'text-white' : 'text-gray40',
                'p-2'
              )}
            >
              Page
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};
