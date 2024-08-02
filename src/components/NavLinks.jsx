import { NavLink } from 'react-router-dom';

import { useDashboard } from '../context/DashboardContext';

import links from '../utils/Links';
const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboard();
  console.log(user);
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
            // will discuss in a second
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
