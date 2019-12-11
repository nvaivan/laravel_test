import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({url, title, uploaded_by}) => {
  return (
    <NavLink to={url} className="nav-item" activeClassName="actived">
      <h3 className="nav-item__heading">{title}</h3>
      <p className="nav-item__uploaded-by">{uploaded_by}</p>
    </NavLink>
  );
}

export default NavItem;