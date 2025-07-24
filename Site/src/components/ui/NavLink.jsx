import { Link } from 'react-scroll';

const NavLink = ({ link, className, onClick, activeClass, offset }) => (
  <Link
    smooth={true}
    duration={300}
    spy={true}
    to={link.id}
    offset={offset}
    onClick={onClick}
    className={className}
    activeClass={activeClass}
  >
    {link.link}
  </Link>
);

export default NavLink;
