import React from 'react';

function Ingredients({list}) {
  return (
    <div className="Ingredient-list">
      {list.map(item => <div className="Ingredient-item" key={item.text}>{item.icon + ' ' + item.text}</div>)}
    </div>
  );
}

export default Ingredients;