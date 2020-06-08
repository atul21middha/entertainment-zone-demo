import React from 'react';

const ListItem = ({item}) => {
  return (
    <div className="listItem cursorPointer c">
      <div className="p-2">
        <img width="100%" height={200} src={item.images["Poster Art"].url} alt="item"/>
        <div className="mt-1">{item.title}</div>
      </div>

    </div>
  );
};

export default ListItem;
