import React from 'react';




const ListItem = (props) => {
    return (
      <li>
          <p>{props.fav}</p>
          <button onClick={() => props.handleClick(props.pos)}>Delete Starship</button>
      </li>
      
    )

};

export default ListItem
