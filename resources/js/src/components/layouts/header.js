import React from 'react';

const Header = ({children}) => {
  return (
    <header className="header">
      <span className="header_title">{children}</span>
    </header>
  );
}

export default Header;