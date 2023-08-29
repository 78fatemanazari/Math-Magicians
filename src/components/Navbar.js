import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'darkorange' : 'black',
  });
  return (
    <div className="navbar">
      <h1 className="logo">Math Magicians</h1>
      <nav>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/calculator">Calculator</NavLink>
        <NavLink style={navLinkStyles} to="/quote">Quote</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
