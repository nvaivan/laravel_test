import React from 'react';

import NavItem from './../raws/nav-item';

const Navigators = ({items}) => {
  return (
    <>
      <ul className="nav">
        {items.map(item => (
          <NavItem url={`/${item.id}`} key={item.id} title={`Document ${item.id}`} uploaded_by={item.uploaded_by}/>
        ))}
      </ul>
    </>
  );
}

export default Navigators;